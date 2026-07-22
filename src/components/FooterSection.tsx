import React from 'react';
import { Leaf } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#0f2410] text-white py-10 px-5 md:px-12 text-center border-t border-[#7ab648]/20">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-5">
        
        {/* Product Brand */}
        <div className="flex items-center gap-2 text-[#7ab648] font-heading font-bold text-base md:text-lg">
          <Leaf className="w-5 h-5 text-[#7ab648]" />
          <span>Cocina Antiinflamatoria Express</span>
        </div>

        {/* Legal Links Row */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap text-xs text-white/40 font-body">
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white/80 transition-colors">
            Política de Privacidad
          </a>
          <span>·</span>
          <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white/80 transition-colors">
            Términos y Condiciones
          </a>
          <span>·</span>
          <a href="#contact" onClick={(e) => e.preventDefault()} className="hover:text-white/80 transition-colors">
            Contacto
          </a>
        </div>

        {/* Medical Disclaimer */}
        <p className="text-[11px] text-white/30 font-body max-w-[600px] leading-relaxed">
          Aviso legal: Este producto es un recetario y guía digital informativa de educación nutricional. No sustituye la consulta, diagnóstico ni tratamiento de profesionales de la salud o médicos especialistas.
        </p>

        {/* Copyright */}
        <p className="text-[11px] text-white/30 font-body">
          © 2025 Cocina Antiinflamatoria Express. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
};
