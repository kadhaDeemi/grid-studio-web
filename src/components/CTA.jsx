import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-screen filter blur-[80px] -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          ¿Listo para darle a tu negocio el nivel que merece?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Agenda una asesoría gratuita hoy mismo. Analizamos tu idea y te proponemos la mejor estructura digital para hacerla realidad.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contacto" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg shadow-white/10">
            <MessageCircle className="w-5 h-5" />
            Hablemos por WhatsApp
          </Link>
          <Link to="/portafolio" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-gray-700 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors">
            Revisar portafolio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;