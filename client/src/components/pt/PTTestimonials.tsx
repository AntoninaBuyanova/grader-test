import React from 'react';
import { Star } from 'lucide-react';
import { SmartFeedbackIcon, OneClickFixesIcon, CleanDraftIcon } from '../icons/Logo';

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}> = ({ quote, name, title, avatarUrl }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
        ))}
      </div>
      <blockquote className="mb-6">
        <p className="text-slate-300 italic">{quote}</p>
      </blockquote>
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full mr-4" src={avatarUrl} alt={`${name} avatar`} />
        <div>
          <p className="font-medium text-white">{name}</p>
          <p className="text-sm text-slate-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-row md:flex-col items-start text-left gap-4">
    <div className="shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-base font-medium mb-1 text-[#232323]">{title}</h3>
      <p className="text-sm text-[#666666] font-aeonik">{description}</p>
    </div>
  </div>
);

const PTTestimonials: React.FC = () => {
  return (
    <section className="pt-0 lg:pt-20 pb-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-16">
            {/* Heading */}
            <h2 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.2] lg:leading-[3.75rem] mb-12 lg:mb-0 text-left text-[#232323] max-w-[20ch] lg:max-w-none">
              Seu kit de
              <span className="block">ferramentas para um trabalho perfeito</span>
            </h2>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-12 lg:grid-cols-3 lg:w-[85%] w-full justify-items-start">
              <FeatureItem
                icon={<SmartFeedbackIcon className="w-8 h-8" />}
                title="Feedback inteligente por seção"
                description="Obtenha insights detalhados para cada parte do seu trabalho"
              />
              <FeatureItem
                icon={<OneClickFixesIcon className="w-8 h-8" />}
                title="Localizador de citações"
                description="Enriqueça seu trabalho com citações em linha"
              />
              <FeatureItem
                icon={<CleanDraftIcon className="w-8 h-8" />}
                title="Correções com um clique"
                description="Aplique correções claras instantaneamente, direto no editor"
              />
            </div>
          </div>

          {/* Editor Demo */}
          <div className="w-full">
            <img 
              src="/Section.png"
              alt="Interface de análise de seção"
              className="w-full h-auto rounded-[20px]"
            />
          </div>

          <div className="hidden sm:block absolute inset-0 -z-10 opacity-10">
            <img 
              src="/Section.png" 
              alt="Фон секции отзывов" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PTTestimonials; 