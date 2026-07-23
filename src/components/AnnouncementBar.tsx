import React from 'react';
import { Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onCtaClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onCtaClick }) => {
  return (
    <aside 
      aria-label="Anuncio de lanzamiento"
      className="fixed top-0 left-0 right-0 z-50 bg-[#7ab648] text-[#1a3a1a] font-body text-xs sm:text-sm font-bold py-2.5 px-4 shadow-md transition-all border-b border-[#69a03b]"
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-2 text-center">
        <div className="w-full flex items-center justify-center gap-2 cursor-pointer hover:underline" onClick={onCtaClick}>
          <Sparkles className="w-4 h-4 shrink-0 text-[#1a3a1a] animate-spin" style={{ animationDuration: '4s' }} />
          <span>🌿 Precio de Lanzamiento: <strong className="font-heading font-extrabold text-[#1a3a1a] text-sm sm:text-base">$7,99 USD</strong> — Acceso Inmediato + Todos los Bonos Incluidos</span>
        </div>
        <button 
          onClick={onCtaClick}
          className="hidden md:inline-flex items-center gap-1 bg-[#1a3a1a] text-[#7ab648] px-3 py-1 rounded text-xs font-heading font-bold hover:bg-[#2c532c] transition-colors shrink-0"
        >
          COMPRAR AHORA
        </button>
      </div>
    </aside>
  );
};
