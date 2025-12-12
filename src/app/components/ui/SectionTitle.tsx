import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className={`inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full ${light ? 'bg-white/20 text-white' : 'bg-brand-100 text-brand-700'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-brand-100' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};