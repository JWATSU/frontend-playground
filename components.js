/**
 * Nordiska Banken - HTML Template Fragments for local/CORS-free execution.
 * Storing layout fragments as JavaScript template strings allows double-clicking the
 * HTML files directly (file:// protocol) without triggering CORS security blocks.
 */

const SIDEBAR_FRAGMENT = `
<aside class="sidebar" id="sidebar">
    <!-- Sidebar Header / Branding -->
    <div class="sidebar-header">
        <div class="logo-icon">N</div>
        <div class="logo-text-wrapper">
            <div class="logo-text">Nordiska</div>
        </div>
        <button class="sidebar-toggle-btn" id="btn-toggle-sidebar" title="Minimera meny">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
    </div>

    <!-- Active Case Widget -->
    <div class="sidebar-case-summary">
        <div class="case-label">Aktivt Ärende</div>
        <div class="case-id">
            #482910
            <button class="copy-btn" id="btn-copy-case-id" title="Kopiera ärendenummer">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
        </div>
        <div class="customer-name">Johan Andersson</div>
        <div class="loan-amount">3 450 000 SEK</div>
    </div>

    <!-- Navigation Menu -->
    <nav class="sidebar-menu">
        <div class="menu-section-title">Huvudmeny</div>
        <ul class="sidebar-list">
            <li>
                <a href="index.html" class="sidebar-link" data-title="Översikt">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
                    </span>
                    Översikt
                </a>
            </li>
        </ul>

        <div class="menu-section-title" style="margin-top: 1.5rem;">Ärendesteg</div>
        <ul class="sidebar-list">
            <li>
                <a href="kundinformation.html" class="sidebar-link" data-title="Kundinformation">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </span>
                    Kundinformation
                    <span class="step-status-icon" title="Klar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="laneansokan.html" class="sidebar-link" data-title="Låneansökan">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </span>
                    Låneansökan
                    <span class="step-status-icon" title="Klar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="engagemang.html" class="sidebar-link" data-title="Engagemang">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </span>
                    Engagemang
                    <span class="step-status-icon" title="Klar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="policykontroll-1.html" class="sidebar-link" data-title="Policykontroll 1">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </span>
                    Policykontroll 1
                    <span class="step-status-icon" title="Pågår">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="sakerheter.html" class="sidebar-link" data-title="Säkerheter">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    </span>
                    Säkerheter
                    <span class="step-status-icon" title="Ej påbörjad">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="policykontroll-2.html" class="sidebar-link" data-title="Policykontroll 2">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </span>
                    Policykontroll 2
                    <span class="step-status-icon" title="Ej påbörjad">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="uppsummering-och-risk.html" class="sidebar-link" data-title="Uppsummering och risk">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="9" y1="12" x2="15" y2="12"></line><line x1="9" y1="16" x2="15" y2="16"></line><line x1="9" y1="8" x2="10" y2="8"></line></svg>
                    </span>
                    Uppsummering och risk
                    <span class="step-status-icon" title="Ej påbörjad">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="beslut.html" class="sidebar-link" data-title="Beslut">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                    </span>
                    Beslut
                    <span class="step-status-icon" title="Ej påbörjad">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="dokument.html" class="sidebar-link" data-title="Dokument">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    </span>
                    Dokument
                    <span class="step-status-icon" title="Ej påbörjad">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                    </span>
                </a>
            </li>
            <li>
                <a href="avslut.html" class="sidebar-link" data-title="Avslut">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </span>
                    Avslut
                    <span class="step-status-icon" title="Ej påbörjad">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                    </span>
                </a>
            </li>
        </ul>
        <ul class="sidebar-list actions-section">
            <li>
                <a href="#" class="sidebar-link sidebar-dropdown-toggle" id="toggle-actions-menu" data-title="Åtgärder">
                    <span class="step-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m11.4 11.4l.7.7m0-12.8l-.7.7M6.3 17.7l-.7.7"/></svg>
                    </span>
                    Åtgärder
                    <span class="dropdown-chevron">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                </a>
                <ul class="sidebar-submenu" id="actions-submenu">
                    <li>
                        <a href="#" class="sidebar-link sidebar-action-link action-update" id="action-update-eng" data-title="Uppdatera engagemang">
                            <span class="step-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                            </span>
                            Uppdatera engagemang
                        </a>
                    </li>
                    <li>
                        <a href="#" class="sidebar-link sidebar-action-link action-archive" id="action-archive-case" data-title="Arkivera ärende">
                            <span class="step-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>
                            </span>
                            Arkivera ärende
                        </a>
                    </li>
                    <li>
                        <a href="#" class="sidebar-link sidebar-action-link action-unarchive" id="action-unarchive-case" data-title="Delarkivera ärende">
                            <span class="step-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4M12 12v6"/></svg>
                            </span>
                            Delarkivera ärende
                        </a>
                    </li>
                    <li>
                        <a href="#" class="sidebar-link sidebar-action-link action-reject" id="action-reject-case" data-title="Avslå ärende">
                            <span class="step-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                            </span>
                            Avslå ärende
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>

    <!-- Sidebar User Profile Footer -->
    <div class="sidebar-footer">
        <div class="user-avatar">EB</div>
        <div class="user-info">
            <span class="user-name">Erik Bergström</span>
            <span class="user-role">Handläggare</span>
        </div>
    </div>
</aside>
`;

const HEADER_FRAGMENT = `
<header class="case-top-header">
    <div class="header-left">
        <div class="breadcrumbs">
            <a href="index.html">Ärenden</a>
            <span class="separator">/</span>
            <span class="current" id="header-breadcrumb-current">Ärende #482910</span>
        </div>
        <div class="case-title-row">
            <h1 id="header-title">Ärendeöversikt</h1>
            <span class="status-pill under-review" id="header-status-pill">
                <span class="status-indicator-dot"></span>
                Under utredning
            </span>
        </div>
    </div>
    <!-- Action Controls -->
    <div class="header-actions" id="header-actions-container">
    </div>
</header>
`;

const FOOTER_FRAGMENT = `
<footer class="app-footer">
    <div class="footer-content">
        <div class="footer-left">
            <span>© 2026 Nordiska Banken</span>
            <span class="footer-separator">|</span>
            <span>Handläggningssystem</span>
            <span class="footer-separator">|</span>
            <span>Systemversion 2.4.1-prod</span>
        </div>
        <div class="footer-right">
            <a href="#support">Support &amp; Incident</a>
            <a href="#help">Lathund &amp; Manualer</a>
            <a href="#systemstatus">Systemstatus (OK)</a>
        </div>
    </div>
</footer>
`;
