import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Maia.IA', href: '#maia' },
    { name: 'Fluxo.IA', href: '#fluxo' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-xl text-white">
                <HeartHandshake size={24} />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Mãe<span className="text-brand-600">Organiza</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-brand-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm">Começar Agora</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-brand-600 font-medium py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <Button fullWidth onClick={() => setIsMobileMenuOpen(false)}>Começar Agora</Button>
        </div>
      )}
    </header>
  );
};