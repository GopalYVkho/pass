export default function QuestLogTab() {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="border-b border-[var(--border-color)] pb-4 flex justify-between items-end">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--primary)' }}>
            QUEST LOG // STUDIO CAREER RECORD
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[var(--text-main)] mt-1 font-semibold">
            Engineering Milestones
          </h2>
        </div>
        <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:block font-bold">2022 — Present</span>
      </div>
      
      <div className="space-y-6">
        <div className="p-6 rounded-2xl border-2 border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm hover:border-[var(--primary)] transition-all">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
            <div className="md:w-1/4 font-mono">
              <span 
                className="px-3 py-1 text-[10px] font-bold uppercase border rounded-full shadow-sm" 
                style={{ 
                  color: 'var(--primary)', 
                  borderColor: 'var(--primary)', 
                  backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)' 
                }}
              >
                RECENT ENGAGEMENT
              </span>
              <div className="text-xl font-bold text-[var(--text-main)] mt-3 font-serif">2023 — 2025</div>
              <div className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mt-1">Cloudrevel Innovation</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-1">Software Engineer</div>
            </div>
            <div className="md:w-3/4 space-y-4">
              <h3 className="text-xl font-serif font-bold text-[var(--text-main)]">Enterprise Banking, Games & Scalable Platforms</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Delivered enterprise banking applications, interactive real-time betting games, high-conversion landing pages, and modular HRMS platforms. Architected scalable state architectures and reusable component libraries. Collaborated with agile teams to deliver complex projects on tight deadlines with zero downtime.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono font-bold">
                {['React','Next.js','TypeScript','Vanilla JS','Tailwind CSS', 'scss',].map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-[var(--bg-sheet)] rounded-lg border border-[var(--border-color)] shadow-sm text-[var(--text-main)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 rounded-2xl border-2 border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm hover:border-[var(--secondary)] transition-all">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
            <div className="md:w-1/4 font-mono">
              <span 
                className="px-3 py-1 text-[10px] font-bold uppercase border rounded-full bg-[var(--bg-hover)] text-[var(--text-muted)] shadow-sm" 
                style={{ borderColor: 'var(--border-color)' }}
              >
                PREVIOUS ENGAGEMENT
              </span>
              <div className="text-xl font-bold text-[var(--text-main)] mt-3 font-serif">2022 — 2023</div>
              <div className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mt-1">Young Globes</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-1">Junior Drupal Developer</div>
            </div>
            <div className="md:w-3/4 space-y-4">
              <h3 className="text-xl font-serif font-bold text-[var(--text-main)]">Custom Web Templates & Drupal CMS Integration</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Delivered 10+ custom web templates and landing pages in under 1 year using core Vanilla JS, modern CSS, and semantic HTML. Integrated custom themes seamlessly into Drupal CMS ecosystems ensuring continuous lifecycle support and feature upgrades.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono font-bold">
                {['Drupal CMS','Vanilla JS', 'Modern CSS', 'Semantic HTML' ].map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-[var(--bg-sheet)] rounded-lg border border-[var(--border-color)] shadow-sm text-[var(--text-main)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
