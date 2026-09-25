export default function GlobalStyles({ primary, secondary, isDark }) {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Newsreader:ital,wght@0,400;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap');

      :root {
        --primary: ${primary};
        --secondary: ${secondary};
        
        /* Light Mode */
        --bg-body-light: color-mix(in srgb, var(--primary) 3%, #F2F2F2);
        --bg-dots-light: color-mix(in srgb, var(--primary) 15%, #819B9D);
        --bg-sheet-light: #FFFFFF;
        --bg-pattern-light: rgba(225, 208, 197, 0.45);
        --bg-tab-light: #E5ECEC;
        --bg-card-light: #F8FAF9;
        --bg-hover-light: #F2F2F2;
        --text-main-light: #1E2C35;
        --text-muted-light: #506063;
        --text-inverse-light: #FFFFFF;
        --border-color-light: #DCE3E4;
        --border-strong-light: #819B9D;
        --shadow-folio-light: 0 28px 60px -15px rgba(30, 44, 53, 0.12), 0 8px 24px -6px rgba(30, 44, 53, 0.06);

        /* Dark Mode */
        --bg-body-dark: color-mix(in srgb, var(--primary) 5%, #0b0e13);
        --bg-dots-dark: color-mix(in srgb, var(--primary) 25%, #32353a);
        --bg-sheet-dark: #15191e;
        --bg-pattern-dark: rgba(80, 69, 53, 0.22);
        --bg-tab-dark: #191c21;
        --bg-card-dark: #1d2025;
        --bg-hover-dark: #272a2f;
        --text-main-dark: #e1e2e9;
        --text-muted-dark: #9d8f7c;
        --text-inverse-dark: #0b0e13;
        --border-color-dark: #36393f;
        --border-strong-dark: #504535;
        --shadow-folio-dark: 0 35px 80px -15px rgba(0, 0, 0, 0.75), 0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px color-mix(in srgb, var(--primary) 15%, transparent);

        /* Active Mapping */
        --bg-body: ${isDark ? 'var(--bg-body-dark)' : 'var(--bg-body-light)'};
        --bg-dots: ${isDark ? 'var(--bg-dots-dark)' : 'var(--bg-dots-light)'};
        --bg-sheet: ${isDark ? 'var(--bg-sheet-dark)' : 'var(--bg-sheet-light)'};
        --bg-sheet-pattern: ${isDark ? 'var(--bg-pattern-dark)' : 'var(--bg-pattern-light)'};
        --bg-tab: ${isDark ? 'var(--bg-tab-dark)' : 'var(--bg-tab-light)'};
        --bg-card: ${isDark ? 'var(--bg-card-dark)' : 'var(--bg-card-light)'};
        --bg-hover: ${isDark ? 'var(--bg-hover-dark)' : 'var(--bg-hover-light)'};
        
        --text-main: ${isDark ? 'var(--text-main-dark)' : 'var(--text-main-light)'};
        --text-muted: ${isDark ? 'var(--text-muted-dark)' : 'var(--text-muted-light)'};
        --text-inverse: ${isDark ? 'var(--text-inverse-dark)' : 'var(--text-inverse-light)'};
        --border-color: ${isDark ? 'var(--border-color-dark)' : 'var(--border-color-light)'};
        --border-strong: ${isDark ? 'var(--border-strong-dark)' : 'var(--border-strong-light)'};
        --shadow-folio: ${isDark ? 'var(--shadow-folio-dark)' : 'var(--shadow-folio-light)'};
      }

      /* Target the true body to ensure entire viewport changes */
      html, body {
        background-color: var(--bg-body) !important;
        background-image: 
          radial-gradient(var(--bg-dots) 1px, transparent 1px),
          radial-gradient(var(--bg-dots) 1px, transparent 1px) !important;
        background-size: 24px 24px !important;
        background-position: 0 0, 12px 12px !important;
        color: var(--text-main);
        font-family: 'Space Grotesk', sans-serif;
        transition: background-color 0.3s ease, color 0.3s ease;
        margin: 0;
        min-height: 100%;
        overflow-x: hidden;
      }

      .font-serif { font-family: 'Newsreader', serif; }
      .font-mono { font-family: 'JetBrains Mono', monospace; }
      
      .parchment-sheet {
        background-color: var(--bg-sheet);
        background-image: repeating-linear-gradient(to bottom, transparent, transparent 31px, var(--bg-sheet-pattern) 32px);
        background-size: 100% 32px;
        background-position: 0 14px;
        box-shadow: var(--shadow-folio);
      }

      .folio-corner-tr::after {
        content: '';
        position: absolute;
        top: 0; right: 0;
        border-style: solid;
        border-width: 0 42px 42px 0;
        border-color: transparent var(--bg-body) transparent transparent;
        filter: drop-shadow(-3px 4px 5px rgba(0,0,0,0.15));
        border-bottom-left-radius: 6px;
      }
      
      .tab-active {
        background-color: var(--bg-sheet) !important;
        color: var(--text-main) !important;
        border-bottom-color: var(--bg-sheet) !important;
        border-top-color: var(--primary) !important;
      }

      /* Hide scrollbar on the floating sidebar */
      .hide-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }

      /* Custom scrollbar for webkit */
      ::-webkit-scrollbar { width: 8px; height: 8px; }
      ::-webkit-scrollbar-track { background: var(--bg-body); }
      ::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: var(--primary); }
    `}</style>
  );
}
