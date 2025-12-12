import React, { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { FaqItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData: FaqItem[] = [
  {
    question: "Como funciona o Mãe Organiza?",
    answer: "O Mãe Organiza funciona diretamente no seu WhatsApp. Você envia mensagens de texto ou áudio, e nossa inteligência artificial processa tudo, seja para organizar suas finanças (Fluxo) ou para te dar suporte emocional (Maia)."
  },
  {
    question: "Meus dados financeiros estão seguros?",
    answer: "Absolutamente. Utilizamos criptografia de ponta a ponta. Seus dados são anônimos para nossa equipe e usados apenas para gerar seus relatórios e insights pessoais."
  },
  {
    question: "Preciso ter conhecimentos técnicos?",
    answer: "Não! Se você sabe usar o WhatsApp, você sabe usar o Mãe Organiza. É como conversar com uma amiga que anota tudo para você."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim. A assinatura é mensal e você pode cancelar quando quiser, sem multas e sem complicações."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <SectionTitle 
          title="Perguntas Frequentes" 
          subtitle="Tire suas dúvidas"
        />

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-colors ${openIndex === index ? 'border-brand-200 bg-brand-50/30' : 'border-gray-200'}`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-medium ${openIndex === index ? 'text-brand-700' : 'text-gray-700'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-600" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};