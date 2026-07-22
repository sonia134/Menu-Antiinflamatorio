import React from 'react';
import { X, CheckCircle } from 'lucide-react';

interface CtaSectionTwoProps {
  onCtaClick: () => void;
}

export const CtaSectionTwo: React.FC<CtaSectionTwoProps> = ({ onCtaClick }) => {
  const objectionsWithoutAction = [
    "Seguir sufriendo pesadez e hinchazón abdominal incómoda después de almorzar.",
    "Seguir improvisando tus comidas diarias con el estrés de no saber qué cocinar.",
    "Seguir gastando dinero de más en compras desorganizadas e ingredientes que se dañan.",
    "Seguir sintiendo esa falta de energía vital constante en tus tardes."
  ];

  const trustChecks = [
    "Acceso inmediato por email",
    "Todos los bonos incluidos",
    "Acceso de por vida",
    "Precio de lanzamiento $7,99"
  ];

  return (
    <section className="bg-[#1a3a1a] text-white py-16 md:py-20 px-5 md:px-12 text-center">
      <div className="max-w-[780px] mx-auto flex flex-col items-center">
        
        {/* H2 Heading */}
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[32px] text-white mb-8 leading-snug">
          ¿Sigues aquí? Eso me dice que una parte de ti ya sabe que esto es lo que necesitas.
        </h2>

        {/* Objections List Box */}
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 sm:p-8 max-w-[560px] w-full text-left mb-8 backdrop-blur-xs">
          <p className="font-heading font-bold text-red-200 text-sm uppercase tracking-wider mb-4 text-center">
            Lo que seguirá pasando si no tomas acción hoy:
          </p>
          <ul className="space-y-3">
            {objectionsWithoutAction.map((item, idx) => (
              <li key={idx} className="pb-3 border-b border-white/10 last:border-0 last:pb-0 flex items-start gap-3">
                <X className="w-5 h-5 text-[#ff6b6b] shrink-0 mt-0.5" />
                <span className="font-body text-white/90 text-sm sm:text-base leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bridge Text */}
        <p className="font-heading font-bold text-[#7ab648] text-xl sm:text-2xl mb-8">
          O puedes cambiar todo eso hoy, por solo $7,99.
        </p>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="w-full sm:w-auto min-h-[64px] py-4 px-8 md:px-10 btn-cta-standard text-lg sm:text-xl font-heading font-extrabold text-[#1a3a1a] btn-cta-pulse cursor-pointer transition-all mb-8"
        >
          SÍ, QUIERO TRANSFORMAR MI COCINA AHORA
        </button>

        {/* 4 Trust Checks Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md w-full text-left">
          {trustChecks.map((check, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-body">
              <CheckCircle className="w-4 h-4 text-[#7ab648] shrink-0" />
              <span className="text-white/90">{check}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
