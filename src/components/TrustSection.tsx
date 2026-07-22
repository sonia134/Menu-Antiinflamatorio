import React from 'react';
import { Lock, Sparkles, Check } from 'lucide-react';

interface TrustSectionProps {
  onCtaClick: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-white py-12 md:py-16 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[700px] mx-auto bg-white border-2 border-[#7ab648] rounded-[16px] p-8 md:p-10 text-center shadow-lg relative overflow-hidden">
        
        {/* Lock Icon */}
        <div className="w-16 h-16 rounded-full bg-[#f0fff4] border border-[#7ab648] text-[#7ab648] flex items-center justify-center mx-auto mb-5 shadow-sm">
          <Lock className="w-8 h-8 text-[#7ab648]" />
        </div>

        {/* Heading */}
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1a3a1a] mb-4">
          Tu inversión está completamente justificada
        </h3>

        {/* Explanatory text */}
        <p className="font-body text-gray-700 text-base sm:text-[17px] leading-relaxed max-w-lg mx-auto mb-6">
          Por una fracción simbólica de lo que gastarías en una sola consulta nutricional o en un pedido de comida rápida, obtendrás el sistema completo con guías, recetario digital y bonos exclusivos que transformarás tu cocina hoy mismo.
        </p>

        {/* Large Price Badge */}
        <div className="bg-[#f0fff4] border border-[#7ab648]/40 rounded-xl p-5 mb-6 inline-block w-full max-w-sm">
          <span className="text-xs font-heading font-bold text-gray-500 uppercase tracking-widest block mb-1">
            PRECIO DE LANZAMIENTO
          </span>
          <div className="font-heading font-extrabold text-4xl sm:text-[52px] text-[#1a3a1a] leading-none mb-2">
            $7,99
          </div>
          <p className="font-body text-[#7ab648] font-bold text-sm sm:text-base italic flex items-center justify-center gap-1">
            <Sparkles className="w-4 h-4" /> Menos que un café. Acceso para siempre.
          </p>
        </div>

        {/* Small Trust Bullets */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-600 mb-6">
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-[#7ab648]" /> Descarga inmediata</span>
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-[#7ab648]" /> Sin cobros recurrentes</span>
          <span className="flex items-center gap-1"><Check className="w-4 h-4 text-[#7ab648]" /> Formato PDF compatible</span>
        </div>

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className="btn-cta-standard w-full max-w-sm py-4 px-6 text-base sm:text-lg font-heading font-extrabold text-[#1a3a1a] cursor-pointer"
        >
          OBTENER ACCESO POR $7,99
        </button>

      </div>
    </section>
  );
};
