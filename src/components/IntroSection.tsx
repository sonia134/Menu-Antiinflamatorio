import React from 'react';

export const IntroSection: React.FC = () => {
  const situationBlocks = [
    {
      emoji: '😩',
      text: 'Llegas a casa exhausta después de un largo día. No tienes energía ni ganas para pensar qué cocinar, abres la nevera, ves ingredientes sueltos sin saber cómo combinarlos y terminas abriendo una app de comida rápida o cenando cualquier carbohidrato ultraprocesado que aumenta tu inflamación.'
    },
    {
      emoji: '🥡',
      text: 'Has intentado comer saludable en el pasado, pero te cansaste de comer pollo a la plancha seco con ensalada aburrida o de seguir recetas sofisticadas que requieren 2 horas de preparación e ingredientes caros que solo venden en tiendas orgánicas de lujo.'
    },
    {
      emoji: '😤',
      text: 'Te levantas por la mañana con el vientre desinflamado, pero al cabo de unas pocas horas o después de comer sientes esa molesta hinchazón abdominal, gases, fatiga postprandial y pesadez que hace que la ropa te aprete y te quite la seguridad en ti misma.'
    }
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[780px] mx-auto">
        {/* Section Heading */}
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[32px] text-[#1a3a1a] text-center leading-tight mb-10">
          Si estás leyendo esto, probablemente te identificas con alguna de estas situaciones:
        </h2>

        {/* 3 Situation Blocks */}
        <div className="space-y-4 mb-10">
          {situationBlocks.map((block, idx) => (
            <div 
              key={idx}
              className="bg-[#f5f5f5] border-l-4 border-[#7ab648] rounded-r-lg p-5 md:p-6 flex items-start gap-4 transition-transform hover:-translate-y-0.5 shadow-sm"
            >
              <span className="text-3xl md:text-4xl shrink-0 select-none" role="img" aria-label="situacion">
                {block.emoji}
              </span>
              <p className="font-body text-[#1a1a1a] text-base md:text-[17px] leading-relaxed italic">
                "{block.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <div className="bg-[#f0fff4] border border-[#7ab648]/30 rounded-xl p-6 text-center">
          <p className="font-body text-[#1a1a1a] text-lg sm:text-[19px] leading-relaxed">
            El problema no es tu fuerza de voluntad. El problema es que nadie te dio un sistema práctico, organizado y delicioso para lograrlo. <span className="font-heading font-bold text-[#7ab648] text-xl block mt-1">Hasta hoy.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
