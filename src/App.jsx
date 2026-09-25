import { useState, useEffect, useCallback } from 'react';
import GlobalStyles from './components/GlobalStyles';
import Sidebar from './components/Sidebar';
import ColorPalette from './components/ColorPalette';
import BookmarkTabs from './components/BookmarkTabs';
import SubHeader from './components/SubHeader';
import NotebookFooter from './components/NotebookFooter';
import InspectModal from './components/InspectModal';
import Toast from './components/Toast';

import OverviewTab from './components/tabs/OverviewTab';
import QuestLogTab from './components/tabs/QuestLogTab';
import ArtifactsTab from './components/tabs/ArtifactsTab';
import InventoryTab from './components/tabs/InventoryTab';
import TransmissionTab from './components/tabs/TransmissionTab';

import { usePaperSound } from './hooks/usePaperSound';
import {
  DEFAULT_PRIMARY_LIGHT,
  DEFAULT_SECONDARY_LIGHT,
  DEFAULT_PRIMARY_DARK,
  DEFAULT_SECONDARY_DARK
} from './constants/theme';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [primary, setPrimary] = useState(DEFAULT_PRIMARY_LIGHT);
  const [secondary, setSecondary] = useState(DEFAULT_SECONDARY_LIGHT);

  const [activeTab, setActiveTab] = useState(1);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [inspectModal, setInspectModal] = useState(null);

  const { playPaperRustle } = usePaperSound(soundEnabled, isDark);

  const handleTabSwitch = useCallback((id) => {
    setActiveTab((prev) => {
      if (prev === id) return prev;
      playPaperRustle();
      return id;
    });
  }, [playPaperRustle]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore key events inside input fields
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.key >= '1' && e.key <= '5') {
        handleTabSwitch(parseInt(e.key, 10));
      } else if (e.key === 'ArrowRight') {
        setActiveTab((prev) => {
          const next = Math.min(5, prev + 1);
          if (next !== prev) playPaperRustle();
          return next;
        });
      } else if (e.key === 'ArrowLeft') {
        setActiveTab((prev) => {
          const prevTab = Math.max(1, prev - 1);
          if (prevTab !== prev) playPaperRustle();
          return prevTab;
        });
      } else if (e.key === 'Escape') {
        setInspectModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleTabSwitch, playPaperRustle]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('gopal@swe.dev');
    showToast('Email [gopal@swe.dev] Copied!');
    playPaperRustle();
  };

  const resetColors = () => {
    setPrimary(isDark ? DEFAULT_PRIMARY_DARK : DEFAULT_PRIMARY_LIGHT);
    setSecondary(isDark ? DEFAULT_SECONDARY_DARK : DEFAULT_SECONDARY_LIGHT);
    playPaperRustle();
  };

  const handleInspectArtifact = (artifact) => {
    setInspectModal(artifact);
    playPaperRustle();
  };

  const handleCloseModal = () => {
    setInspectModal(null);
    playPaperRustle();
  };

  return (
    <div className="py-4 md:py-8 pl-[4.5rem] sm:pl-20 pr-3 sm:pr-6 md:px-12 lg:px-24 xl:px-32 relative min-h-screen">
      <GlobalStyles primary={primary} secondary={secondary} isDark={isDark} />

      {/* 1. LEFT SIDEBAR (FIXED FLOATING ACTION MENU) */}
      <Sidebar
        isDark={isDark}
        setIsDark={setIsDark}
        primary={primary}
        setPrimary={setPrimary}
        setSecondary={setSecondary}
        isPaletteOpen={isPaletteOpen}
        setIsPaletteOpen={setIsPaletteOpen}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playPaperRustle={playPaperRustle}
        showToast={showToast}
      />

      {/* 2. EXPANDABLE COLOR PALETTE PANEL */}
      <ColorPalette
        isPaletteOpen={isPaletteOpen}
        primary={primary}
        setPrimary={setPrimary}
        secondary={secondary}
        setSecondary={setSecondary}
        resetColors={resetColors}
      />

      {/* 3. MASTER FOLIO CONTAINER */}
      <div className="w-full max-w-[1200px] mx-auto relative">
        {/* BOOKMARK INDEX TABS */}
        <BookmarkTabs activeTab={activeTab} onTabSwitch={handleTabSwitch} />

        {/* NOTEBOOK CANVAS */}
        <div className="parchment-sheet relative rounded-b-2xl md:rounded-3xl border-2 border-[var(--border-color)] overflow-hidden folio-corner-tr min-h-[680px] flex flex-col justify-between">
          {/* Left Binder Perforations */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-10 flex flex-col justify-between items-center py-10 select-none pointer-events-none z-30 border-r border-[var(--border-color)] bg-[var(--bg-hover)]">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-[var(--bg-body)] border border-[var(--border-color)] shadow-inner"
              />
            ))}
          </div>

          {/* Interior Content Area */}
          <div className="pl-12 sm:pl-16 md:pl-24 pr-6 sm:pr-10 md:pr-16 py-8 md:py-10 flex-1 flex flex-col justify-between z-10">
            {/* Sub-Header Bar */}
            <SubHeader activeTab={activeTab} onCopyEmail={copyEmail} />

            {/* Active Tab Content */}
            <main className="flex-1">
              {activeTab === 1 && <OverviewTab onTabSwitch={handleTabSwitch} />}
              {activeTab === 2 && <QuestLogTab />}
              {activeTab === 3 && <ArtifactsTab onInspect={handleInspectArtifact} />}
              {activeTab === 4 && <InventoryTab />}
              {activeTab === 5 && <TransmissionTab />}
            </main>

            {/* Notebook Footer Navigation */}
            <NotebookFooter activeTab={activeTab} onTabSwitch={handleTabSwitch} />
          </div>
        </div>
      </div>

      {/* INSPECT MODAL */}
      <InspectModal artifact={inspectModal} onClose={handleCloseModal} />

      {/* TOAST NOTIFICATION */}
      <Toast message={toastMsg} />
    </div>
  );
}