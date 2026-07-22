import React from 'react';
import { XCircle, Sparkles } from 'lucide-react';

export const UvpSection: React.FC = () => {
  const notIsList = [
    "No es otra dieta restrictiva que te prohíbe comer rico o te deja con hambre.",
    "No son recetas con ingredientes exóticos imposibles de encontrar en tu supermercado habitual.",
    "No es un plan abrumador y complicado que terminarás abandonando a los 3 días."
  ];

  return (
    <section className="bg-[#1a3a1a] text-white py-14 md:py-20 px-5 md:px-12 text-center relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="max-w-[860px] mx-auto relative z-10">
        
        {/* H2 Heading */}
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-[38px] leading-tight text-white mb-8">
          El único sistema de recetas antiinflamatorias diseñado para personas reales, con tiempo real y presupuesto real.
        </h2>

        {/* 3 NO ES items */}
        <div className="space-y-3 max-w-2xl mx-auto mb-8">
          {notIsList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#fff0f0]/10 border border-[#fff0f0]/20 rounded-lg p-3.5 sm:p-4 flex items-center gap-3 text-left backdrop-blur-xs"
            >
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6b6b] shrink-0" />
              <span className="font-body text-[#ffcdd2] text-sm sm:text-base line-through decoration-[#ff6b6b]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Visual Separator */}
        <div className="w-[60px] h-1 bg-[#7ab648] rounded-full mx-auto my-8" />

        {/* Highlighted Method Name */}
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-[#7ab648] animate-pulse" />
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl md:text-[28px] text-[#7ab648]">
            Es el Método de Cocina Eficiente y Saludable
          </h3>
        </div>

        {/* Method Description */}
        <p className="font-body text-white/90 text-base sm:text-[17px] leading-relaxed max-w-[700px] mx-auto">
          Un recetario y guía estratégica digital concebido para enseñarte cómo combinar alimentos reales y sabrosos que desinflaman tu cuerpo de manera natural, permitiéndote preparar desayunos, almuerzos, cenas y snacks en 15 a 30 minutos sin complicarte la vida.
        </p>

      </div>
    </section>
  );
};
