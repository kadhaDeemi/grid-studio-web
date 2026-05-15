import { PenTool, Camera, LayoutTemplate, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CreativeStudio = () => {
  return (
    <section className="py-24 bg-white" id="estudio-creativo">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:flex md:justify-between md:items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
              El Estudio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Creativo.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Diseño estratégico, producción audiovisual y comunicación gráfica. 
              Elevamos la percepción de tu marca con una estética impecable y coherente.
            </p>
          </div>
          <Link to="/portafolio" className="hidden md:inline-flex items-center gap-2 font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
            Ver portafolio completo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

          <div className="md:col-span-2 bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-200 flex flex-col justify-between group hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
            <div className="mb-8">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <PenTool className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Branding y Estrategia</h3>
              <p className="text-gray-600 max-w-md">
                Diseño de marcas desde cero. Creamos logos, paletas de colores, manuales de estilo y brindamos consultoría estética para mantener el profesionalismo de tu negocio.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Creación de Identidad", "Logos", "Manual de Marca", "Consultoría"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-600 border border-gray-200 shadow-sm group-hover:border-blue-100 group-hover:text-blue-700 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 bg-gray-900 rounded-[2rem] p-8 md:p-10 border border-gray-800 flex flex-col justify-between group relative overflow-hidden hover:border-gray-700 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-600/20 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-cyan-500/30"></div>
            
            <div className="relative z-10 mb-8">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Contenido Audiovisual</h3>
              <p className="text-gray-400">
                Fotografía profesional de productos, grabación corporativa, y edición de reels para redes sociales y plataformas e-commerce.
              </p>
            </div>
            
            <div className="relative z-10">
              <Link to="/contacto" className="inline-flex items-center justify-between w-full p-4 bg-white/5 hover:bg-cyan-500/20 border border-transparent hover:border-cyan-500/30 rounded-xl text-white font-medium transition-all backdrop-blur-md group/btn">
                Cotizar Producción
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover/btn:text-cyan-400 transition-colors" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-200 flex flex-col md:flex-row gap-8 md:items-center justify-between group hover:border-purple-200 hover:shadow-lg hover:shadow-purple-900/5 transition-all duration-300">
            <div className="flex-1 max-w-2xl">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl border border-purple-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <LayoutTemplate className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Diseño Impreso, Corporativo y Eventos</h3>
              <p className="text-gray-600">
                Llevamos tu identidad al mundo físico garantizando la máxima resolución. Desde tarjetas de presentación hasta la producción gráfica para grandes ferias.
              </p>
            </div>
            
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:pl-12 md:border-l border-gray-200 group-hover:border-purple-100 transition-colors">
              {[
                "Tarjetas y Volantes", 
                "Gigantografías", 
                "Packaging (Envases)", 
                "Merchandising",
                "Gráficas para Stands",
                "Adaptación de Formatos"
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full shadow-sm shadow-purple-500/50 group-hover:scale-125 transition-transform"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 md:hidden">
          <Link to="/portafolio" className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-xl font-bold">
            Ver portafolio completo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CreativeStudio;