import React, { useEffect, useState, lazy, Suspense } from 'react';
import { AIIcon } from '@/components/icons/Logo';

// Carga perezosa del componente pesado PaperAnalysis
const PaperAnalysis = lazy(() => import('@/components/PaperAnalysis'));

const AIDetectionHeroES: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  // Efecto para hidratación del lado del cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="pt-4 pb-0 md:pt-10 md:pb-0 overflow-hidden bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto">
          {/* Banner de conteo de usuarios */}
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8 border border-[#E8E8E5] rounded-full px-4 py-2">
            <img src="/users.png" alt="Avatares de usuarios" className="h-6 md:h-8 w-auto" />
            <div className="text-sm md:text-base text-[#232323] font-aeonik">
              <span className="font-normal">Amado por </span>
              <span className="font-medium">500k+ usuarios</span>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[5rem] leading-[1.1] sm:leading-[1.2] md:leading-[1.2] font-orbikular mb-4 md:mb-8 text-[#232323]">
            <span className="inline-block">
              <em className="not-italic font-orbikular" style={{ fontVariationSettings: "'wght' 500" }}>Detector</em>
              <span className="inline-block mx-2">de Contenido</span>
              <em className="not-italic font-orbikular" style={{ fontVariationSettings: "'wght' 500" }}>IA</em>
            </span>
            <br />
            <span className="inline-block">Resultados Rápidos y Precisos</span>
          </h1>
          <p className="font-['Aeonik Pro'] text-base sm:text-lg md:text-xl mb-6 md:mb-12 text-gray-600">
            Herramienta avanzada para detectar contenido generado por IA. Obtén resultados instantáneos y precisos para verificar la autenticidad de tu texto.
          </p>
          <div className="flex justify-center mb-0 md:mb-12">
            <a href="https://mystylus.ai/paper-grader/" className="no-underline">
              <button className="w-[280px] md:w-auto px-6 md:px-[3.75rem] py-3 md:py-[1.125rem] bg-[#232323] text-white rounded-full text-base md:text-[20px] font-aeonik font-medium">
                Verificar Contenido de IA
              </button>
            </a>
          </div>

          {/* Componente Paper Analysis - carga perezosa */}
          <div className="hidden sm:block">
            {isClient && (
              <Suspense fallback={
                <div className="w-full h-[460px] flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
                </div>
              }>
                <PaperAnalysis />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDetectionHeroES; 