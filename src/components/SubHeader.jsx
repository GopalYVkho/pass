export default function SubHeader({ activeTab, onCopyEmail }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-dashed border-[var(--border-color)]">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--primary)] font-bold">
          ARCHIVE ENTRY 0{activeTab}
        </span>
      </div>
      <div className="flex items-center gap-3 text-xs font-mono">
        <span className="hidden sm:inline text-[var(--text-muted)]">HOTKEYS:</span>
        <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-[var(--border-color)] bg-[var(--bg-card)] text-[10px] text-[var(--text-main)] font-bold">
          [1-5]
        </span>
        <button 
          onClick={onCopyEmail} 
          type="button"
          className="border-b-2 text-[var(--primary)] font-bold hover:text-[var(--secondary)] transition-colors pb-0.5 flex items-center gap-1 cursor-pointer" 
          style={{ borderColor: 'var(--primary)' }}
        >
          gopal@swe.dev <span className="text-[10px]">📋</span>
        </button>
      </div>
    </div>
  );
}
