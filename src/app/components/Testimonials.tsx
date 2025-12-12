import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Roberta Lohn",
    role: "Mãe de 2",
    content: "Consegui pagar minhas dívidas e ainda sobra dinheiro apenas controlando as despesas. Simples, visual e direto ao ponto.",
    rating: 5,
    image: "https://picsum.photos/seed/roberta/100/100"
  },
  {
    id: 2,
    name: "Beatriz Silva",
    role: "Mãe de primeira viagem",
    content: "Mudou minha vida financeira! Mas o que eu mais amo é a Maia. Ela me acalma nas madrugadas difíceis.",
    rating: 5,
    image: "https://picsum.photos/seed/beatriz/100/100"
  },
  {
    id: 3,
    name: "Leonardo da Costa",
    role: "Pai participativo",
    content: "Me ajudou a lembrar de tudo e ser organizado sem muito trabalho. O painel é muito prático.",
    rating: 5,
    image: "https://picsum.photos/seed/leo/100/100"
  },
  {
    id: 4,
    name: "Luisa do Valle",
    role: "Empresária e Mãe",
    content: "Vale cada centavo. Estou viciada em ver as coisas se organizando sozinhas pelo WhatsApp.",
    rating: 5,
    image: "https://picsum.photos/seed/luisa/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Quem usa, se apaixona" 
          subtitle="Depoimentos"
          description="Veja como o Mãe Organiza está ajudando pessoas reais a recuperar a paz mental e financeira."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed min-h-[80px]">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-10 h-10 rounded-full object-cover" 
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};