export default function InspectModal({ artifact, onClose }) {
  if (!artifact) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div 
        className="bg-[var(--bg-sheet)] border-2 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6" 
        style={{ borderColor: 'var(--primary)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full shadow-sm animate-pulse" style={{ backgroundColor: 'var(--primary)' }}></span>
            <span className="font-bold uppercase tracking-wider text-[var(--text-main)]">{artifact.category}</span>
          </div>
          <button 
            onClick={onClose} 
            type="button"
            className="text-[var(--text-muted)] hover:text-[var(--text-main)] font-bold px-3 py-1.5 bg-[var(--bg-hover)] rounded-lg text-[10px] border border-[var(--border-color)] cursor-pointer transition-colors shadow-sm"
          >
            [ESC / CLOSE ✕]
          </button>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--text-main)]">{artifact.title}</h3>
          <p className="font-mono text-xs font-bold" style={{ color: 'var(--secondary)' }}>{artifact.title} Architecture Specs</p>
        </div>
        
        <div className="p-5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] font-mono text-xs text-[var(--text-muted)] space-y-3 shadow-inner">
          <div className="text-[10px] uppercase font-bold tracking-wider" style={{ color: 'var(--primary)' }}>PRIMARY ARCHITECTURAL SPECS</div>
          <p className="text-sm leading-relaxed text-[var(--text-main)] font-sans">{artifact.desc}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-3 bg-[var(--bg-hover)] rounded-lg border border-[var(--border-color)]">
            <div className="text-[10px] text-[var(--text-muted)] font-bold">LATENCY / STAT</div>
            <div className="font-bold text-[var(--text-main)] mt-1">{artifact.stat}</div>
          </div>
          <div className="p-3 bg-[var(--bg-hover)] rounded-lg border border-[var(--border-color)]">
            <div className="text-[10px] text-[var(--text-muted)] font-bold">TYPE INTEGRITY</div>
            <div className="font-bold mt-1" style={{ color: 'var(--secondary)' }}>Verified</div>
          </div>
          <div className="p-3 bg-[var(--bg-hover)] rounded-lg border border-[var(--border-color)]">
            <div className="text-[10px] text-[var(--text-muted)] font-bold">DEPLOYMENT</div>
            <div className="font-bold mt-1" style={{ color: 'var(--primary)' }}>Production</div>
          </div>
        </div>
        
        <div className="space-y-2 pt-2">
          <div className="text-[10px] font-mono uppercase text-[var(--text-muted)] font-bold">EQUIPPED RUNTIME STACK:</div>
          <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
            {artifact.tags.map((t) => (
              <span key={t} className="px-3 py-1.5 bg-[var(--bg-hover)] rounded-lg border border-[var(--border-color)] text-[var(--text-main)] shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
