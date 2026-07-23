import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

export const UrgencySection: React.FC = () => {
  return (
    <section className="bg-[#fffbea] border-t-4 border-b-4 border-[#f5a623] py-12 md:py-16 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[780px] mx-auto text-center">
        
        {/* Clock Icon */}
        <div className="w-16 h-16 rounded-full bg-[#f5a623]/20 border border-[#f5a623] text-[#f5a623] flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Clock className="w-9 h-9 text-[#d97706] animate-pulse" />
        </div>

        {/* H2 Title */}
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-[34px] text-[#1a1a1a] mb-4">
          ⚠️ Importante: Este precio no es permanente
        </h2>

        {/* Explanatory Paragraph */}
        <p className="font-body text-[#555] text-base sm:text-[17px] leading-relaxed max-w-[600px] mx-auto mb-6">
          El precio promocional de <strong className="text-[#1a3a1a] font-bold">$7,99 USD</strong> corresponde únicamente a la fase de lanzamiento oficial del sistema. Una vez finalizado este cupo promocional, el valor volverá a su precio regular de $20,00 USD.
        </p>

        {/* Highlighted Quote Box */}
        <div className="bg-[#fff0f0] border border-red-200 rounded-lg p-5 sm:p-7 max-w-2xl mx-auto mb-6 text-center shadow-xs">
          <p className="font-heading font-bold italic text-base sm:text-lg text-[#1a1a1a] leading-relaxed">
            "Cada día que esperas es otro día con la misma hinchazón, el mismo cansancio y la misma pregunta de siempre: <span className="text-[#c0392b] block mt-1">¿Y hoy qué cocino?</span>"
          </p>
        </div>

        {/* Closing sentence */}
        <p className="font-body font-bold text-[#7ab648] text-base sm:text-lg text-center">
          La decisión más inteligente que puedes tomar hoy cuesta menos que un café. 🌿
        </p>

      </div>
    </section>
  );
};
