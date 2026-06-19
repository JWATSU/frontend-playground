# About the application

A loan application management web application used internally by case officers working at a nordic bank. Case officers manage loan "cases". 

The application's display language is Swedish.

Each case consists of several steps the officer needs to work through.

For now these cases:
- Kundinformation
- Låneansökan
- Engagemang
- Policykontroll 1
- Säkerheter
- Policykontroll 2
- Uppsummering och risk
- Beslut
- Dokument
- Avslut

Each step is a separate HTML page.

In addition to these steps each case also has a homepage that shows the overview of the page.

In all steps and in the overview a side menu is shown to the left, enabling the officer to navigate between the steps. At the top of the side menu is also a way to go to the homepage. The side menu is consistent across all pages.

The steps are shown in the side menu, and for each step it is visualized if the step is completed, in progress, or not started.

The design should be clean, modern, and easy to navigate. It should also be responsive to accommodate different screen sizes, but the officers only work at a PC and not on mobile devices. 

To maintain consistency and readability across different monitors (from standard 24" screens to 32–34" ultrawides):
* **Max Width**: The entire application (sidebar + main content combined) is constrained to a maximum width of `1440px` and centered horizontally on the viewport. This creates a framed look with empty slate margin space on both sides on large screens.
* **Sidebar Layout**: The sidebar menu is fixed at `320px` width but can be manually minimized to `100px` by clicking the toggle button in the header. When minimized, it only shows the icon for each step and its status indicator (rendered as a bottom-right overlay badge). All other text labels, descriptions, and user profile information are hidden.
* **Responsive Stacking**: On window widths below `1300px`, the dashboard cards on the main viewport automatically transition to a single-column stacked layout to prevent layout squishing and text overflow.
* **No Page Scroll on Desktop**: On screen widths of `1300px` and above, the main viewport is locked to `100vh` and cannot be scrolled vertically as a whole. Instead, individual dashboard cards utilize responsive flex layouts and internal scrolling (`overflow-y: auto`) with premium custom scrollbars for any list content exceeding their bounds. This keeps all elements and overview sections permanently visible.
* **Future Pages**: Any new pages, dialogs, or layout changes must respect this `1440px` application-wide max-width layout standard.


# About this project

The idea is not to implement the application fully, only the visual parts so that I can create a PoC that shows the design and layout of the application.

## Key principles
* Ask questions if needed before implementing something
* Only test the functionality you implemented if specifically asked