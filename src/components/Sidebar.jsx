import Icons from './Icons';
import { 
  DEFAULT_PRIMARY_LIGHT, 
  DEFAULT_SECONDARY_LIGHT, 
  DEFAULT_PRIMARY_DARK, 
  DEFAULT_SECONDARY_DARK 
} from '../constants/theme';

export default function Sidebar({
  isDark,
  setIsDark,
  primary,
  setPrimary,
  setSecondary,
  isPaletteOpen,
  setIsPaletteOpen,
  soundEnabled,
  setSoundEnabled,
  playPaperRustle,
  showToast
}) {
  const handleToggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark && primary === DEFAULT_PRIMARY_LIGHT) {
      setPrimary(DEFAULT_PRIMARY_DARK);
      setSecondary(DEFAULT_SECONDARY_DARK);
    } else if (!nextDark && primary === DEFAULT_PRIMARY_DARK) {
      setPrimary(DEFAULT_PRIMARY_LIGHT);
      setSecondary(DEFAULT_SECONDARY_LIGHT);
    }
    playPaperRustle();
  };

  const handleTogglePalette = () => {
    setIsPaletteOpen(!isPaletteOpen);
    playPaperRustle();
  };

  const handleToggleSound = () => {
    const nextSound = !soundEnabled;
    setSoundEnabled(nextSound);
    playPaperRustle();
    showToast(nextSound ? 'Tactile Audio On' : 'Audio Muted');
  };

  return (
    <aside className="hide-scrollbar fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 p-2 bg-[var(--bg-sheet)] border border-[var(--border-color)] rounded-2xl shadow-lg backdrop-blur-md overflow-hidden">
      {/* Theme Toggle */}
      <button 
        onClick={handleToggleTheme} 
        className="p-3 rounded-xl transition-all duration-300 border border-transparent hover:border-[var(--primary)] hover:bg-[var(--bg-hover)] text-[var(--text-main)] hover:text-[var(--primary)] shadow-sm"
        title="Toggle Theme"
        type="button"
      >
        {isDark ? <Icons.Sun /> : <Icons.Moon />}
      </button>

      <div className="h-[1px] w-full bg-[var(--border-color)]"></div>
      
      {/* Color Palette Toggle */}
      <button 
        onClick={handleTogglePalette} 
        className={`p-3 rounded-xl transition-all duration-300 border shadow-sm ${
          isPaletteOpen 
            ? 'bg-[var(--primary)] text-[var(--text-inverse)] border-[var(--primary)]' 
            : 'border-transparent hover:border-[var(--primary)] hover:bg-[var(--bg-hover)] text-[var(--text-main)] hover:text-[var(--primary)]'
        }`}
        title="Color Palette"
        type="button"
      >
        <Icons.Palette />
      </button>

      <div className="h-[1px] w-full bg-[var(--border-color)]"></div>

      {/* Music/Audio Toggle */}
      <button 
        onClick={handleToggleSound} 
        className={`p-3 rounded-xl transition-all duration-300 border shadow-sm ${
          soundEnabled 
            ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--bg-hover)]' 
            : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-hover)]'
        }`}
        title="Toggle Audio Feedback"
        type="button"
      >
        {soundEnabled ? <Icons.MusicOn /> : <Icons.MusicOff />}
      </button>
    </aside>
  );
}
