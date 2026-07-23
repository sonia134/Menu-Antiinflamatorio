import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface MobileStickyBarProps {
  onCtaClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onCtaClick }) => {
  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-[#1a3a1a] border-t-2 border-[#7ab648] px-5 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] flex items-center justify-between gap-3"
    >
      {/* Left price block */}
      <div className="flex flex-col leading-none">
        <span className="text-[10px] text-white/50 line-through decoration-[#ff6b6b] mb-0.5">
          Antes $20,00 USD
        </span>
        <span className="font-heading font-extrabold text-[#7ab648] text-lg">
          $7,99 USD
        </span>
      </div>

      {/* Right button */}
      <button
        onClick={onCtaClick}
        className="bg-[#7ab648] hover:bg-[#6aa33d] active:scale-95 text-[#1a3a1a] font-heading font-extrabold text-xs sm:text-sm h-10 px-5 rounded-md shadow-md flex items-center gap-1.5 cursor-pointer transition-all shrink-0"
      >
        <ShoppingBag className="w-4 h-4 text-[#1a3a1a]" />
        <span>OBTENER ACCESO</span>
      </button>
    </div>
  );
};
