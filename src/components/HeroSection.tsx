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

        {/* Digital Kit / Book Mockup */}
        <div className="relative my-6 group cursor-pointer" onClick={onCtaClick}>
          <div className="relative w-full max-w-[560px] sm:max-w-[680px] md:max-w-[760px] animate-float mx-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]">
            <img 
              src="https://i.postimg.cc/cCS0Z7nH/Gemini-Generated-Image-g3rr36g3rr36g3rr.jpg" 
              alt="Pack Cocina Antiinflamatoria Express y Bonos" 
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-xl border-2 border-[#7ab648]/40 object-cover shadow-2xl"
            />
            {/* Digital Bestseller Badge */}
            <div className="absolute -top-3 -right-2 sm:-right-3 bg-[#7ab648] text-[#1a3a1a] font-heading font-extrabold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-lg border border-white/20 transform rotate-3">
              ¡SISTEMA DIGITAL COMPLETO!
            </div>
            
            {/* Instant Download Tag */}
            <div className="absolute -bottom-3 -left-2 sm:-left-3 bg-[#1a3a1a] border border-[#7ab648] text-white font-heading font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-md shadow-lg flex items-center gap-1.5">
              <ChefHat className="w-4 h-4 text-[#7ab648]" /> +100 Recetas Express + Bonos
            </div>
          </div>
        </div>

        {/* Secondary preview sample recipe trigger */}
        <div className="mt-6">
          <button 
            onClick={onOpenSampleRecipe}
            className="inline-flex items-center gap-2 text-white/90 hover:text-[#7ab648] text-sm sm:text-base font-body underline transition-colors bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10"
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
