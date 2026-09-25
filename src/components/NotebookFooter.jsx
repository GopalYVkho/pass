export default function NotebookFooter({ activeTab, onTabSwitch }) {
  return (
    <footer className="pt-6 mt-8 border-t-2 border-dashed border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 select-none z-10">
      <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
        <span className="font-bold text-[var(--text-main)] font-serif text-sm">GOPALAKRISHNAN</span>
        <span className="text-[var(--border-strong)]">/</span>
        <span className="px-3 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] text-[10px] font-bold text-[var(--text-main)] shadow-sm">
          PAGE 0{activeTab} OF 05
        </span>
        <span className="hidden md:inline text-[var(--border-strong)]">·</span>
        <span className="hidden md:inline font-mono font-bold tracking-wide" style={{ color: 'var(--secondary)' }}>
          FRONTIER ATELIER FOLIO
        </span>
      </div>
      <div className="flex items-center gap-3 font-mono text-xs">
        <button 
          onClick={() => onTabSwitch(Math.max(1, activeTab - 1))} 
          disabled={activeTab === 1} 
          type="button"
          className="px-5 py-2 rounded-lg border-2 border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--bg-hover)] font-bold disabled:opacity-30 transition-all cursor-pointer hover:-translate-y-0.5"
        >
          ← PREV
        </button>
        <button 
          onClick={() => onTabSwitch(Math.min(5, activeTab + 1))} 
          disabled={activeTab === 5} 
          type="button"
          className="px-6 py-2 rounded-lg border-2 font-bold shadow-md transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-30" 
          style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', color: 'var(--text-inverse)' }}
        >
          NEXT →
        </button>
      </div>
    </footer>
  );
}
