const TABS = [
  { id: 1, title: '01 // OVERVIEW' },
  { id: 2, title: '02 // QUEST LOG' },
  { id: 3, title: '03 // ARTIFACTS' },
  { id: 4, title: '04 // INVENTORY' },
  { id: 5, title: '05 // TRANSMISSION' }
];

export default function BookmarkTabs({ activeTab, onTabSwitch }) {
  return (
    <nav className="flex items-end gap-1.5 sm:gap-2 px-3 sm:px-6 overflow-x-auto no-scrollbar select-none pl-4" aria-label="Folio tabs">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button 
            key={tab.id} 
            onClick={() => onTabSwitch(tab.id)} 
            type="button"
            className={`folio-tab flex items-center gap-2 px-4 sm:px-6 py-3 rounded-t-xl border-t-2 border-x-2 border-[var(--border-color)] text-xs font-mono tracking-wider uppercase shrink-0 transition-all duration-200 cursor-pointer ${
              isActive 
                ? 'tab-active border-b-0 pb-[13px] -mb-[1px] z-20 shadow-sm bg-[var(--bg-sheet)]' 
                : 'bg-[var(--bg-tab)] text-[var(--text-muted)] hover:text-[var(--text-main)] border-b-2 hover:bg-[var(--bg-hover)]'
            }`}
          >
            <span 
              className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold shadow-sm transition-colors ${
                isActive 
                  ? 'bg-[var(--primary)] text-[var(--text-inverse)]' 
                  : 'bg-[var(--border-strong)] text-[var(--bg-sheet)]'
              }`}
            >
              {tab.id}
            </span>
            <span className={isActive ? 'font-bold' : 'font-semibold'}>{tab.title}</span>
          </button>
        );
      })}
    </nav>
  );
}
