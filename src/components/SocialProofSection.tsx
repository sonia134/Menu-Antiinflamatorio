import React from 'react';
import { Star, BarChart3, Quote } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: "María Fernanda C.",
      age: "38 años",
      role: "Mamá y Ejecutiva",
      avatarSeed: "maria",
      comment: "¡Increíble cambio! En solo 5 días noté cómo se redujo la hinchazón de mi barriga. Lo mejor es que las recetas toman literal 20 minutos y a mis hijos también les encanta la comida.",
      rating: 5
    },
    {
      name: "Lucía Morales",
      age: "45 años",
      role: "Docente",
      avatarSeed: "lucia",
      comment: "Siempre compraba ingredientes raros para dietas que terminaban dañándose en la nevera. Con este método uso lo que tengo en casa y aprendí a combinar especias antiinflamatorias.",
      rating: 5
    },
    {
      name: "Valeria Ríos",
      age: "29 años",
      role: "Diseñadora Freelance",
      avatarSeed: "valeria",
      comment: "Llevaba meses sintiéndome cansada después de almorzar. Cambié mis comidas con las recetas de 'Cocina Antiinflamatoria Express' y mi energía volvió a ser la de antes.",
      rating: 5
    }
  ];

  return (
    <section className="bg-white py-14 md:py-20 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Heading */}
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[36px] text-[#1a3a1a] text-center mb-8 leading-tight">
          No estás sola — miles de personas ya están transformando su cocina con este método
        </h2>

        {/* Statistical Badge */}
        <div className="bg-[#f0fff4] border-2 border-[#7ab648] rounded-xl p-4 sm:p-5 max-w-2xl mx-auto text-center mb-12 shadow-sm flex items-center justify-center gap-3">
          <BarChart3 className="w-6 h-6 text-[#7ab648] shrink-0" />
          <p className="font-body font-semibold text-[#1a3a1a] text-sm sm:text-base">
            78% de las personas abandonan comer sano en 2 semanas por falta de un sistema práctico 📊
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-6 border-t-4 border-t-[#7ab648] border-x border-b border-gray-100 shadow-md hover:shadow-lg transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Avatar + Rating Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#7ab648]/20 border-2 border-[#7ab648] text-[#1a3a1a] font-heading font-extrabold flex items-center justify-center text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[#1a3a1a] text-sm sm:text-base leading-tight">
                        {t.name}
                      </h3>
                      <p className="font-body text-xs text-gray-500">{t.age} · {t.role}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-[#7ab648]/30" />
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="font-body text-gray-700 text-sm leading-relaxed italic mb-4">
                  "{t.comment}"
                </p>
              </div>

              {/* Verified Purchase Badge */}
              <div className="pt-3 border-t border-gray-100 text-[11px] text-[#7ab648] font-bold uppercase tracking-wider flex items-center gap-1">
                ✓ Compradora Verificada
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
