export default function OverviewTab({ onTabSwitch }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-2 animate-[fadeIn_0.3s_ease-out]">
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold border border-[var(--border-color)] bg-[var(--bg-hover)] text-[var(--text-main)] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--secondary)' }}></span>
          <span style={{ color: 'var(--primary)' }}>FOLIO ARCHIVE</span> // EDITION 2026
        </div>
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-[var(--text-main)] tracking-tight leading-snug font-semibold">
            Hello and welcome.
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-sans font-normal">
            I'm a Software Engineer from Tamil Nadu, India. I like to build things, fix things, and learn new things.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button 
            onClick={() => onTabSwitch(3)} 
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-all font-bold cursor-pointer border shadow-sm hover:-translate-y-0.5" 
            style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', color: 'var(--text-inverse)' }}
          >
            <span>View Artifacts</span><span>→</span>
          </button>
          <button 
            onClick={() => onTabSwitch(5)} 
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider border-b-2 pb-1 transition-colors font-bold cursor-pointer hover:opacity-75" 
            style={{ color: 'var(--text-main)', borderColor: 'var(--primary)' }}
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <div className="lg:col-span-5">
        <div className="bg-[var(--bg-card)] p-4 sm:p-5 rounded-2xl border-2 border-[var(--border-color)] space-y-3.5 shadow-md">
          <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-hover)] p-3 flex flex-col items-center relative">
            <div className="relative w-full rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-sheet)] flex items-center justify-center group">
              <img 
                alt="Tex Willer Ranger Comic Illustration" 
                className="w-full h-auto max-h-[460px] object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP_guBftWy2Qfya0zun3KoOH3RoxdRjmO8eAGGoEfoEP31C-obpDDQW-xk5Xh2RKqdNgyV7s_rQ3EOfybskP04vK2iyY720aZe-3mkvK3fF6evIpz2Dp1_vCcBIml8FVprl3JQ_L1iAoLNLG-9vu3Y55VX6h9909BoeNXDeWWUeOEC-17zT3vEezm5d46xCUhfoRsP5QEDLDlbIjX4Olmz1dnePmi8YYoW2TGqFupTsqyhHAD3XuNwgvkEhyvOwpvY6g"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent p-4 text-white flex items-center justify-between pointer-events-none">
                <div>
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded font-bold" style={{ backgroundColor: 'var(--primary)', color: 'var(--text-inverse)' }}>
                    TEX WILLER
                  </span>
                  <p className="text-xs font-serif font-bold tracking-wide mt-1 leading-none text-[var(--text-main)]">
                    The Legendary Ranger
                  </p>
                </div>
                <span className="text-[9px] font-mono bg-[var(--bg-hover)] px-2 py-0.5 rounded border font-semibold" style={{ color: 'var(--secondary)', borderColor: 'var(--secondary)' }}>
                  OPERATIVE 01
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between w-full px-1 text-[10px] font-mono text-[var(--text-muted)]">
              <span className="font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>ARCHIVE RECORD</span>
              <span className="font-semibold text-[var(--text-main)]">Disciplined · Precision</span>
            </div>
          </div>
          
          <div className="space-y-2 mt-2">
            <details className="group border border-[var(--border-color)] rounded-lg overflow-hidden bg-[var(--bg-hover)] transition-all open:bg-[var(--bg-sheet)] open:border-[var(--primary)]" open>
              <summary className="flex items-center justify-between p-3 cursor-pointer select-none font-mono text-xs font-bold text-[var(--text-main)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--secondary)' }}></span>
                  <span className="uppercase tracking-wider text-[11px]">ENGINEERING_SPEC.DOSSIER</span>
                </div>
              </summary>
              <div className="px-3 pb-3 pt-1 border-t border-dashed border-[var(--border-color)] space-y-2">
                <div className="p-3 bg-[var(--bg-hover)] rounded-md font-mono text-[11px] text-[var(--text-main)] border border-[var(--border-color)] shadow-inner">
                  <div><span className="font-bold" style={{ color: 'var(--primary)' }}>type</span> <span className="font-bold text-[var(--text-main)]">Engineer</span> = {'{'}</div>
                  <div className="pl-3 py-0.5">name: <span className="font-semibold" style={{ color: 'var(--secondary)' }}>"Gopalakrishnan"</span>, exp: "4 Yrs Prod",</div>
                  <div className="pl-3 py-0.5">focus: "Frontend Systems & UI Architecture",</div>
                  <div>{'}'};</div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
