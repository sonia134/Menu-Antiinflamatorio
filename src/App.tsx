import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { UvpSection } from './components/UvpSection';
import { BenefitsSection } from './components/BenefitsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { TrustSection } from './components/TrustSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { BonusesSection } from './components/BonusesSection';
import { ValueAnchorSection } from './components/ValueAnchorSection';
import { CtaSection } from './components/CtaSection';
import { FaqSection } from './components/FaqSection';
import { UrgencySection } from './components/UrgencySection';
import { CtaSectionTwo } from './components/CtaSectionTwo';
import { DeepDiveSection } from './components/DeepDiveSection';
import { TwoVersionsSection } from './components/TwoVersionsSection';
import { FinalCierreSection } from './components/FinalCierreSection';
import { FooterSection } from './components/FooterSection';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CheckoutModal } from './components/CheckoutModal';
import { RecipePreviewModal } from './components/RecipePreviewModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSampleRecipeOpen, setIsSampleRecipeOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleOpenSampleRecipe = () => {
    setIsSampleRecipeOpen(true);
  };

  const handleCloseSampleRecipe = () => {
    setIsSampleRecipeOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-body selection:bg-[#7ab648] selection:text-[#1a3a1a] relative pb-16 md:pb-0">
      {/* SECCIÓN 0 — BARRA DE ANUNCIO STICKY (TOP BAR) */}
      <AnnouncementBar onCtaClick={handleOpenCheckout} />

      {/* SECCIÓN 1 — HERO */}
      <HeroSection 
        onCtaClick={handleOpenCheckout} 
        onOpenSampleRecipe={handleOpenSampleRecipe} 
      />

      {/* SECCIÓN 2 — INTRO / HISTORIA (IDENTIFICACIÓN EMOCIONAL) */}
      <IntroSection />

      {/* SECCIÓN 3 — UVP (PROPUESTA ÚNICA DE VALOR) */}
      <UvpSection />

      {/* SECCIÓN 4 — BULLETS DE BENEFICIOS */}
      <BenefitsSection />

      {/* SECCIÓN 5 — PRUEBA SOCIAL */}
      <SocialProofSection />

      {/* SECCIÓN 6 — CONFIANZA (REEMPLAZA GARANTÍA) */}
      <TrustSection onCtaClick={handleOpenCheckout} />

      {/* SECCIÓN 7 — A QUIÉN NO ES PARA */}
      <TargetAudienceSection />

      {/* SECCIÓN 8 — ENTREGABLES */}
      <DeliverablesSection />

      {/* SECCIÓN 9 — BONIFICACIONES */}
      <BonusesSection onCtaClick={handleOpenCheckout} />

      {/* SECCIÓN 10 — ANCHOR (VALOR VS PRECIO) */}
      <ValueAnchorSection />

      {/* SECCIÓN 11 — CTA #1 */}
      <CtaSection 
        buttonText="SÍ, QUIERO TRANSFORMAR MI COCINA — $7,99" 
        onCtaClick={handleOpenCheckout} 
      />

      {/* SECCIÓN 12 — FAQ */}
      <FaqSection />

      {/* SECCIÓN 13 — URGENCIA / ESCASEZ */}
      <UrgencySection />

      {/* SECCIÓN 14 — CTA #2 */}
      <CtaSectionTwo onCtaClick={handleOpenCheckout} />

      {/* SECCIÓN 15 — DEEP DIVE */}
      <DeepDiveSection />

      {/* SECCIÓN 16 — CTA FINAL + CIERRE */}
      <TwoVersionsSection onCtaClick={handleOpenCheckout} />
      <FinalCierreSection onCtaClick={handleOpenCheckout} />

      {/* SECCIÓN 17 — FOOTER */}
      <FooterSection />

      {/* COMPONENTE GLOBAL — BARRA STICKY MOBILE */}
      <MobileStickyBar onCtaClick={handleOpenCheckout} />

      {/* MODAL DE CHECKOUT & VISTA PREVIA DE RECETAS */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
      <RecipePreviewModal 
        isOpen={isSampleRecipeOpen} 
        onClose={handleCloseSampleRecipe} 
        onBuyClick={handleOpenCheckout} 
      />
    </div>
  );
}
