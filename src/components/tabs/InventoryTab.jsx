import { SKILLS } from '../../constants/portfolioData';

const CATEGORIES = [
  '01. Core Languages', 
  '02. Frameworks', 
  '03. UI Systems', 
  '04. Practices'
];

export default function InventoryTab() {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out] max-w-4xl mx-auto">
      <div className="border-b border-[var(--border-color)] pb-5 text-center sm:text-left relative">
        <span 
          className="text-xs font-mono uppercase tracking-widest font-bold px-3 py-1 rounded bg-[var(--bg-hover)] border border-[var(--border-color)] inline-block mb-3 shadow-sm" 
          style={{ color: 'var(--primary)' }}
        >
          ARCHIVE // 04 · TECHNICAL ARSENAL
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[var(--text-main)] tracking-tight font-semibold">
          Production Technologies & Architecture
        </h2>
        <p className="text-sm font-mono text-[var(--text-muted)] mt-2">
          Handcrafted competencies verified in high-throughput enterprise environments.
        </p>
      </div>
      
      {CATEGORIES.map((cat, index) => (
        <div key={cat} className="space-y-4">
          <div className="flex items-baseline justify-between border-b border-[var(--border-color)] pb-2">
            <div className="flex items-center gap-3">
              <span 
                className="w-2.5 h-2.5 rounded-full shadow-sm" 
                style={{ backgroundColor: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)' }}
              ></span>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text-main)]">{cat}</h3>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-2">
            {SKILLS.filter((s) => s.category === cat).map((skill) => (
              <span 
                key={skill.name} 
                className="group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[var(--bg-card)] border-2 border-[var(--border-color)] text-[var(--text-main)] font-mono text-xs shadow-sm hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-md transition-all cursor-default"
              >
                <svg 
                  className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:rotate-3" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ color: 'var(--primary)' }}
                >
                  {skill.svg}
                </svg>
                <span className="font-bold group-hover:text-[var(--text-main)] transition-colors">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
