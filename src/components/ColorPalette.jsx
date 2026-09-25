export default function ColorPalette({
  isPaletteOpen,
  primary,
  setPrimary,
  secondary,
  setSecondary,
  resetColors
}) {
  return (
    <div 
      className={`fixed left-20 sm:left-24 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ease-out ${
        isPaletteOpen 
          ? 'translate-x-0 opacity-100 pointer-events-auto' 
          : '-translate-x-12 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-[var(--bg-sheet)] border-2 border-[var(--primary)] rounded-2xl shadow-xl p-5 flex flex-col gap-5 min-w-[180px]">
        <span className="text-xs font-mono text-[var(--text-main)] font-bold text-center tracking-widest border-b border-[var(--border-color)] pb-3">
          THEME ENGINE
        </span>
        
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-3 text-sm font-mono text-[var(--text-main)]">
            <span>Primary</span>
            <div className="relative w-8 h-8 rounded overflow-hidden shadow-sm border border-[var(--border-color)] cursor-pointer hover:border-[var(--primary)] transition-colors">
              <input 
                type="color" 
                value={primary} 
                onChange={(e) => setPrimary(e.target.value)} 
                className="absolute -top-2 -left-2 w-12 h-12 p-0 border-0 cursor-pointer bg-transparent" 
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-3 text-sm font-mono text-[var(--text-main)]">
            <span>Accent</span>
            <div className="relative w-8 h-8 rounded overflow-hidden shadow-sm border border-[var(--border-color)] cursor-pointer hover:border-[var(--secondary)] transition-colors">
              <input 
                type="color" 
                value={secondary} 
                onChange={(e) => setSecondary(e.target.value)} 
                className="absolute -top-2 -left-2 w-12 h-12 p-0 border-0 cursor-pointer bg-transparent" 
              />
            </div>
          </div>
        </div>
        
        <button 
          onClick={resetColors} 
          type="button"
          className="mt-2 px-3 py-2.5 text-[10px] font-mono font-bold bg-[var(--bg-hover)] text-[var(--text-main)] rounded-lg border border-[var(--border-color)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all cursor-pointer w-full tracking-wider shadow-sm uppercase"
        >
          Reset Default
        </button>
      </div>
    </div>
  );
}
