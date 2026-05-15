import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


import logoColor from '../assets/GridStudio-color.png';
import logoBlanco from '../assets/GridStudio-blanco.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();


  const isDarkHeroPage = location.pathname === '/estudio-creativo';
  const useLightText = isDarkHeroPage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios Web', path: '/servicios-web' },
    { name: 'Estudio Creativo', path: '/estudio-creativo' },
    { name: 'Portafolio', path: '/portafolio' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5' }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img src={useLightText ? logoBlanco : logoColor} alt="Grid Studio Logo" className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"/>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left pb-1 
                  ${useLightText 
                    ? 'text-gray-300 hover:text-white after:bg-white' 
                    : 'text-gray-600 hover:text-gray-900 after:bg-gray-900'
                  }`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contacto" className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:-translate-y-0.5 ${
              useLightText
                ? 'bg-white text-gray-900 hover:bg-gray-200 hover:shadow-lg'
                : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
            }`}>
            Cotizar Proyecto
          </Link>
        </div>

        <button className={`md:hidden transition-colors ${useLightText ? 'text-white' : 'text-gray-900'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}>
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="block text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contacto" className="block w-full text-center bg-gray-900 text-white px-6 py-3 mt-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"onClick={() => setIsMobileMenuOpen(false)}>
              Cotizar Proyecto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;