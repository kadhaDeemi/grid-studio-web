import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#f9fafb]">
      
      <div className="absolute inset-0 z-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}>
        </div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Etiqueta superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Agencia Digital 360</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
          Estructuras <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">sólidas.</span> <br />
          Diseño visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">preciso.</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Construimos tu presencia online bloque a bloque. Desde desarrollo web de alto rendimiento hasta estrategias de branding y contenido audiovisual.
        </p>

        {/* Botones de Acción*/}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/servicios-web"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 text-white font-medium text-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
            Ver Planes Web
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/estudio-creativo"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-gray-900 font-medium text-lg border border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-300 flex items-center justify-center">
            Explorar Estudio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;