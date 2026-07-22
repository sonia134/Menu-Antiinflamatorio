import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ValueAnchorSection: React.FC = () => {
  const valueItems = [
    { title: "Recetario Digital Principal 'Cocina Antiinflamatoria Express' (+100 Recetas)", value: "$20,00" },
    { title: "Guía de Planificación Semanal & Batch Cooking Express", value: "$15,00" },
    { title: "Bono #1: Guía de Reemplazos Inteligentes & Lista de Compras", value: "$7,00" },
    { title: "Bono #2: Recetario de Bebidas & Tisanas Anti-Hinchazón", value: "$7,00" },
    { title: "Bono #3: Plantilla Organizadora & Prompts de Asistente IA", value: "$10,00" },
  ];

  return (
    <section className="bg-[#1a3a1a] text-white py-14 md:py-20 px-5 md:px-12">
      <div className="max-w-[860px] mx-auto">
        
        {/* Table Container */}
        <div className="bg-[#142e14] border border-[#7ab648]/40 rounded-2xl p-6 md:p-8 shadow-2xl mb-10">
          <h3 className="font-heading font-extrabold text-xl md:text-2xl text-center text-white mb-6">
            Resumen de todo lo que obtendrás hoy:
          </h3>

          <div className="space-y-3">
            {valueItems.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-white/5 border border-white/5 text-sm sm:text-base font-body"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#7ab648] shrink-0" />
                  <span className="text-white/90">{item.title}</span>
                </div>
                <span className="font-heading font-bold text-[#7ab648] shrink-0 ml-2">
                  {item.value}
                </span>
              </div>
            ))}

            {/* Total Value Row */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#7ab648]/20 border border-[#7ab648] font-heading text-base sm:text-lg mt-4">
              <span className="font-extrabold text-white">VALOR TOTAL REAL DE TODO EL PACK:</span>
              <span className="font-extrabold text-[#7ab648] text-xl sm:text-2xl">$59,00</span>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-[80px] h-1 bg-[#7ab648] rounded-full mx-auto my-8" />

        {/* Price Block */}
        <div className="text-center">
          <p className="font-body italic text-lg sm:text-xl text-white/80 mb-2">
            Pero hoy no pagas $59. Ni $20.
          </p>

          <div className="inline-block text-[#ff6b6b] text-2xl sm:text-3xl font-heading font-bold line-through decoration-[#ff6b6b] mb-2">
            $20,00
          </div>

          {/* Final Price $7,99 */}
          <div 
            className="font-heading font-extrabold text-6xl sm:text-[72px] text-[#7ab648] leading-none my-2 drop-shadow-[0_0_32px_rgba(122,182,72,0.4)] tracking-tight"
          >
            $7,99
          </div>

          <p className="font-body italic text-white/70 text-sm sm:text-base">
            Eso es menos de lo que gastas en un café y un snack.
          </p>
        </div>

      </div>
    </section>
  );
};
