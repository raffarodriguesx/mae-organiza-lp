import React from 'react';
import { FeatureProps } from '../types';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const FeatureSection: React.FC<FeatureProps> = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  reverse = false,
  highlight,
  badge,
  featuresList,
  colorTheme = 'brand'
}) => {
  const themeColors = {
    brand: {
      bg: 'bg-brand-50',
      text: 'text-brand-600',
      badge: 'bg-brand-100 text-brand-700',
      iconBg: 'bg-brand-100',
    },
    accent: {
      bg: 'bg-accent-50',
      text: 'text-accent-600',
      badge: 'bg-accent-100 text-accent-600',
      iconBg: 'bg-accent-100',
    }
  };

  const theme = themeColors[colorTheme];

  return (
    <div className={`py-16 md:py-24 ${reverse ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-3 rounded-2xl ${theme.iconBg} ${theme.text}`}>
                <Icon size={28} />
              </div>
              {badge && (
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${theme.badge}`}>
                  {badge}
                </span>
              )}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {title} <span className={theme.text}>{highlight}</span>
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            {featuresList && (
              <ul className="space-y-3 pt-2">
                {featuresList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className={`w-5 h-5 mt-1 shrink-0 ${theme.text}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="pt-4">
               <Button variant={colorTheme === 'brand' ? 'primary' : 'outline'}>
                  Saiba mais
               </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 w-full relative group">
             {/* Abstract background blobs */}
            <div className={`absolute -inset-4 rounded-3xl opacity-30 blur-2xl transition-all duration-500 group-hover:opacity-50 ${colorTheme === 'brand' ? 'bg-brand-200' : 'bg-accent-200'}`}></div>
            
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-square">
               {/* Using placeholder images that fit the "app/dashboard" vibe */}
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating UI Element Mockup */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-100 animate-pulse-slow">
                 <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.bg}`}>
                        <Icon size={20} className={theme.text} />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase">Mensagem de {badge}</p>
                        <p className="text-sm font-medium text-gray-800">Estou aqui com você. Vamos resolver isso juntas?</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};