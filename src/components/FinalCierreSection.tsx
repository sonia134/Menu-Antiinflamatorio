import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface FinalCierreSectionProps {
  onCtaClick: () => void;
}

export const FinalCierreSection: React.FC<FinalCierreSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#1a3a1a] text-white py-16 md:py-24 px-5 md:px-12 text-center">
      <div className="max-w-[780px] mx-auto flex flex-col items-center">
        
        {/* Main CTA Button */}
        <button
          onClick={onCtaClick}
          className="w-full sm:w-auto min-h-[64px] py-4 px-8 md:px-12 btn-cta-standard text-lg sm:text-xl font-heading font-extrabold text-[#1a3a1a] btn-cta-pulse cursor-pointer transition-all mb-4"
        >
          OBTENER ACCESO INMEDIATO — $7,99
        </button>

        {/* Microcopy */}
        <p className="text-white/70 text-xs sm:text-sm font-body font-medium flex items-center justify-center gap-2 flex-wrap mb-10">
          <span>Precio de lanzamiento</span>
          <span>·</span>
          <span>Acceso inmediato</span>
          <span>·</span>
          <span>Para siempre</span>
        </p>

        {/* Emotional Closing Block */}
        <div className="w-full max-w-[560px]">
          {/* Lime separator */}
          <div className="w-[60px] h-1 bg-[#7ab648] rounded-full mx-auto my-8" />

          {/* Emotional paragraph */}
          <p className="font-body italic text-white/90 text-base sm:text-[17px] leading-relaxed mb-6">
            Mereces comer delicioso, sentirte ligera, recuperar tu vitalidad y disfrutar de la comida sin culpa ni estrés en la cocina. Da hoy el primer paso hacia tu bienestar.
          </p>

          {/* Last sentence */}
          <p className="font-heading font-bold text-[#7ab648] text-xl sm:text-2xl text-center flex items-center justify-center gap-2">
            <span>Tu cocina antiinflamatoria empieza hoy. 🌿</span>
          </p>
        </div>

      </div>
    </section>
  );
};
