import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // Open 1st by default

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "¿Cómo recibo el material después de realizar la compra?",
      answer: "Inmediatamente después de completar tu pago seguro por $7,99, recibirás un correo electrónico automático con los enlaces directos para descargar todo el contenido (recetario digital + guías + bonos) en formato PDF HD compatible con cualquier teléfono, tablet o computadora."
    },
    {
      id: 2,
      question: "¿Necesito ingredientes caros o difíciles de encontrar?",
      answer: "¡Para nada! Todas las recetas están diseñadas con ingredientes reales que puedes encontrar en cualquier supermercado local o verdulería de barrio (avena, cúrcuma, aguacate, vegetales frescos, pollo, pescado, semillas, huevos, etc.)."
    },
    {
      id: 3,
      question: "¿Cuánto tiempo me tomará preparar cada plato?",
      answer: "La mayoría de las recetas toman entre 15 y 30 minutos máximo. Además, la Guía de Batch Cooking te enseñará cómo cocinar en solo 2 horas el fin de semana para tener resuelta la comida de toda la semana."
    },
    {
      id: 4,
      question: "¿Sirve este sistema si no sé cocinar casi nada?",
      answer: "Sí, el recetario está redactado paso a paso con un lenguaje sencillo, tiempos exactos y explicaciones claras. No necesitas ser experta ni tener herramientas sofisticadas en la cocina."
    },
    {
      id: 5,
      question: "¿El pago de $7,99 es único o hay cobros mensuales ocultos?",
      answer: "Es un pago único y definitivo de $7,99. No existe ninguna suscripción ni cobros recurrentes. Tendrás acceso de por vida al material descargable."
    },
    {
      id: 6,
      question: "¿Puedo imprimir el libro y las guías?",
      answer: "¡Por supuesto! Todo el material viene en formato PDF de alta resolución optimizado para leerlo cómodamente en pantallas digitales o imprimirlo en papel si prefieres tenerlo guardado en tu cocina."
    },
    {
      id: 7,
      question: "¿Las recetas son aptas si tengo intolerancia al gluten o la lactosa?",
      answer: "Sí, la cocina antiinflamatoria prioriza alimentos naturalmente libres de gluten refinado y lácteos pesados. Además, incluye el Bono #1 de Reemplazos Inteligentes para adaptar cualquier plato según tus alergias o gustos."
    },
    {
      id: 8,
      question: "¿Qué pasa si tengo poco espacio en mi teléfono?",
      answer: "Los archivos PDF están altamente optimizados para pesar poco espacio. Además, podrás acceder a tus enlaces de descarga las veces que quieras desde la nube."
    },
    {
      id: 9,
      question: "¿Toda mi familia puede comer estas recetas o son solo para mí?",
      answer: "¡Son deliciosas para toda la familia! No son platos insípidos de 'dieta', sino recetas ricas, variadas y coloridas que les encantarán tanto a adultos como a niños."
    },
    {
      id: 10,
      question: "¿Es seguro realizar el pago en esta plataforma?",
      answer: "Totalmente seguro. Utilizamos procesadores de pago encriptados con tecnología SSL de 256 bits (la misma seguridad que usan los bancos). Tus datos financieros están 100% protegidos."
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#f5f5f5] py-14 md:py-20 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[780px] mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#7ab648]/20 px-3 py-1 rounded-full text-[#1a3a1a] text-xs font-heading font-bold mb-3">
            <HelpCircle className="w-4 h-4 text-[#7ab648]" />
            RESOLVEMOS TUS DUDAS
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[36px] text-[#1a3a1a]">
            ❓ Preguntas Frecuentes
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="space-y-2.5">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className={`bg-white rounded-lg transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-l-4 border-l-[#7ab648] shadow-md' 
                    : 'border border-gray-200 hover:border-gray-300 shadow-xs'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-[#1a3a1a] text-base md:text-[17px] leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#f0fff4] text-[#7ab648] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#7ab648] text-[#1a3a1a]' : ''}`}>
                    {isOpen ? <Minus className="w-4 h-4 font-bold" /> : <Plus className="w-4 h-4 font-bold" />}
                  </div>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#555] font-body text-sm sm:text-base leading-relaxed border-t border-gray-100/60 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
