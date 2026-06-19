const fs = require('fs');
const postcss = require('postcss');

const cssContent = fs.readFileSync('styles.css', 'utf8');

const plugin = postcss.plugin('organize-css', () => {
    return (root) => {
        // 1. Remove unnecessary !important
        root.walkDecls(decl => {
            if (decl.important) {
                // Keep the important if it's the inline style override
                // .detail-item[style*="grid-column: span 2"] { grid-column: span 1 !important; }
                if (decl.parent && decl.parent.selector && decl.parent.selector.includes('[style*="grid-column: span 2"]')) {
                    // keep
                } else {
                    decl.important = false;
                }
            }
        });

        // 2. Organize into sections
        // We will create new roots for each section and move rules into them.
        const sections = {
            imports: postcss.root(),
            core: postcss.root(),
            layout: postcss.root(),
            header: postcss.root(),
            sidebar: postcss.root(),
            dashboard: postcss.root(),
            widgets: postcss.root(),
            footer: postcss.root(),
            responsive: postcss.root()
        };

        const classifyRule = (node) => {
            if (node.type === 'atrule' && node.name === 'import') return 'imports';
            if (node.type === 'atrule' && node.name === 'media') return 'responsive';
            if (node.type === 'comment') return null; // We'll discard existing comments for a cleaner structure, or keep them?
            
            if (node.type === 'rule') {
                const sel = node.selector;
                if (sel.includes(':root') || sel.includes('body') || sel === '*' || sel.includes('*::before')) return 'core';
                if (sel.includes('.app-container') || sel.includes('.main-viewport')) return 'layout';
                if (sel.includes('.case-top-header') || sel.includes('.header-') || sel.includes('.breadcrumbs') || sel.includes('.case-title') || sel.includes('.status-pill') || sel.includes('.btn')) return 'header';
                if (sel.includes('sidebar') || sel.includes('logo') || sel.includes('user-') || sel.includes('step-icon') || sel.includes('dropdown')) return 'sidebar';
                if (sel.includes('footer')) return 'footer';
                if (sel.includes('.dashboard') || sel.includes('.card-') || sel.includes('.col-') || sel.includes('.loan-summary-grid') || sel.match(/col-\d+/)) return 'dashboard';
                // Everything else is widgets (flow-stepper, detail-item, metric, policy, timeline, collateral, quick-notes)
                return 'widgets';
            }
            return null;
        };

        // We want to keep comments that are attached to rules if possible, but AST iteration is simpler.
        // Let's just iterate and move.
        root.nodes.forEach(node => {
            let sectionName = classifyRule(node);
            if (sectionName) {
                sections[sectionName].append(node.clone());
            } else if (node.type === 'comment') {
                // If it's a structural comment, we ignore it, we'll make our own.
            } else {
                // Default fallback
                sections['widgets'].append(node.clone());
            }
        });

        // Build the final css
        root.removeAll();

        const addSection = (title, rootNode) => {
            if (rootNode.nodes.length > 0) {
                root.append(postcss.comment({ text: ` ==========================================================================\n   ${title}\n   ========================================================================== ` }));
                root.append(rootNode.nodes);
                root.append({ text: '\n\n' }); // spacing
            }
        };

        addSection('1. IMPORTS & CORE VARIABLES', sections.imports);
        addSection('CORE STYLES', sections.core);
        addSection('2. LAYOUT & STRUCTURE', sections.layout);
        addSection('3. TOP HEADER & COMPONENTS', sections.header);
        addSection('4. SIDE MENU (SIDEBAR)', sections.sidebar);
        addSection('5. DASHBOARD GRID & CARDS', sections.dashboard);
        addSection('6. DASHBOARD WIDGETS (Customer, Metrics, Policies, etc.)', sections.widgets);
        addSection('7. APP FOOTER', sections.footer);
        addSection('8. RESPONSIVE MEDIA QUERIES', sections.responsive);
    };
});

postcss([plugin])
    .process(cssContent, { from: 'styles.css', to: 'styles.css' })
    .then(result => {
        fs.writeFileSync('styles.css', result.css);
        console.log('CSS refactored successfully.');
    })
    .catch(err => {
        console.error(err);
    });
