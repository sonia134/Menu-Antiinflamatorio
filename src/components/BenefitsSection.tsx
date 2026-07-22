import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    "Desinflamar tu vientre y decir adiós a la pesadez abdominal después de cada comida.",
    "Cocinar platos deliciosos, coloridos y nutritivos en menos de 30 minutos sin ser experta.",
    "Ahorrar dinero en el supermercado comprando solo ingredientes reales y accesibles.",
    "Recuperar tu energía vital para rendir al máximo durante todo el día sin bajones.",
    "Organizar el menú semanal de tu hogar para eliminar la constante duda de '¿qué cocino hoy?'.",
    "Mejorar tu digestión de forma sostenida gracias al poder curativo de especias y alimentos clave.",
    "Disfrutar de postres y snacks 100% antiinflamatorios sin culpa ni remordimientos.",
    "Sentirte ligera, segura y con una piel radiante reflejando tu bienestar interior."
  ];

  return (
    <section className="bg-[#f5f5f5] py-14 md:py-20 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[900px] mx-auto">
        {/* Section Heading */}
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[36px] text-[#1a3a1a] text-center mb-10 leading-tight">
          Con este sistema vas a poder:
        </h2>

        {/* 8 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md border border-gray-100 hover:border-l-4 hover:border-l-[#7ab648] transition-all duration-200 flex items-start gap-3.5 group"
            >
              <CheckCircle2 className="w-6 h-6 text-[#7ab648] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <p className="font-body text-[#1a1a1a] text-base leading-snug">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
