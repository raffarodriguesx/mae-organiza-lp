// Em: tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Semântica - Nossa Fonte da Verdade
        background: '#F8F9FA', // Fundo principal da aplicação (cinza bem claro)
        foreground: '#1E1E1E', // Cor de texto principal (quase preto)
        baselight: '#A98BDF', // Tom claro do roxo para destaques sutis
        
        card: '#FFFFFF', // Cor de fundo para componentes como cards
        'card-foreground': '#1E1E1E',

        primary: {
          DEFAULT: '#5E496F', // Roxo principal para botões, links e destaques
          foreground: '#FFFFFF', // Texto para usar em cima da cor primária
          light: '#A98BDF', // Tom mais claro para hovers ou elementos secundários
        },

        secondary: {
          DEFAULT: '#5E496F', // Roxo mais escuro/saturado para outros elementos
          foreground: '#FFFFFF',
        },

        muted: {
          DEFAULT: '#E9ECEF', // Cor para bordas, divisórias ou fundos sutis
          foreground: '#6C757D', // Cor para textos secundários, placeholders
        },
      },
      fontFamily: {
        heading: ['var(--font-figtree)', 'sans-serif'],
        body: ['var(--font-sora)', 'sans-serif'],
      },
      // Habilitando o backdrop-blur para o efeito de vidro
      backdropBlur: {
        'xl': '24px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
  ],
};
export default config;
