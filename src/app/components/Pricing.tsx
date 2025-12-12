import React from 'react';
import { Button } from './ui/Button';
import { Check, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Conheça nossos planos</h2>
            <p className="text-gray-600">Organização financeira e pessoal direto no WhatsApp 24h por dia.</p>
         </div>

         <div className="max-w-md mx-auto bg-gray-900 rounded-[2rem] overflow-hidden text-white shadow-2xl relative border-4 border-gray-800">
            {/* Badge */}
            <div className="absolute top-6 right-6">
               <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  Oportunidade
               </span>
            </div>

            <div className="p-8 md:p-12">
               <div className="flex items-center gap-2 mb-2 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                  Organize-se agora
               </div>
               
               <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-2xl font-light text-gray-400">R$</span>
                  <span className="text-6xl font-black text-white">29,90</span>
                  <span className="text-xl text-gray-400">/mês</span>
               </div>
               
               <p className="text-sm text-gray-400 mb-8 border-l-2 border-brand-600 pl-4">
                  12 x R$ 29,90<br/>
                  Economia de 49% - Somente esse mês plano completo com desconto.
               </p>

               <div className="space-y-4 mb-10">
                  {[
                     "Registro de compromissos e afazeres",
                     "Registro de ganhos e receitas",
                     "Transações recorrentes",
                     "Pergunte o que quiser saber",
                     "Lembretes ilimitados",
                     "Painel para acompanhamento e relatórios",
                     "Consulte tudo pelo WhatsApp",
                     "Categorias ilimitadas"
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <Check size={16} className="text-brand-500 shrink-0" />
                        {item}
                     </div>
                  ))}
               </div>

               <Button fullWidth className="bg-green-600 hover:bg-green-700 text-white border-0 py-4 text-lg shadow-green-900/50">
                  Garantir já
               </Button>
               <p className="text-center text-[10px] text-gray-500 mt-3">Preço por tempo limitado!</p>
            </div>
         </div>
         
         <div className="text-center mt-12 flex justify-center items-center gap-2 text-gray-500 text-sm">
             <ShieldCheck size={18} />
             <span>Garantia de 7 dias ou seu dinheiro de volta</span>
         </div>
      </div>
    </section>
  );
};