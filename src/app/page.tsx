import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { Integration } from './components/Integration';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { SectionTitle } from './components/ui/SectionTitle';
import { ProfessionalPanel } from './components/ProfessionalPanel';
import { InteractionSection } from './components/InteractionSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      
      <Hero />

      {/* Feature 1: Financeiro */}
      <div id="fluxo">
        <FeatureStrip 
          category="Financeiro"
          title="Fluxo.IA controla suas finanças direto no WhatsApp"
          description="Envie mensagens como 'gastei 50 no mercado' ou 'recebi 2 mil de salário', e ela registra e categoriza automaticamente. Você recebe lembretes, gráficos e relatórios inteligentes para acompanhar cada gasto e receita sem complicação."
          imageSrc="https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          listItems={[
             "Fácil, prático e 100% no WhatsApp",
             "Para você ter o controle do seu dinheiro na palma da mão",
             "Gráficos de fluxo de caixa automáticos"
          ]}
          ctaText="Contratar Agora"
          reversed={false}
          colorClass="text-brand-600"
        />
      </div>

      {/* Feature 2: Compromissos */}
      <div id="maia">
        <FeatureStrip 
          category="Compromissos"
          title="Maia.IA organiza sua agenda direto no WhatsApp"
          description="Envie mensagens como 'reunião amanhã às 14h' ou 'consulta dia 20', e ela registra, categoriza e agenda automaticamente. Você recebe lembretes, resumos diários e relatórios claros para manter sua rotina sob controle."
          imageSrc="https://images.unsplash.com/photo-1512428559087-560fa5ce7d5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          listItems={[
             "Simples, rápido e sempre à mão",
             "Para você nunca mais perder um compromisso",
             "Suporte emocional quando você precisa"
          ]}
          ctaText="Contratar Agora"
          reversed={true}
          colorClass="text-gray-900"
          isVideo={true}
        />
      </div>

      {/* Feature 3: WhatsApp Registration */}
      <FeatureStrip 
         category="Praticidade"
         title="Registre tudo no Whatsapp"
         description="Envie uma mensagem e nossa assistente lança tudo automaticamente. Texto ou áudio, você escolhe."
         imageSrc="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
         listItems={[
            "Texto ou áudio, você escolhe",
            "Categorização inteligente",
            "Rápido, prático e sem complicação"
         ]}
         reversed={false}
         colorClass="text-gray-900"
      />

      <ProfessionalPanel />

      {/* Feature 5: Sharing */}
      <FeatureStrip 
         category="Família"
         title="Compartilhe sua conta com quem quiser"
         description="Família ou empresa, todos podem registrar pelo WhatsApp. O controle financeiro e de agenda pode ser feito em conjunto."
         imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
         listItems={[
            "Usuários ilimitados",
            "Ideal para uso compartilhado",
            "Controle financeiro em conjunto"
         ]}
         reversed={true}
         colorClass="text-gray-900"
      />

      {/* Feature 6: Categories */}
      <FeatureStrip 
         category="Personalização"
         title="Categorias personalizadas"
         description="Use as que já vêm prontas ou crie quantas quiser. A Mãe Organiza aprende com você."
         imageSrc="https://cdn.dribbble.com/users/418188/screenshots/16147185/media/311867c4b4d662df94916a0319451995.png?resize=1200x900&vertical=center"
         listItems={[
            "Categorias ilimitadas",
            "Relatórios por categoria no WhatsApp"
         ]}
         reversed={false}
         colorClass="text-gray-900"
      />

      {/* Feature 7: Reminders */}
      <FeatureStrip 
         category="Agenda"
         title="Lembretes diários via WhatsApp"
         description="Sua assessora te lembra dos compromissos e contas — todo dia de manhã e 30 minutos antes de cada evento."
         imageSrc="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
         listItems={[
            "Lembretes ilimitados",
            "Compromissos e afazeres",
            "Contas a pagar e a receber"
         ]}
         reversed={true}
         colorClass="text-gray-900"
         isVideo={true}
      />

      <Integration />

      <InteractionSection />

      <div className="bg-gray-50 border-t border-gray-100">
         <SectionTitle title="Clientes que transformaram suas vidas" centered={true} description="Veja como a Mãe Organiza está ajudando pessoas reais." />
         <Testimonials />
      </div>

      <Stats />

      <Pricing />

      <FAQ />

      <Footer />
    </div>
  );
}
