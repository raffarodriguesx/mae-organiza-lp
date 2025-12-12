import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  reverse?: boolean;
  highlight?: string;
  badge?: string;
  featuresList?: string[];
  colorTheme?: 'brand' | 'accent';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
