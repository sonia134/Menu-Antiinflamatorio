import React from 'react';
import { ShieldCheck, Mail, Infinity, CheckCircle, ChefHat, Eye } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
  onOpenSampleRecipe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick, onOpenSampleRecipe }) => {
  return (
    <section className="relative bg-[#1a3a1a] text-white pt-24 pb-16 md:pt-32 md:pb-24 px-5 md:px-12 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Subtle organic background pattern overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center" 
        style={{ backgroundImage: `url('/src/assets/images/hero_recipe_dish_1784662190152.jpg')` }}
      />
      
      {/* Decorative gradient radial lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7ab648]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto w-full text-center flex flex-col items-center">
        
        {/* Eyebrow text */}
        <div className="inline-flex items-center gap-2 bg-[#7ab648]/15 border border-[#7ab648]/30 px-4 py-1.5 rounded-full mb-6">
          <span className="text-[#7ab648] text-xs sm:text-sm font-heading font-bold uppercase tracking-[2px]">
            El sistema que miles de mujeres estaban esperando 🌿
          </span>
        </div>

        {/* Headline H1 */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-[56px] leading-[1.15] text-white max-w-4xl mb-6 tracking-tight">
          ¿Sigues comiendo 'pollo con lechuga' y sintiéndote igual de <span className="text-[#7ab648] underline decoration-[#7ab648]/40 underline-offset-8">hinchada, cansada</span> y sin energía?
        </h1>

        {/* Subtitle */}
        <p className="font-body text-[#7ab648] text-base sm:text-xl md:text-[22px] leading-[1.4] max-w-3xl mb-8 font-medium">
          Descubre el Método de Cocina Eficiente y Saludable que te permite preparar platos deliciosos, variados y antiinflamatorios en menos de 30 minutos — sin dietas aburridas, sin ingredientes caros y sin esclavizarte en la cocina.
        </p>

        {/* Digital Book Mockup */}
        <div className="relative my-4 group cursor-pointer" onClick={onCtaClick}>
          <div className="relative w-64 sm:w-80 md:w-96 animate-float mx-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]">
            <img 
              src="/src/assets/images/ebook_cover_clean_1784665123642.jpg" 
              alt="Ebook Cocina Antiinflamatoria Express" 
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-lg border-2 border-[#7ab648]/40 object-cover shadow-2xl"
            />
            {/* Digital Bestseller Badge */}
            <div className="absolute -top-3 -right-3 bg-[#7ab648] text-[#1a3a1a] font-heading font-extrabold text-xs sm:text-sm px-3 py-1.5 rounded-full shadow-lg border border-white/20 transform rotate-6">
              ¡MÉTODO DIGITAL 2025!
            </div>
            
            {/* Instant Download Tag */}
            <div className="absolute -bottom-3 -left-3 bg-[#1a3a1a] border border-[#7ab648] text-white font-heading font-bold text-xs px-3 py-1 rounded-md shadow-lg flex items-center gap-1.5">
              <ChefHat className="w-4 h-4 text-[#7ab648]" /> +100 Recetas Express
            </div>
          </div>
        </div>

        {/* CTA Hero Button */}
        <div className="w-full max-w-md mt-8 flex flex-col items-center">
          <button
            onClick={onCtaClick}
            className="w-full btn-cta-standard text-lg sm:text-xl py-4 sm:py-5 px-8 font-heading font-extrabold flex items-center justify-center gap-2 text-[#1a3a1a] btn-cta-pulse cursor-pointer"
          >
            QUIERO EMPEZAR HOY — $7,99
          </button>

          {/* Micro-copy under button */}
          <p className="mt-3 text-white/70 text-xs sm:text-sm font-body font-medium flex items-center justify-center gap-2 flex-wrap">
            <span>✅ Acceso inmediato</span>
            <span>·</span>
            <span>✅ Todo incluido</span>
            <span>·</span>
            <span>✅ Para siempre</span>
          </p>

          {/* Secondary preview sample recipe trigger */}
          <button 
            onClick={onOpenSampleRecipe}
            className="mt-4 inline-flex items-center gap-2 text-white/80 hover:text-[#7ab648] text-xs sm:text-sm font-body underline transition-colors"
          >
            <Eye className="w-4 h-4 text-[#7ab648]" /> Ver vista previa de recetario de muestra gratis
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-body text-white/90">
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#7ab648]" />
            <span>🔒 Pago 100% Seguro</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#7ab648]" />
            <span>📧 Entrega Inmediata</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <Infinity className="w-4 h-4 text-[#7ab648]" />
            <span>♾️ Acceso de Por Vida</span>
          </div>
        </div>

      </div>
    </section>
  );
};
