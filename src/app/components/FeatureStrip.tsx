import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Check } from 'lucide-react';

interface FeatureStripProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  listItems?: string[];
  reversed?: boolean;
  ctaText?: string;
  colorClass?: string;
  isVideo?: boolean;
  showPlaceholder?: boolean;
}

export const FeatureStrip: React.FC<FeatureStripProps> = ({
  category,
  title,
  description,
  imageSrc,
  listItems = [],
  reversed = false,
  ctaText = "Começar Agora",
  colorClass = "text-brand-600",
  isVideo = false,
  showPlaceholder = false
}) => {
  return (
    <section className="py-20 md:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div>
               <h3 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 ${colorClass} border-b-4 border-black inline-block pb-1`}>
                  {category}
               </h3>
               <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {title}
               </h4>
               <p className="text-lg text-gray-600 leading-relaxed">
                  {description}
               </p>
            </div>

            {listItems.length > 0 && (
              <ul className="space-y-3">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`mt-1 p-0.5 rounded-full ${colorClass === 'text-brand-600' ? 'bg-brand-100' : 'bg-gray-100'}`}>
                       <Check size={14} className={colorClass === 'text-brand-600' ? 'text-brand-600' : 'text-gray-900'} strokeWidth={3} />
                    </span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <Button variant="gradient" className="shadow-xl">
               {ctaText} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Visual Content */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
               {showPlaceholder ? (
                  <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
                     <span className="text-gray-500 font-bold text-xl uppercase tracking-widest">[Foto Pendente]</span>
                  </div>
               ) : isVideo ? (
                  <div className="aspect-video w-full bg-gray-900 flex items-center justify-center text-white/50 relative group cursor-pointer">
                     <img src={imageSrc} alt={title} className="w-full h-full object-cover opacity-60" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                           <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <img 
                     src={imageSrc} 
                     alt={title} 
                     className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
               )}
            </div>
            
            {/* Decorative Dots */}
            <div className={`absolute -z-10 top-10 ${reversed ? 'left-10' : '-right-4'} grid grid-cols-4 gap-2 opacity-20`}>
               {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-brand-600 rounded-full"></div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};