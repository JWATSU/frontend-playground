import re

def process_file():
    with open('styles.css', 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    def get_lines(start, end):
        # 1-indexed to 0-indexed
        return lines[start-1:end]

    core = get_lines(1, 62)
    layout = get_lines(63, 75)
    
    sidebar1 = get_lines(76, 291)
    sidebar2 = get_lines(1050, 1210)
    sidebar3 = get_lines(1336, 1526)
    
    header = get_lines(292, 462)
    
    dashboard = get_lines(463, 554)
    
    widgets1 = get_lines(636, 1049)
    widgets2 = get_lines(1211, 1266)
    
    footer = get_lines(1267, 1335)
    
    responsive = get_lines(555, 635)
    
    # Process text for !important
    def clean_important(text_list):
        text = "".join(text_list)
        # We need to protect the span 1 !important
        text = text.replace('span 1 !important', 'span 1 KEEP_IMPORTANT')
        # Remove !important
        text = re.sub(r'\s*!important', '', text)
        # Restore
        text = text.replace('span 1 KEEP_IMPORTANT', 'span 1 !important')
        return text

    new_css = ""
    new_css += "/* ==========================================================================\n"
    new_css += "   1. CORE & VARIABLES\n"
    new_css += "   ========================================================================== */\n"
    new_css += clean_important(core) + "\n"
    
    new_css += "/* ==========================================================================\n"
    new_css += "   2. LAYOUT & STRUCTURE\n"
    new_css += "   ========================================================================== */\n"
    new_css += clean_important(layout) + "\n"

    new_css += "/* ==========================================================================\n"
    new_css += "   3. SIDE MENU (SIDEBAR)\n"
    new_css += "   ========================================================================== */\n"
    new_css += clean_important(sidebar1) + "\n"
    new_css += clean_important(sidebar2) + "\n"
    new_css += clean_important(sidebar3) + "\n"

    new_css += "/* ==========================================================================\n"
    new_css += "   4. TOP HEADER\n"
    new_css += "   ========================================================================== */\n"
    new_css += clean_important(header) + "\n"
    
    new_css += "/* ==========================================================================\n"
    new_css += "   5. DASHBOARD GRID\n"
    new_css += "   ========================================================================== */\n"
    new_css += clean_important(dashboard) + "\n"
    
    new_css += "/* ==========================================================================\n"
    new_css += "   6. COMPONENTS & WIDGETS\n"
    new_css += "   ========================================================================== */\n"
    new_css += clean_important(widgets1) + "\n"
    new_css += clean_important(widgets2) + "\n"
    
    new_css += "/* ==========================================================================\n"
    new_css += "   7. APP FOOTER\n"
    new_css += "   ========================================================================== */\n"
    new_css += clean_important(footer) + "\n"
    
    new_css += "/* ==========================================================================\n"
    new_css += "   8. RESPONSIVE MEDIA QUERIES\n"
    new_css += "   ========================================================================== */\n"
    new_css += clean_important(responsive) + "\n"

    with open('styles.css', 'w', encoding='utf-8') as f:
        f.write(new_css)
        
    print("styles.css has been refactored.")

if __name__ == "__main__":
    process_file()
