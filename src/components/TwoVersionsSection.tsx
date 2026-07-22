import React from 'react';
import { X, Check, Sparkles } from 'lucide-react';

interface TwoVersionsSectionProps {
  onCtaClick: () => void;
}

export const TwoVersionsSection: React.FC<TwoVersionsSectionProps> = ({ onCtaClick }) => {
  const versionA = [
    "Continuar sufriendo pesadez, vientre abultado y cansancio diario.",
    "Perder tiempo todos los días descifrando qué cenar al volver cansada.",
    "Gastar en entregas a domicilio llenas de ultraprocesados dañinos.",
    "Sentirte estancada, frustrada y sin el cuerpo ligero que mereces."
  ];

  const versionB = [
    "Aplanar tu vientre naturalmente y disfrutar de una digestión ligera.",
    "Tener tu menú semanal planificado con recetas deliciosas en 20 minutos.",
    "Ahorrar dinero comprando ingredientes sanos y accesibles.",
    "Recuperar tu energía vital y sentirte llena de salud y bienestar."
  ];

  return (
    <section className="bg-[#f5f5f5] py-14 md:py-20 px-5 md:px-12 text-[#1a1a1a]">
      <div className="max-w-[900px] mx-auto">
        
        {/* Subsection A Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-[34px] text-[#1a3a1a] leading-tight">
            Hoy tienes dos opciones claras frente a ti:
          </h2>
        </div>

        {/* 2 Columns: Versión A vs Versión B */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Version A */}
          <div className="bg-[#2d2d2d] text-white rounded-[16px] p-6 sm:p-8 flex flex-col justify-between shadow-md border border-gray-700">
            <div>
              <span className="inline-block bg-[#555] text-white font-heading font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
                OPCIÓN A: SIN EL SISTEMA
              </span>

              <ul className="space-y-4">
                {versionA.map((item, idx) => (
                  <li key={idx} className="pb-3.5 border-b border-gray-700 last:border-0 last:pb-0 flex items-start gap-3">
                    <X className="w-5 h-5 text-[#ff6b6b] shrink-0 mt-0.5" />
                    <span className="font-body text-white/80 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Version B */}
          <div className="bg-[#1a3a1a] text-white rounded-[16px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-2 border-[#7ab648] relative">
            <div className="absolute -top-3 -right-3 bg-[#7ab648] text-[#1a3a1a] font-heading font-bold text-xs px-3 py-1 rounded-full shadow-md">
              RECOMENDADO
            </div>

            <div>
              <span className="inline-block bg-[#7ab648] text-[#1a3a1a] font-heading font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
                OPCIÓN B: CON EL SISTEMA ✨
              </span>

              <ul className="space-y-4">
                {versionB.map((item, idx) => (
                  <li key={idx} className="pb-3.5 border-b border-white/10 last:border-0 last:pb-0 flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#7ab648] shrink-0 mt-0.5 font-bold" />
                    <span className="font-body text-white text-sm sm:text-base leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bridge text */}
        <p className="font-heading font-bold text-[#1a3a1a] text-xl sm:text-2xl text-center">
          La diferencia entre estas dos versiones es una sola decisión.
        </p>

      </div>
    </section>
  );
};
