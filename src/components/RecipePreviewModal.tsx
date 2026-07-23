import React, { useState } from 'react';
import { X, Clock, Sparkles, ChefHat, Check, Flame, ArrowRight } from 'lucide-react';
import { SampleRecipe } from '../types';

interface RecipePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBuyClick: () => void;
}

export const RecipePreviewModal: React.FC<RecipePreviewModalProps> = ({
  isOpen,
  onClose,
  onBuyClick
}) => {
  if (!isOpen) return null;

  const sampleRecipes: SampleRecipe[] = [
    {
      id: '1',
      title: 'Bowl Anti-Hinchazón de Quinoa, Camote y Aderezo de Cúrcuma',
      prepTime: '20 Minutos',
      category: 'Almuerzo / Cena Express',
      calories: '380 kcal',
      antiInflammatoryScore: 98,
      benefits: [
        'Elimina gases abdominales',
        'Rico en antioxidantes y betacarotenos',
        'Digestión liviana sin somnolencia'
      ],
      ingredients: [
        '1/2 taza de quinoa cocida',
        '1 camote pequeño horneado en cubos',
        '1/2 aguacate maduro en rebanadas',
        '1 taza de espinacas frescas o arúgula',
        'Aderezo: 1 cda aceite de oliva extra virgen, 1/2 cdta cúrcuma, jugo de 1/2 limón, pizca de pimienta negra'
      ],
      instructions: [
        'Servir las espinacas frescas como base en un bowl profundo.',
        'Agregar la quinoa tibia y los cubos de camote horneado.',
        'Añadir el aguacate en láminas finas y semillas de calabaza tostadas.',
        'Mezclar en un recipiente pequeño los ingredientes del aderezo de cúrcuma y verter justo antes de consumir.'
      ]
    },
    {
      id: '2',
      title: 'Smoothie Dorado Digestivo de Piña, Jengibre y Linaza',
      prepTime: '5 Minutos',
      category: 'Desayuno / Snack Antiinflamatorio',
      calories: '210 kcal',
      antiInflammatoryScore: 99,
      benefits: [
        'Enzima bromelina que acelera la digestión',
        'Efecto calmante en la mucosa gástrica',
        'Acción diurética contra la retención de líquidos'
      ],
      ingredients: [
        '1 taza de piña natural picada en cubos',
        '1 trozo pequeño de jengibre fresco (1 cm)',
        '1 cucharada de semillas de linaza molida',
        '1/2 taza de agua de coco o agua filtrada',
        '1/2 cucharadita de canela en polvo'
      ],
      instructions: [
        'Colocar la piña, el jengibre pelado y la linaza en el vaso de la licuadora.',
        'Agregar el agua de coco fría y la canela en polvo.',
        'Licuar a velocidad alta durante 60 segundos hasta obtener una consistencia sedosa.',
        'Tomar preferiblemente en ayunas o como merienda refrescante a media tarde.'
      ]
    },
    {
      id: '3',
      title: 'Cena Express: Filete de Salmón o Pesca Blanca en Costra de Hierbas y Salvia',
      prepTime: '15 Minutos',
      category: 'Cena Liviana y Nutritiva',
      calories: '320 kcal',
      antiInflammatoryScore: 97,
      benefits: [
        'Alto contenido de Omega-3 desinflamatorio',
        'Proteína limpia de fácil asimilación',
        'Promueve un sueño reparador y profundo'
      ],
      ingredients: [
        '1 filete de salmón o pescado blanco (150g)',
        '1 cda de aceite de oliva virgen extra',
        '1 diente de ajo picado finamente',
        'Hierbas frescas: romero, tomillo y salvia picados',
        '1/2 taza de espárragos o calabacines a la sartén'
      ],
      instructions: [
        'Sazonar el filete con sal marina, pimienta y la mezcla de hierbas aromáticas.',
        'Calentar la sartén con el aceite de oliva a fuego medio-alto.',
        'Cocinar el pescado 3-4 minutos por lado hasta dorar la superficie.',
        'Saltear los espárragos en la misma sartén durante 3 minutos y servir inmediatamente.'
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<string>(sampleRecipes[0].id);
  const selectedRecipe = sampleRecipes.find(r => r.id === activeTab) || sampleRecipes[0];

  return (
    <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1a3a1a] text-white rounded-2xl max-w-2xl w-full border-2 border-[#7ab648] shadow-2xl relative overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#142e14] p-5 sm:p-6 border-b border-[#7ab648]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="w-6 h-6 text-[#7ab648]" />
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
              Muestra Gratis del Recetario (+100 Recetas)
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Recipe Tabs */}
        <div className="p-4 sm:p-6">
          <div className="flex gap-2 border-b border-white/10 pb-3 overflow-x-auto no-scrollbar">
            {sampleRecipes.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveTab(r.id)}
                className={`px-3.5 py-2 rounded-lg font-heading text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === r.id 
                    ? 'bg-[#7ab648] text-[#1a3a1a] shadow-md' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {r.category.split('/')[0]}
              </button>
            ))}
          </div>

          {/* Active Recipe Content */}
          <div className="mt-5 space-y-4">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <span className="text-[#7ab648] text-xs font-heading font-bold uppercase tracking-wider block mb-1">
                  {selectedRecipe.category}
                </span>
                <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  {selectedRecipe.title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-[#7ab648]/20 border border-[#7ab648]/40 text-[#7ab648] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {selectedRecipe.prepTime}
                </span>
                <span className="bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" /> Score: {selectedRecipe.antiInflammatoryScore}/100
                </span>
              </div>
            </div>

            {/* Benefits pills */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex flex-wrap gap-2 text-xs text-white/90">
              {selectedRecipe.benefits.map((b, i) => (
                <span key={i} className="flex items-center gap-1 bg-[#7ab648]/15 text-[#7ab648] px-2.5 py-1 rounded-md font-medium">
                  <Check className="w-3.5 h-3.5" /> {b}
                </span>
              ))}
            </div>

            {/* Ingredients & Instructions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h5 className="font-heading font-bold text-[#7ab648] text-sm uppercase tracking-wider mb-2">
                  🛒 Ingredientes Sencillos:
                </h5>
                <ul className="space-y-1.5 text-xs sm:text-sm text-white/80 font-body">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#7ab648]">•</span> {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h5 className="font-heading font-bold text-[#7ab648] text-sm uppercase tracking-wider mb-2">
                  👩‍🍳 Paso a Paso Express:
                </h5>
                <ol className="space-y-2 text-xs sm:text-sm text-white/80 font-body list-decimal list-inside">
                  {selectedRecipe.instructions.map((inst, i) => (
                    <li key={i} className="leading-snug">
                      {inst}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Lock notice for full book */}
            <div className="bg-[#7ab648]/15 border border-[#7ab648]/40 p-4 rounded-xl text-center mt-4">
              <p className="font-body text-xs sm:text-sm text-white/90 mb-3">
                📖 Esta es 1 de las <strong>más de 100 recetas exclusivas</strong> incluidas en el recetario completo "Cocina Antiinflamatoria Express" + Planificador + 3 Bonos.
              </p>
              
              <button
                onClick={() => {
                  onClose();
                  onBuyClick();
                }}
                className="btn-cta-standard text-sm sm:text-base py-3 px-6 font-heading font-bold text-[#1a3a1a] inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                DESCARGAR LAS +100 RECETAS POR $7,99 USD <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
