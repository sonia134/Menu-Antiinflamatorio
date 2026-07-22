import React from 'react';
import { X, Check } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const notForYou = [
    "Buscas pastillas mágicas o soluciones milagrosas de la noche a la mañana sin cambiar nada de tu alimentación.",
    "Prefieres seguir gastando fortunas en suplementos sintéticos en lugar de alimentarte con comida real.",
    "Estás buscando un libro teórico aburrido de 500 páginas lleno de términos médicos incomprensibles.",
    "No estás dispuesta a dedicar 15 a 20 minutos al día para nutrir tu cuerpo con platos deliciosos."
  ];

  const yesForYou = [
    "Quieres eliminar la hinchazón abdominal y sentirte liviana después de cada desayuno, almuerzo y cena.",
    "Tienes poco tiempo y buscas recetas rápidas, sencillas y deliciosas en menos de 30 minutos.",
    "Deseas organizar tu menú semanal sin estrés, ahorrando tiempo y dinero en el supermercado.",
    "Quieres recuperar tu vitalidad y energía natural disfrutando de la comida sin culpa ni dietas extremas."
  ];

  return (
    <section className="bg-[#f5f5f5] py-14 md:py-20 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Column Left: NO es para ti */}
          <div className="bg-[#fff0f0] border border-red-200 rounded-xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#a91b1b] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-200 text-[#a91b1b] flex items-center justify-center shrink-0">❌</span>
                Este sistema NO es para ti si...
              </h3>
              
              <ul className="space-y-4">
                {notForYou.map((item, idx) => (
                  <li key={idx} className="pb-4 border-b border-red-200/60 last:border-0 last:pb-0 flex items-start gap-3">
                    <X className="w-5 h-5 text-[#a91b1b] shrink-0 mt-0.5" />
                    <span className="font-body text-[#333] text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column Right: SÍ es para ti */}
          <div className="bg-[#f0fff4] border border-[#7ab648]/40 rounded-xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1a3a1a] mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#7ab648] text-[#1a3a1a] flex items-center justify-center shrink-0">✅</span>
                Pero SÍ es perfectamente para ti si...
              </h3>
              
              <ul className="space-y-4">
                {yesForYou.map((item, idx) => (
                  <li key={idx} className="pb-4 border-b border-[#7ab648]/20 last:border-0 last:pb-0 flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#7ab648] shrink-0 mt-0.5 font-bold" />
                    <span className="font-body text-[#1a1a1a] text-sm sm:text-base leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
