import React from 'react';
import { Button } from './ui/Button';
import { Calendar, RefreshCw } from 'lucide-react';

export const Integration: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 text-center">
        
        <div className="flex items-center justify-center gap-6 mb-8">
           <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center p-3">
              <div className="w-full h-full bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">M</div>
           </div>
           <div className="text-gray-400 animate-spin-slow">
              <RefreshCw size={32} />
           </div>
           <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center p-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" alt="Google Agenda" className="w-full h-full" />
           </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
           Integração com <span className="text-gray-500">Google Agenda</span>
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
           Agora você pode integrar seus compromissos automaticamente com o Google Agenda. A Mãe Organiza será sincronizada em tempo real com sua agenda pessoal ou profissional.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
           <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-200 shadow-sm">Sincronização automática</span>
           <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-200 shadow-sm">Receba lembretes no WhatsApp</span>
           <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-200 shadow-sm">Produtividade no seu dia a dia</span>
        </div>

        <Button variant="gradient">
           Quero Utilizar <Calendar className="ml-2 w-4 h-4" />
        </Button>

      </div>
    </section>
  );
};