import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, ShieldCheck, Zap, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-12 lg:pt-40 lg:pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        
        <p className="text-brand-600 font-semibold mb-4 tracking-wide text-sm md:text-base animate-fade-in-up">
          Você ainda está tentando lembrar tudo de cabeça ou não sabe pra onde está indo seu dinheiro?
        </p>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
          Tenha uma <span className="text-brand-600">aliada pessoal</span><br />
          trabalhando 24 horas por dia pra você
        </h1>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-xs md:text-sm font-medium text-gray-600">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-yellow-100 rounded text-yellow-600"><ShieldCheck size={16} /></div>
            Criptografia de Ponta a Ponta
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1 bg-green-100 rounded text-green-600"><Zap size={16} /></div>
            99.9% de Precisão
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1 bg-blue-100 rounded text-blue-600"><MessageSquare size={16} /></div>
            Tudo pelo WhatsApp
          </div>
        </div>

        <Button variant="gradient" size="lg" className="mb-16">
          Quero ter uma aliada agora
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        {/* Mockups Visual */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex justify-center items-end gap-4 md:gap-8 translate-y-10">
            {/* Phone 1 (Left - Financeiro) */}
            <div className="hidden md:block w-64 h-[500px] bg-gray-900 rounded-[2.5rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform -rotate-6 translate-y-12 z-10">
              <img src="/mockup-1.jpeg" alt="Financeiro WhatsApp" className="w-full h-full object-cover" />
            </div>

            {/* Phone 2 (Center - Main) */}
            <div className="w-72 md:w-80 h-[550px] md:h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden z-20 relative">
               <img src="/mockup-2.jpeg" alt="Maia WhatsApp" className="w-full h-full object-cover" />
            </div>

            {/* Phone 3 (Right - Insights) */}
            <div className="hidden md:block w-64 h-[500px] bg-gray-900 rounded-[2.5rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform rotate-6 translate-y-12 z-10">
               <img src="/mockup-3.jpeg" alt="Insights WhatsApp" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Pink Band */}
      <div className="bg-brand-600 py-12 md:py-16 mt-20 relative transform -skew-y-2 origin-left scale-110">
         <div className="transform skew-y-2 text-center text-white px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2">Sua vida organizada.</h2>
            <div className="inline-block border-2 border-white rounded-full px-6 py-2 text-xl md:text-3xl font-bold mt-2 font-handwriting">
               Sem esforço.
            </div>
            <p className="mt-6 max-w-2xl mx-auto text-brand-100 text-sm md:text-base font-medium">
               Já se perdeu no meio de tarefas e despesas? O Mãe Organiza resolve isso: organização financeira e gestão de compromissos, tudo de forma simples e direta pelo WhatsApp.
            </p>
         </div>
      </div>
    </section>
  );
};