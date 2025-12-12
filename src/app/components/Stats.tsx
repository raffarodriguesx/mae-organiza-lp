import React from "react";

export const Stats: React.FC = () => {
  const stats = [
    {
      label: "Processamento em segundos",
      value: "REGISTROS PROCESSADOS",
      number: "+150.2K",
      desc: "Categorizadas Automaticamente",
      color: "text-brand-500",
    },
    {
      label: "Crescendo a cada dia",
      value: "VALOR GERENCIADO",
      number: "+163.7 Milhões",
      desc: "Em finanças organizadas",
      color: "text-brand-600",
    },
    {
      label: "Lembretes Ilimitados",
      value: "COMPROMISSOS LEMBRADOS",
      number: "+87.3K",
      desc: "De compromissos organizados",
      color: "text-brand-500",
    },
    {
      label: "Tecnologia de ponta",
      value: "PRECISÃO DA IA",
      number: "99.9%",
      desc: "Na categorização e registro automático",
      color: "text-brand-600",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
          Números que Comprovam
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <p
                className={`text-xs font-bold uppercase tracking-wider mb-2 ${stat.color}`}
              >
                {stat.label}
              </p>
              <p className="text-xs text-gray-400 mb-4">{stat.value}</p>
              <p
                className={`text-4xl lg:text-5xl font-black mb-4 ${stat.color}`}
              >
                {stat.number}
              </p>
              <p className="text-sm text-gray-500 font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-gray-400">
          92% dos usuários avaliaram como &quot;excelente&quot; o
          maeorganiza.com
          <br />
          Baseado em dados reais dos últimos 3 meses
        </p>
      </div>
    </section>
  );
};
