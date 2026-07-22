import React, { useState } from 'react';
import { X, Lock, CheckCircle, ShieldCheck, Sparkles, CreditCard, Mail, Inbox } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1a3a1a] text-white rounded-2xl max-w-xl w-full border-2 border-[#7ab648] shadow-2xl relative overflow-hidden my-6">
        
        {/* Modal Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header Banner */}
            <div className="bg-[#142e14] p-5 border-b border-[#7ab648]/30 pr-14">
              <div className="flex items-center gap-2 text-[#7ab648] font-heading font-extrabold text-xs uppercase tracking-wider mb-1">
                <Lock className="w-4 h-4" /> CHECKOUT SEGURO ENCRIPTADO SSL 256-BIT
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                Acceso Inmediato a Cocina Antiinflamatoria Express
              </h3>
            </div>

            {/* Order Summary Box */}
            <div className="p-5 sm:p-6 space-y-5">
              <div className="bg-white/5 border border-[#7ab648]/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-bold text-sm text-white">
                    Pack Digital 'Cocina Antiinflamatoria Express'
                  </span>
                  <div className="text-right">
                    <span className="text-xs text-white/50 line-through mr-2">$20,00</span>
                    <span className="font-heading font-extrabold text-[#7ab648] text-xl">$7,99</span>
                  </div>
                </div>

                <ul className="text-xs text-white/80 space-y-1 font-body pt-2 border-t border-white/10">
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#7ab648]" /> Recetario Digital HD (+100 Recetas Antiinflamatorias)</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#7ab648]" /> Guía de Batch Cooking & Planificación Semanal</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#7ab648]" /> 🎁 Bono #1: Guía de Reemplazos & Lista de Compras</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#7ab648]" /> 🎁 Bono #2: Recetario de Bebidas & Tisanas Anti-Hinchazón</li>
                  <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-[#7ab648]" /> 🎁 Bono #3: Plantilla Organizadora & Asistente IA</li>
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div>
                  <label className="block text-xs font-heading font-bold text-white/90 uppercase tracking-wider mb-1">
                    Tu Nombre Completo:
                  </label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. María García"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#7ab648] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-white/90 uppercase tracking-wider mb-1">
                    Tu Correo Electrónico (Donde enviar tu acceso):
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu.email@ejemplo.com"
                      className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#7ab648] transition-colors"
                    />
                  </div>
                </div>

                {/* Payment Selection */}
                <div>
                  <label className="block text-xs font-heading font-bold text-white/90 uppercase tracking-wider mb-2">
                    Método de Pago Preferido:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-lg border font-heading text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        paymentMethod === 'card' 
                          ? 'bg-[#7ab648] text-[#1a3a1a] border-[#7ab648]' 
                          : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" /> Tarjeta Crédito / Débito
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-3 rounded-lg border font-heading text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        paymentMethod === 'paypal' 
                          ? 'bg-[#7ab648] text-[#1a3a1a] border-[#7ab648]' 
                          : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      🅿️ PayPal
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full btn-cta-standard text-base sm:text-lg py-4 px-6 font-heading font-extrabold text-[#1a3a1a] flex items-center justify-center gap-2 cursor-pointer btn-cta-pulse mt-4"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 animate-spin" /> PROCESANDO ACCESO SEGURO...
                    </span>
                  ) : (
                    <span>COMPLETAR MI PEDIDO Y DESCARGAR — $7,99</span>
                  )}
                </button>
              </form>

              {/* Guarantees */}
              <div className="flex items-center justify-center gap-4 text-xs text-white/60 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#7ab648]" /> Pago 100% Seguro</span>
                <span>·</span>
                <span>Acceso de Por Vida</span>
              </div>
            </div>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="p-6 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#7ab648] text-[#1a3a1a] flex items-center justify-center mx-auto shadow-xl animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-3">
              <span className="bg-[#7ab648]/20 text-[#7ab648] text-xs font-heading font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                ¡PEDIDO CONFIRMADO EXITOSAMENTE!
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                ¡Felicitaciones {name || 'amiga'}! 🎉
              </h3>
              <p className="font-body text-white/90 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Tu compra de <strong>Cocina Antiinflamatoria Express ($7,99)</strong> fue procesada correctamente.
              </p>
            </div>

            {/* Email confirmation box */}
            <div className="bg-white/5 border border-[#7ab648]/40 rounded-xl p-5 max-w-md mx-auto text-left space-y-2">
              <div className="flex items-center gap-2.5 text-[#7ab648] font-heading font-bold text-sm">
                <Inbox className="w-5 h-5 shrink-0" />
                <span>Enlaces enviados a tu correo:</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-white/80 leading-normal pl-7">
                Hemos enviado todos los enlaces de acceso y la confirmación de tu compra a: <strong className="text-[#7ab648] break-all">{email || 'tu correo electrónico'}</strong>
              </p>
              <p className="font-body text-[11px] text-white/50 pl-7">
                *(Revisa tu bandeja de entrada y la carpeta de spam o promociones si no lo ves en unos minutos).*
              </p>
            </div>

            <div>
              <button
                onClick={onClose}
                className="w-full sm:w-auto bg-[#7ab648] text-[#1a3a1a] font-heading font-extrabold py-4 px-8 rounded-xl hover:brightness-110 transition-all text-base cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                CERRAR Y COMENZAR A DISFRUTAR
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
