import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

import logoBlanco from '../assets/GridStudio-blanco.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* Columna 1: Marca */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <img src={logoBlanco} alt="Grid Studio Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Impulsamos marcas con desarrollo web de alto rendimiento y diseño estratégico.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                {/* SVG de Instagram */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                {/* SVG de LinkedIn */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces*/}
          <div>
            <h4 className="text-white font-semibold mb-6">Explorar</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/servicios-web" className="hover:text-white transition-colors">Planes Web</Link></li>
              <li><Link to="/estudio-creativo" className="hover:text-white transition-colors">Estudio Creativo</Link></li>
              <li><Link to="/portafolio" className="hover:text-white transition-colors">Casos de Éxito</Link></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-white font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contacto" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Tiendas E-commerce</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Branding y Logos</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Producción Audiovisual</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-500 shrink-0" />
                <a href="mailto:gridstudio.dev@gmail.com" className="hover:text-white transition-colors">
                  gridstudio.dev@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 shrink-0" />
                <span>Santiago, Chile.<br/>Trabajamos de forma remota.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Grid Studio. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link to="/privacidad" className="hover:text-white transition-colors">Políticas de Privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;