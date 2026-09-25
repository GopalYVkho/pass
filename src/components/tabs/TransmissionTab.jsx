import Icons from '../Icons';

const SOCIAL_LINKS = [
  { name: 'GitHub', sub: 'Code Repositories', url: 'https://github.com', icon: Icons.Github },
  { name: 'LinkedIn', sub: 'Professional Network', url: 'https://linkedin.com', icon: Icons.LinkedIn },
  { name: 'X / Twitter', sub: 'Dispatches & Thoughts', url: 'https://twitter.com', icon: Icons.Twitter }
];

export default function TransmissionTab() {
  return (
    <div className="space-y-10 py-10 max-w-2xl mx-auto flex flex-col justify-center min-h-[450px] animate-[fadeIn_0.3s_ease-out]">
      <div className="text-center space-y-3">
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold shadow-sm" 
          style={{ 
            backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)', 
            borderColor: 'color-mix(in srgb, var(--primary) 30%, transparent)', 
            color: 'var(--primary)' 
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--primary)' }}></span>
          <span>TRANSMISSION // DIRECT STUDIO DISPATCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-[var(--text-main)] tracking-tight font-semibold">
          Connect & Follow
        </h2>
        <p className="text-sm font-mono text-[var(--text-muted)] pt-2">
          Let's build thoughtful, enduring digital architecture together.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 font-mono">
        {SOCIAL_LINKS.map((link) => {
          const IconComponent = link.icon;
          return (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-6 rounded-2xl border-2 border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--primary)] hover:shadow-lg transition-all flex flex-col items-center text-center gap-4 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--bg-hover)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--text-inverse)] transition-all shadow-sm">
                <IconComponent />
              </div>
              <div>
                <div className="font-bold text-base text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors font-serif">
                  {link.name}
                </div>
                <div className="text-[11px] text-[var(--text-muted)] mt-1">{link.sub}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
