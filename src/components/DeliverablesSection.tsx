import React from 'react';
import { BookOpen, Calendar, Clock, Sparkles } from 'lucide-react';

export const DeliverablesSection: React.FC = () => {
  const deliverables = [
    {
      badge: "INCLUIDO",
      icon: "📗",
      title: "Recetario Digital Principal: Cocina Antiinflamatoria Express",
      format: "PDF Digital HD de Descarga Inmediata (+100 Recetas)",
      description: "Más de 100 recetas antiinflamatorias probadas para desayunos, almuerzos, cenas, aderezos y snacks. Cada receta incluye fotos HD, tiempo de preparación exacto (15-30 min), lista de ingredientes sencillos e instrucciones paso a paso.",
      originalValue: "$20,00",
      lucideIcon: BookOpen
    },
    {
      badge: "INCLUIDO",
      icon: "📘",
      title: "Guía de Planificación y Batch Cooking Express",
      format: "Manual Digital Interactivo + Plantillas Editables",
      description: "El sistema paso a paso para cocinar en 2 horas los domingos y tener la comida organizada para toda la semana. Aprende las técnicas de almacenamiento anti-oxidación para conservar verduras frescas por días.",
      originalValue: "$15,00",
      lucideIcon: Calendar
    }
  ];

  return (
    <section className="bg-white py-14 md:py-20 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Heading */}
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[36px] text-[#1a3a1a] text-center mb-10 leading-tight">
          📦 Esto es exactamente lo que recibes hoy
        </h2>

        {/* 2 Deliverable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.map((item, idx) => {
            const IconComp = item.lucideIcon;
            return (
              <div 
                key={idx}
                className="bg-[#1a3a1a] text-white rounded-[16px] p-7 md:p-8 flex flex-col justify-between relative shadow-xl border border-[#7ab648]/30 group hover:border-[#7ab648] transition-all"
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#7ab648] text-[#1a3a1a] font-heading font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <span className="text-3xl" role="img" aria-label="libro">{item.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl md:text-[22px] text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Format */}
                  <p className="font-body text-[#7ab648] text-sm italic font-medium mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    {item.format}
                  </p>

                  {/* Description */}
                  <p className="font-body text-white/80 text-sm md:text-[15px] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Value Badge */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/60 font-body">Valor por separado:</span>
                  <span className="bg-white/10 text-white/80 text-xs font-heading font-semibold px-3 py-1 rounded-md line-through decoration-[#ff6b6b]">
                    Valor real: {item.originalValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
