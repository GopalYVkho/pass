import { ARTIFACTS } from '../../constants/portfolioData';

export default function ArtifactsTab({ onInspect }) {
  return (
    <div className="space-y-6 animate-[fadeIn_0.3s_ease-out]">
      <div className="border-b border-[var(--border-color)] pb-4">
        <span className="text-xs font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--primary)' }}>
          ARTIFACT VAULT // 05 RELEASES
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[var(--text-main)] mt-1 font-semibold">
          Featured Technical Systems
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTIFACTS.map((art) => (
          <div 
            key={art.id} 
            onClick={() => onInspect(art)} 
            className="p-6 rounded-2xl border-2 border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--primary)] transition-all flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>
                  {art.category.split(' //')[0]}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-hover)] text-[var(--text-muted)] font-bold border border-[var(--border-color)]">
                  {art.slot}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[var(--text-main)] group-hover:text-[var(--secondary)] transition-colors">
                {art.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{art.desc}</p>
            </div>
            <div className="pt-5 mt-5 border-t border-[var(--border-color)] space-y-4">
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[var(--text-main)] font-bold">
                {art.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-[var(--bg-sheet)] rounded border border-[var(--border-color)] shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-main)] font-bold group-hover:underline flex items-center gap-1">
                  Inspect <span>↗</span>
                </span>
                <span className="text-[11px] font-bold" style={{ color: 'var(--secondary)' }}>{art.stat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
