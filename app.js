document.addEventListener('DOMContentLoaded', () => {
    // 1. Copy to Clipboard Functionality
    const copyButtons = [
        { id: 'btn-copy-case-id', text: '482910' },
        { id: 'btn-copy-ssn', text: '19820412-2398' },
        { id: 'btn-copy-amount', text: '3450000' }
    ];

    copyButtons.forEach(btnInfo => {
        const btn = document.getElementById(btnInfo.id);
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Copy logic
                navigator.clipboard.writeText(btnInfo.text).then(() => {
                    // Visual feedback
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                    btn.style.color = 'var(--success)';
                    
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.style.color = '';
                    }, 1500);
                }).catch(err => {
                    console.error('Kunde inte kopiera text: ', err);
                });
            });
        }
    });

    // 2. Note Saving Simulation with LocalStorage persistence
    const txtNotes = document.getElementById('txt-notes');
    const btnSaveNotes = document.getElementById('btn-save-notes');
    const notesStatus = document.getElementById('notes-status');

    // Load saved note if exists
    const savedNote = localStorage.getItem('loan_case_note_482910');
    if (savedNote && txtNotes) {
        txtNotes.value = savedNote;
    }

    if (btnSaveNotes && txtNotes && notesStatus) {
        btnSaveNotes.addEventListener('click', () => {
            const noteText = txtNotes.value;
            notesStatus.textContent = 'Sparar...';
            notesStatus.style.color = 'var(--primary-highlight)';

            setTimeout(() => {
                localStorage.setItem('loan_case_note_482910', noteText);
                const now = new Date();
                const timeString = now.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' });
                notesStatus.textContent = `Sparat kl ${timeString}`;
                notesStatus.style.color = 'var(--success)';
                
                setTimeout(() => {
                    notesStatus.textContent = 'Alla anteckningar sparade';
                    notesStatus.style.color = '';
                }, 3000);
            }, 600);
        });
    }

    // 3. Action Buttons - Pausa, Neka, Gå till Policykontroll
    const btnPause = document.getElementById('btn-pause-case');
    const btnReject = document.getElementById('btn-reject-case');
    const btnProceed = document.getElementById('btn-proceed');
    const statusPill = document.querySelector('.status-pill');

    if (btnPause && statusPill) {
        btnPause.addEventListener('click', () => {
            const isPaused = statusPill.classList.contains('paused');
            
            if (!isPaused) {
                statusPill.className = 'status-pill';
                statusPill.style.backgroundColor = 'var(--warning-light)';
                statusPill.style.color = 'var(--warning)';
                statusPill.style.borderColor = 'var(--warning-border)';
                statusPill.innerHTML = '<span class="status-indicator-dot" style="background-color: var(--warning);"></span> Vilande';
                btnPause.textContent = 'Återuppta';
                btnPause.classList.replace('btn-secondary', 'btn-primary');
                if (btnProceed) btnProceed.disabled = true;
            } else {
                statusPill.className = 'status-pill under-review';
                statusPill.style = '';
                statusPill.innerHTML = '<span class="status-indicator-dot"></span> Under utredning';
                btnPause.textContent = 'Pausa';
                btnPause.classList.replace('btn-primary', 'btn-secondary');
                if (btnProceed) btnProceed.disabled = false;
            }
            statusPill.classList.toggle('paused');
        });
    }

    if (btnReject && statusPill) {
        btnReject.addEventListener('click', () => {
            if (confirm('Är du säker på att du vill neka denna låneansökan?')) {
                statusPill.className = 'status-pill rejected';
                statusPill.style = '';
                statusPill.innerHTML = '<span class="status-indicator-dot"></span> Nekad';
                
                if (btnProceed) btnProceed.style.display = 'none';
                if (btnPause) btnPause.style.display = 'none';
                btnReject.textContent = 'Ärendet nekat';
                btnReject.disabled = true;
            }
        });
    }

    if (btnProceed) {
        btnProceed.addEventListener('click', () => {
            alert('Navigerar till steg: Policykontroll');
            window.location.href = 'policykontroll.html';
        });
    }

    // 4. Sidebar Manual Collapse
    const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    
    // Load sidebar state from localStorage
    const isSidebarCollapsed = localStorage.getItem('sidebar_collapsed') === 'true';
    if (isSidebarCollapsed && sidebar) {
        sidebar.classList.add('collapsed');
        updateToggleIcon(true);
    }
    
    if (btnToggleSidebar && sidebar) {
        btnToggleSidebar.addEventListener('click', () => {
            const collapsed = sidebar.classList.toggle('collapsed');
            localStorage.setItem('sidebar_collapsed', collapsed);
            updateToggleIcon(collapsed);
        });
    }
    
    function updateToggleIcon(collapsed) {
        if (!btnToggleSidebar) return;
        const iconSvg = btnToggleSidebar.querySelector('svg');
        if (iconSvg) {
            if (collapsed) {
                // Point chevron right
                iconSvg.style.transform = 'rotate(180deg)';
                btnToggleSidebar.title = "Expandera meny";
            } else {
                // Point chevron left (default)
                iconSvg.style.transform = '';
                btnToggleSidebar.title = "Minimera meny";
            }
        }
    }

    // 5. Sidebar Actions Interactivity Simulation
    function showToast(message, type = 'success') {
        let toastContainer = document.getElementById('toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toast-container';
            toastContainer.style.position = 'fixed';
            toastContainer.style.bottom = '2rem';
            toastContainer.style.right = '2rem';
            toastContainer.style.zIndex = '9999';
            toastContainer.style.display = 'flex';
            toastContainer.style.flexDirection = 'column';
            toastContainer.style.gap = '0.5rem';
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.style.padding = '0.85rem 1.25rem';
        toast.style.borderRadius = 'var(--radius-md)';
        toast.style.fontSize = '0.82rem';
        toast.style.fontWeight = '600';
        toast.style.color = '#ffffff';
        toast.style.boxShadow = 'var(--shadow-lg)';
        toast.style.display = 'flex';
        toast.style.alignItems = 'center';
        toast.style.gap = '0.5rem';
        toast.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';

        if (type === 'success') {
            toast.style.backgroundColor = 'var(--primary)';
            toast.style.border = '1px solid rgba(60, 162, 144, 0.3)';
            toast.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-highlight)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> ${message}`;
        } else if (type === 'danger') {
            toast.style.backgroundColor = '#7f1d1d';
            toast.style.border = '1px solid var(--danger)';
            toast.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> ${message}`;
        } else {
            toast.style.backgroundColor = 'var(--primary-dark)';
            toast.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            toast.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> ${message}`;
        }

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        }, 50);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 4000);
    }

    const linkUpdate = document.getElementById('action-update-eng');
    if (linkUpdate) {
        linkUpdate.addEventListener('click', (e) => {
            e.preventDefault();
            const iconWrapper = linkUpdate.querySelector('.step-icon-wrapper');
            const originalHTML = iconWrapper.innerHTML;
            iconWrapper.innerHTML = `<svg class="spin-animation" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="6.34" y1="17.66" x2="4.22" y2="19.78"/><line x1="19.78" y1="4.22" x2="17.66" y2="6.34"/></svg>`;
            
            // Add rotation keyframe style once dynamically if not present
            if (!document.getElementById('style-spin-animation')) {
                const styleEl = document.createElement('style');
                styleEl.id = 'style-spin-animation';
                styleEl.innerHTML = `
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .spin-animation {
                        animation: spin 1s linear infinite;
                    }
                `;
                document.head.appendChild(styleEl);
            }

            setTimeout(() => {
                iconWrapper.innerHTML = originalHTML;
                showToast('Kundens engagemang har uppdaterats från UC och interna system.');
            }, 1200);
        });
    }

    const linkReject = document.getElementById('action-reject-case');
    if (linkReject) {
        linkReject.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Är du säker på att du vill avslå detta ärende?')) {
                const statusPill = document.querySelector('.status-pill');
                if (statusPill) {
                    statusPill.className = 'status-pill rejected';
                    statusPill.style = '';
                    statusPill.innerHTML = '<span class="status-indicator-dot"></span> Nekad';
                }
                showToast('Ärendet har markerats som avslaget/nekat.', 'danger');
            }
        });
    }

    const linkArchive = document.getElementById('action-archive-case');
    if (linkArchive) {
        linkArchive.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Vill du arkivera detta ärende?')) {
                const statusPill = document.querySelector('.status-pill');
                if (statusPill) {
                    statusPill.className = 'status-pill';
                    statusPill.style.backgroundColor = 'var(--text-light)';
                    statusPill.style.color = 'var(--text-white)';
                    statusPill.style.borderColor = 'var(--border-color)';
                    statusPill.innerHTML = '<span class="status-indicator-dot" style="background-color: var(--text-white);"></span> Arkiverat';
                }
                showToast('Ärendet har arkiverats.', 'info');
            }
        });
    }

    const linkUnarchive = document.getElementById('action-unarchive-case');
    if (linkUnarchive) {
        linkUnarchive.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Vill du delarkivera detta ärende och återuppta utredningen?')) {
                const statusPill = document.querySelector('.status-pill');
                if (statusPill) {
                    statusPill.className = 'status-pill under-review';
                    statusPill.style = '';
                    statusPill.innerHTML = '<span class="status-indicator-dot"></span> Under utredning';
                }
                showToast('Ärendet har delarkiverats och är nu under utredning igen.');
            }
        });
    }

    // 6. Sidebar Actions Submenu Toggle
    const toggleActionsBtn = document.getElementById('toggle-actions-menu');
    const actionsSubmenu = document.getElementById('actions-submenu');
    
    // Load state from localStorage
    const isSubmenuExpanded = localStorage.getItem('actions_submenu_expanded') === 'true';
    if (isSubmenuExpanded && toggleActionsBtn && actionsSubmenu) {
        toggleActionsBtn.classList.add('active');
        actionsSubmenu.classList.add('expanded');
    }

    if (toggleActionsBtn && actionsSubmenu) {
        toggleActionsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent immediate body click trigger
            const expanded = actionsSubmenu.classList.toggle('expanded');
            toggleActionsBtn.classList.toggle('active', expanded);
            localStorage.setItem('actions_submenu_expanded', expanded);
        });

        // Close actions submenu when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggleActionsBtn.contains(e.target) && !actionsSubmenu.contains(e.target)) {
                actionsSubmenu.classList.remove('expanded');
                toggleActionsBtn.classList.remove('active');
                localStorage.setItem('actions_submenu_expanded', 'false');
            }
        });
    }
});
