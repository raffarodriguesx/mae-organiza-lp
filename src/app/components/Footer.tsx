import React from 'react';
import { HeartHandshake, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from './ui/Button';

interface FooterProps {
  companyName?: string;
  description?: string;
  contactText?: string;
  whatsappText?: string;
}

export const Footer: React.FC<FooterProps> = ({
  companyName = "Mãe Organiza",
  description = "Uma empresa do grupo Tittanium INC. Fundada pelo empresário e investidor Felipe Titto. Uma empresa sólida, moderna e comprometida em transformar a organização pessoal e financeira.",
  contactText = "Tire suas dúvidas, faça um orçamento ou receba um atendimento personalizado.",
  whatsappText = "Conversar no WhatsApp"
}) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="bg-brand-600 text-white p-2 rounded-lg">
            <HeartHandshake size={24} />
          </div>
          <span className="text-2xl font-bold text-gray-900">{companyName}</span>
        </div>
        
        <p className="max-w-md mx-auto text-gray-500 mb-8">
          {description}
        </p>

        <div className="bg-green-50 rounded-xl p-8 max-w-2xl mx-auto mb-12">
          <h4 className="font-bold text-gray-900 mb-2">Fale com nossa equipe</h4>
          <p className="text-sm text-gray-600 mb-6">{contactText}</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white border-0">
            {whatsappText}
          </Button>
        </div>

        <div className="flex justify-center gap-6 text-gray-400 mb-8">
          <Instagram className="hover:text-brand-600 cursor-pointer" />
          <Facebook className="hover:text-brand-600 cursor-pointer" />
          <Twitter className="hover:text-brand-600 cursor-pointer" />
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {companyName}. Todos os direitos reservados. <br/>
          contato@maeorganiza.com
        </p>
      </div>
    </footer>
  );
};
