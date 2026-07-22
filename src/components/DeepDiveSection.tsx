import React from 'react';
import { AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const DeepDiveSection: React.FC = () => {
  const symptoms = [
    "Hinchazón abdominal acumulativa que empeora a lo largo del día.",
    "Sensación de fatiga constante y pesadez física aun habiendo dormido 8 horas.",
    "Digestión lenta, gases molestos y variaciones bruscas en tu tránsito intestinal.",
    "Retención de líquidos, manos o tobillos inflamados al finalizar la jornada.",
    "Antojos incontrolables de ultraprocesados y dificultad para enfocarte."
  ];

  return (
    <section className="bg-white py-14 md:py-20 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[860px] mx-auto">
        
        {/* H2 Title */}
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[32px] text-[#1a3a1a] text-center mb-6 leading-tight">
          ¿Por qué la alimentación antiinflamatoria es la clave que nadie te explicó?
        </h2>

        {/* Intro Paragraph */}
        <p className="font-body text-[#555] text-base sm:text-[17px] leading-[1.7] text-center max-w-2xl mx-auto mb-8">
          La inflamación celular de bajo grado es la respuesta de tu organismo al consumo diario de ingredientes refinados, aceites vegetales de baja calidad, aditivos industriales y combinaciones pesadas. Cuando tu cuerpo está inflamado por dentro, se manifiestan estos síntomas silenciosos:
        </p>

        {/* Symptoms List */}
        <div className="space-y-2.5 max-w-2xl mx-auto mb-10">
          {symptoms.map((symptom, idx) => (
            <div 
              key={idx}
              className="bg-[#fff0f0] border border-red-200/80 rounded-lg p-4 sm:p-5 flex items-center gap-3.5 text-[#c0392b] font-body font-semibold text-sm sm:text-base"
            >
              <span className="text-xl shrink-0">🔴</span>
              <span>{symptom}</span>
            </div>
          ))}
        </div>

        {/* Solution Block */}
        <div className="bg-[#f0fff4] border-l-4 border-l-[#7ab648] border-y border-r border-[#7ab648]/20 rounded-r-2xl p-6 sm:p-8 md:p-10 shadow-sm">
          <div className="flex items-center gap-2 text-[#7ab648] font-heading font-extrabold text-lg mb-3">
            <Sparkles className="w-5 h-5 text-[#7ab648]" />
            <span>LA BUENA NOTICIA:</span>
          </div>

          <p className="font-body text-[#1a1a1a] text-base sm:text-[17px] leading-relaxed mb-4">
            No necesitas tomar medicamentos costosos ni privarte de comer rico. Tu cuerpo tiene la capacidad natural de desinflamarse de forma acelerada cuando le proporcionas los nutrientes clave, antioxidantes y combinaciones de alimentos adecuadas.
          </p>

          <p className="font-body text-[#1a1a1a] text-base sm:text-[17px] leading-relaxed font-semibold">
            Ahí es donde el <strong className="font-heading font-extrabold text-[#7ab648] text-lg sm:text-xl">Método de Cocina Eficiente y Saludable</strong> se convierte en tu mejor aliado para transformar tus comidas cotidianas en tu mejor medicina.
          </p>
        </div>

      </div>
    </section>
  );
};
