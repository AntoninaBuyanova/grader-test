import React from 'react';
import { Shield } from 'lucide-react';
import { AIIcon } from '../icons/Logo';
import PaperAnalysis from '../PaperAnalysis';

const PTHeroSection: React.FC = () => {
  return (
    <section className="pt-6 pb-6 md:pt-20 md:pb-0 overflow-hidden bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto">
          {/* User count banner */}
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8 border border-[#E8E8E5] rounded-full px-4 py-2">
            <img src="/users.png" alt="Avatares de usuários" className="h-6 md:h-8 w-auto" />
            <div className="text-sm md:text-base text-[#232323] font-aeonik">
              <span className="font-normal">Amado por </span>
              <span className="font-medium">mais de 500 mil usuários</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[5rem] leading-[1.1] sm:leading-[1.2] md:leading-[1.2] font-orbikular mb-4 md:mb-8 text-[#232323]">
            <span className="inline-block">
              <em className="italic font-orbikular" style={{ fontWeight: 500 }}>Avalie</em>
              <span className="inline-block mx-2 font-orbikular">e</span>
              <em className="italic font-orbikular" style={{ fontWeight: 500 }}>Melhore</em>
            </span>
            <br />
            <span className="inline-block font-orbikular">Seu Trabalho em Minutos</span>
          </h1>
          <p className="font-aeonik text-base sm:text-lg md:text-xl mb-6 md:mb-12 text-gray-600">
            Feedback acadêmico instantâneo e sugestões claras para melhorar sua escrita
          </p>
          <div className="flex justify-center mb-0 md:mb-12">
            <a href="https://mystylus.ai/paper-grader/" className="no-underline">
              <button className="w-[280px] md:w-auto px-6 md:px-[3.75rem] py-3 md:py-[1.125rem] bg-[#232323] text-white rounded-full text-base md:text-[20px] font-aeonik font-medium">
                Melhorar meu trabalho
              </button>
            </a>
          </div>

          {/* Paper Analysis Component */}
          <div className="hidden sm:block">
            <PaperAnalysis />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PTHeroSection; 