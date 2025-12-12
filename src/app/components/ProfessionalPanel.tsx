import React from 'react';

interface ProfessionalPanelProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export const ProfessionalPanel: React.FC<ProfessionalPanelProps> = ({
  title = "Painel Profissional",
  description = "Sem perder tempo com cadastros — sua assessora faz tudo por você no WhatsApp, mas você pode visualizar tudo em um painel completo.",
  imageSrc = "https://cdn.dribbble.com/users/393235/screenshots/16362540/media/f5777a83d47c20c092650f9f1b40974f.jpg?resize=1200x900&vertical=center",
  features = [
    { title: "Gráficos de fluxo", description: "Visualize para onde seu dinheiro está indo." },
    { title: "Organização automática", description: "Categorias criadas pela IA." },
    { title: "Prático e acessível", description: "Acesse do computador ou celular." }
  ]
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
          <img src={imageSrc} alt="Painel Dashboard" className="w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
