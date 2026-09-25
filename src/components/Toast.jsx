export default function Toast({ message }) {
  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none bg-[var(--bg-card)] border-2 px-5 py-3.5 rounded-xl shadow-xl flex items-center gap-3 font-mono text-xs text-[var(--text-main)] font-bold ${
        message ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`} 
      style={{ borderColor: 'var(--primary)' }}
    >
      <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: 'var(--primary)' }}></span>
      <span>{message}</span>
    </div>
  );
}
