import React from 'react';
import { Gift, CheckCircle, ShieldAlert } from 'lucide-react';

interface BonusesSectionProps {
  onCtaClick: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onCtaClick }) => {
  const bonuses = [
    {
      number: "BONO 1",
      title: "Guía de Reemplazos Inteligentes & Lista de Compras Express",
      format: "PDF Interactivo Móvil",
      value: "$7,00 USD",
      objection: "No sé qué comprar ni cómo sustituir ingredientes si algo no me gusta.",
      description: "Aprende a sustituir lácteos, gluten o azúcares refinados con alternativas deliciosas sin perder el sabor de tus platillos favoritos.",
      icon: "🛒"
    },
    {
      number: "BONO 2",
      title: "Asistente de Cocina IA Antiinflamatoria",
      format: "Acceso Digital Interactivo & Prompts",
      value: "$10,00 USD",
      objection: "Tengo ingredientes en la nevera pero no sé cómo combinarlos sin inflamarme.",
      description: "Tu asistente virtual inteligente para crear recetas antiinflamatorias al instante según lo que tengas en casa y resolver sustituciones en segundos.",
      icon: "🤖"
    },
    {
      number: "BONO 3",
      title: "Guía de Conservación y Conservas",
      format: "Guía Digital en PDF HD",
      value: "$7,00 USD",
      objection: "Tengo miedo de que la comida se eche a perder o pierda sus nutrientes.",
      description: "Aprende las mejores técnicas de conservación, congelación correcta y conservas caseras para mantener tus alimentos y preparaciones frescas, seguras y llenas de nutrientes.",
      icon: "🫙"
    }
  ];

  return (
    <section className="bg-[#f5f5f5] py-14 md:py-20 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[36px] text-[#1a3a1a] leading-tight mb-2">
            🎁 Y además, hoy recibes estos 3 bonos GRATIS
          </h2>
          <p className="font-body text-gray-600 italic text-sm sm:text-base">
            (Diseñados específicamente para eliminar tus principales obstáculos)
          </p>
        </div>

        {/* 3 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {bonuses.map((b, idx) => (
            <div 
              key={idx}
              className="bg-[#1a3a1a] text-white rounded-[16px] p-6 md:p-7 flex flex-col justify-between shadow-xl border border-[#7ab648]/20 hover:border-[#7ab648] transition-all relative"
            >
              <div>
                {/* Header Badge & Number */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#7ab648] text-[#1a3a1a] font-heading font-extrabold text-[12px] px-3 py-1 rounded-full uppercase tracking-wider">
                    🎁 BONO GRATIS
                  </span>
                  <span className="text-xs font-heading font-bold text-white/70 uppercase">
                    {b.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg md:text-[18px] text-white mb-1 leading-snug">
                  {b.title}
                </h3>

                {/* Format & Value */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="text-[#7ab648] italic font-medium">{b.format}</span>
                  <span className="text-white/50 line-through">Valor real: {b.value}</span>
                </div>

                <div className="w-full h-px bg-white/20 my-3" />

                {/* Objection Breaker */}
                <div className="bg-[#fff0f0] text-[#c0392b] rounded-lg p-3 mb-4 text-xs font-body">
                  <div className="font-bold flex items-center gap-1 mb-0.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#c0392b]" />
                    <span>Resuelve esta duda:</span>
                  </div>
                  <p className="italic text-[#1a1a1a]">"{b.objection}"</p>
                </div>

                {/* Description */}
                <p className="font-body text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                  {b.description}
                </p>
              </div>

              {/* Action Button */}
              <button 
                onClick={onCtaClick}
                className="w-full bg-[#7ab648] text-[#1a3a1a] font-heading font-bold text-xs sm:text-sm py-2.5 px-4 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Gift className="w-4 h-4" /> INCLUIR BONO {idx + 1} GRATIS
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
