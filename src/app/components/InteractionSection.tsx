import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

interface InteractionSectionProps {
  title?: string;
  description?: string;
  tags?: string[];
  ctaText?: string;
}

export const InteractionSection: React.FC<InteractionSectionProps> = ({
  title = "Interaja com a Mãe Organiza 24h por dia",
  description = "Pergunte o que quiser e como quiser sobre as suas finanças ou seus compromissos. Veja alguns exemplos:",
  tags = [
    "Recebi 10 mil reais de salário", "Quanto gastei hoje?", "Saldo do mês?",
    "Pergunte e registre o que quiser", "Paguei 30 reais de gasolina",
    "Recebi 10 mil reais de salário", "Quanto gastei hoje?", "Saldo do mês?",
    "Tenho 2 mil reais pro aluguel dia 22", "Quanto gastei esse mês?", "Quais lembretes eu tenho hoje?",
    "Paguei 100 reais no mercado", "Tenho 3 reuniões hoje?", "Gastei quanto em alimentação?",
    "Quanto tenho pra receber esse mês?"
  ],
  ctaText = "Quero Assinar"
}) => {
  return (
    <section className="py-24 text-center bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-gray-600 mb-12 text-lg">{description}</p>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {tags.map((tag, i) => (
            <span key={i} className="px-6 py-3 rounded-full border border-brand-200 text-gray-600 hover:border-brand-500 hover:text-brand-600 transition-colors cursor-default text-sm md:text-base">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <Button variant="gradient" size="lg">{ctaText} <ArrowRight className="ml-2 w-4 h-4" /></Button>
        </div>
      </div>
    </section>
  );
};
