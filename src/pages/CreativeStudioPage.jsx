import { Palette, LayoutTemplate, Layers, Sparkles, MonitorPlay } from 'lucide-react';
import CTA from '../components/CTA';

const CreativeStudioPage = () => {
  const creativeServices = [
    {
      icon: <Palette className="w-8 h-8 text-blue-500" />,
      title: "Branding e Identidad",
      description: "Tu marca es mucho más que un logo. Construimos universos visuales que conectan emocionalmente con tu audiencia y te diferencian de la competencia.",
      points: ["Diseño de Logotipos", "Manual de Marca corporativo", "Paletas de colores y tipografías", "Rediseño (Rebranding)"],
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      icon: <MonitorPlay className="w-8 h-8 text-cyan-500" />,
      title: "Producción Audiovisual",
      description: "En la era digital, el contenido es el rey. Producimos material fotográfico y en video de alta gama diseñado específicamente para captar la atención en redes sociales.",
      points: ["Fotografía de producto e-commerce", "Edición de Reels y TikToks", "Videos corporativos", "Retoque fotográfico digital"],
      bg: "bg-cyan-50",
      border: "border-cyan-100"
    },
    {
      icon: <LayoutTemplate className="w-8 h-8 text-purple-500" />,
      title: "Diseño Impreso y Eventos",
      description: "Llevamos la experiencia de tu marca al mundo físico garantizando que los colores, la resolución y los materiales reflejen la máxima calidad.",
      points: ["Packaging (Envases y etiquetas)", "Tarjetas de presentación", "Gigantografías y pendones", "Gráficas para stands y ferias"],
      bg: "bg-purple-50",
      border: "border-purple-100"
    }
  ];

  const processSteps = [
    { num: "01", name: "Briefing", desc: "Nos reunimos para entender la esencia de tu marca, tus valores y a quién quieres llegar." },
    { num: "02", name: "Moodboard", desc: "Creamos tableros de inspiración visual para alinear expectativas antes de diseñar." },
    { num: "03", name: "Producción", desc: "Diseñamos, fotografiamos o grabamos, cuidando cada pixel y cada detalle." },
    { num: "04", name: "Entrega Final", desc: "Te entregamos todos los archivos maestros y formatos optimizados para su uso inmediato." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-40 pb-24 bg-gray-950 text-white relative overflow-hidden">
        {/* Luces de fondo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                Dirección de Arte
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              Diseño que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">cautiva.</span> <br />
              Marcas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">perduran.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              En Grid Studio no solo hacemos que las cosas se vean bonitas. Creamos sistemas visuales estratégicos que elevan el valor percibido de tus productos y servicios.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Nuestras Disciplinas</h2>
            <p className="text-lg text-gray-600">Un ecosistema completo de servicios visuales para cubrir todas las necesidades de comunicación de tu empresa.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {creativeServices.map((service, index) => (
              <div key={index} className={`p-10 rounded-[2.5rem] border ${service.border} ${service.bg} transition-transform hover:-translate-y-2 duration-300`}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Proceso Creativo */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">El Proceso Creativo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <span className="text-2xl font-black text-gray-300 group-hover:text-purple-600 transition-colors">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.name}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*CTA*/}
      <CTA />

    </div>
  );
};

export default CreativeStudioPage;