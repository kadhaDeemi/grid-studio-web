import { useState } from 'react';
import { ArrowUpRight, Globe, PenTool, Camera, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';


import imgSTC from '../assets/Skill-Training-Center.png';
import imgMechada from '../assets/Mechada-Chilena.png';
import imgTeqMed from '../assets/TeqMed.jpeg';
import imgTerapia from '../assets/Terapia-Ocupacional.jpeg';

const Portafolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Página Web Gimnasio 'Skill Training Center'",
      category: "Desarrollo Web & UI/UX",
      type: "Diseño y Desarrollo Web",
      icon: <Globe className="w-5 h-5" />,
      image: imgSTC, 
      span: "md:col-span-2 md:row-span-2",
      description: "Rediseño integral enfocado en la conversión de nuevos socios. Se optimizó la velocidad de carga y se creó una interfaz agresiva y motivadora, ideal para el nicho fitness.",
      tools: ["React", "Tailwind CSS", "Figma"]
    },
    {
      id: 2,
      title: "Brochure corporativo 'TeqMed'",
      category: "Identidad Visual",
      type: "Diseño Gráfico Institucional",
      icon: <PenTool className="w-5 h-5" />,
      image: imgTeqMed,
      span: "md:col-span-1 md:row-span-1",
      description: "Diseño de material informativo para equipos médicos, priorizando la legibilidad, la seriedad institucional y la jerarquía visual de la información técnica.",
      tools: ["Adobe Illustrator", "Photoshop"]
    },
    {
      id: 3,
      title: "Diseño Publicitario Terapia Ocupacional",
      category: "Diseño Publicitario",
      type: "Diseño Gráfico",
      icon: <Camera className="w-5 h-5" />,
      image: imgTerapia,
      span: "md:col-span-1 md:row-span-1",
      description: "Creación de piezas gráficas para redes sociales enfocadas en servicios de salud mental y terapia ocupacional, utilizando colores que transmiten calma y profesionalismo.",
      tools: ["Figma", "Photoshop"]
    },
    {
      id: 4,
      title: "E-commerce 'Sandwichería Mechada Chilena'",
      category: "Desarrollo Web",
      type: "Diseño y Desarrollo Web",
      icon: <Sparkles className="w-5 h-5" />,
      image: imgMechada,
      span: "md:col-span-2 md:row-span-1",
      description: "Diseño y desarrollo de una plataforma de pedidos online ágil. Experiencia de usuario simplificada para que el cliente pueda armar su pedido en menos de 3 clics.",
      tools: ["React", "Node.js", "Tailwind CSS"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="portafolio">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                Casos de Éxito
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
              Nuestro trabajo <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                habla por sí solo.
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explora una selección de proyectos conceptuales y soluciones reales que demuestran nuestro estándar de calidad y visión tecnológica.
            </p>
          </div>
          
          <Link to="/portafolio" 
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 hover:text-blue-600 transition-all">
            Ver todos los proyectos <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Grilla Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {projects.map((project) => (
            <button key={project.id} onClick={() => setSelectedProject(project)}
              className={`group relative rounded-[2rem] overflow-hidden block w-full text-left ${project.span} shadow-sm hover:shadow-xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50`}>
              <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: project.image ? `url(${project.image})` : 'linear-gradient(to bottom right, #4f46e5, #ec4899)'}}>  
                </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90">
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                    {project.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/80 font-semibold text-sm mb-2 tracking-wide uppercase flex items-center gap-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Botón móvil */}
        <div className="mt-10 md:hidden flex justify-center">
          <Link to="/portafolio" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:text-blue-600 transition-all">
            Ver todos los proyectos <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/*MODAL DE DETALLE INTERACTIVO */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={() => setSelectedProject(null)}>
            </div>
            
            {/* Contenido del Modal */}
            <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
              
              {/* Lado Izquierdo: Imagen */}
              <div className="md:w-3/5 h-64 md:h-auto bg-gray-100 relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover"/>
                <button onClick={() => setSelectedProject(null)} className="md:hidden absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg">
                  <X className="w-5 h-5 text-gray-900" />
                </button>
              </div>

              {/* Lado Derecho: Info */}
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col">
                <button onClick={() => setSelectedProject(null)} className="hidden md:flex absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <X className="w-5 h-5 text-gray-900" />
                </button>

                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 inline-block">
                  {selectedProject.type}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-10">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase">Herramientas utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools?.map(tool => (
                      <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg border border-gray-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón que lleva a Contacto */}
                <Link to="/contacto" className="mt-auto w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group"
                  onClick={() => setSelectedProject(null)}>
                  Cotizar proyecto similar
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portafolio;