import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

interface CtaSectionProps {
  buttonText?: string;
  onCtaClick: () => void;
  showUrgencyText?: boolean;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  buttonText = "SÍ, QUIERO TRANSFORMAR MI COCINA — $7,99 USD",
  onCtaClick,
  showUrgencyText = true
}) => {
  return (
    <section className="bg-[#1a3a1a] text-white py-12 md:py-16 px-5 md:px-12 text-center">
      <div className="max-w-[780px] mx-auto flex flex-col items-center">
        
        {/* Main CTA Button */}
        <button
          onClick={onCtaClick}
          className="w-full sm:w-auto min-h-[64px] py-4 px-8 md:px-12 btn-cta-standard text-lg sm:text-xl font-heading font-extrabold text-[#1a3a1a] btn-cta-pulse cursor-pointer transition-all flex items-center justify-center gap-2"
        >
          {buttonText}
        </button>

        {/* Micro-copy under button */}
        <p className="mt-4 text-white/70 text-xs sm:text-sm font-body font-medium flex items-center justify-center gap-2 flex-wrap">
          <span>✅ Acceso inmediato</span>
          <span>·</span>
          <span>✅ Todo incluido</span>
          <span>·</span>
          <span>✅ Para siempre</span>
        </p>

        {/* Payment logos row */}
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap opacity-80">
          <div className="bg-white/10 px-3 py-1.5 rounded border border-white/10 text-xs font-bold font-heading text-white flex items-center gap-1">
            💳 VISA
          </div>
          <div className="bg-white/10 px-3 py-1.5 rounded border border-white/10 text-xs font-bold font-heading text-white flex items-center gap-1">
            💳 Mastercard
          </div>
          <div className="bg-white/10 px-3 py-1.5 rounded border border-white/10 text-xs font-bold font-heading text-white flex items-center gap-1">
            🅿️ PayPal
          </div>
          <div className="bg-white/10 px-3 py-1.5 rounded border border-white/10 text-xs font-bold font-heading text-white flex items-center gap-1">
            💳 AMEX
          </div>
        </div>

        {/* Urgency text */}
        {showUrgencyText && (
          <p className="mt-4 text-[#7ab648] text-xs sm:text-sm italic font-body flex items-center justify-center gap-1.5">
            <Zap className="w-4 h-4 text-[#7ab648] animate-bounce" />
            ⚡ Precio especial de lanzamiento — puede aumentar en cualquier momento
          </p>
        )}

      </div>
    </section>
  );
};
