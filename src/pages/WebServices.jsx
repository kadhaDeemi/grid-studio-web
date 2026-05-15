import { Code2, Smartphone, Zap, Search, LayoutTemplate } from 'lucide-react';
import WebPlans from '../components/WebPlans';
import CTA from '../components/CTA';

const WebServices = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Velocidad Extrema",
      description: "Optimizamos cada imagen y línea de código para que tu web cargue en milisegundos, reduciendo la tasa de rebote."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: "Diseño Responsive Puro",
      description: "Tu sitio se verá increíble y funcionará perfectamente en cualquier dispositivo: celulares, tablets y monitores ultra anchos."
    },
    {
      icon: <Search className="w-6 h-6 text-green-500" />,
      title: "Optimización SEO",
      description: "Estructuramos la web siguiendo las reglas de Google para que tus clientes te encuentren orgánicamente más rápido."
    },
    {
      icon: <Code2 className="w-6 h-6 text-purple-500" />,
      title: "Código Limpio",
      description: "No usamos plantillas pesadas. Construimos con tecnologías modernas (React, Tailwind) para un rendimiento superior."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Descubrimiento",
      description: "Analizamos tu negocio, competencia y objetivos para definir la estructura ideal del sitio."
    },
    {
      number: "02",
      title: "Diseño UI/UX",
      description: "Creamos prototipos visuales para que apruebes la estética antes de escribir una sola línea de código."
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Programamos tu sitio con las últimas tecnologías, asegurando velocidad y seguridad."
    },
    {
      number: "04",
      title: "Lanzamiento",
      description: "Conectamos tu dominio, configuramos el certificado SSL y publicamos tu web al mundo."
    }
  ];

  return (
    <div className="min-h-screen pt-32 bg-gray-50">
      
      {/* Hero de Servicios */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <LayoutTemplate className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
              Ingeniería Web
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-8">
            Desarrollo web que <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              genera resultados.
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tu página web es la sede digital de tu negocio. No basta con que sea bonita; debe ser rápida, segura y estar diseñada para convertir visitantes en clientes.
          </p>
        </div>
      </section>

      {/* Características*/}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="bg-gray-900 text-white py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestro Método</h2>
            <p className="text-gray-400 max-w-2xl text-lg">Un proceso transparente y estructurado para que sepas exactamente en qué etapa está tu proyecto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gray-800 z-0"></div>

            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="w-16 h-16 bg-gray-950 border-2 border-gray-800 rounded-2xl flex items-center justify-center text-xl font-black text-cyan-400 mb-6 shadow-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Planes Web*/}
      <div className="pb-12">
        <div className="text-center mb-[-4rem] relative z-10">
          <h2 className="text-3xl font-bold text-gray-900">Elige el plan ideal para ti</h2>
        </div>
        <WebPlans />
      </div>
      <CTA />
    </div>
  );
};

export default WebServices;