import { useState } from 'react';
import { ArrowUpRight, Globe, PenTool, Camera, Sparkles, LayoutGrid, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import imgSTC from '../assets/Skill-Training-Center.png';
import imgMechada from '../assets/Mechada-Chilena.png';
import imgTeqMed from '../assets/TeqMed.jpeg';
import imgTerapia from '../assets/Terapia-Ocupacional.jpeg';
import imgSDC from '../assets/SDC-Producciones.png';
import imgTo from '../assets/Toscarlet.png';
import imgJac from '../assets/Jac.jpeg';
import imgComunnityQ from '../assets/ComunnityQmed.png';
import imgDog from '../assets/DogTrainer-AI.png';


const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['Todos', 'Desarrollo Web', 'Branding', 'Identidad Visual', 'Diseño Publicitario', 'Community Manager'];
  const projects = [
    {
      id: 1,
      title: "Página Web Gimnasio 'Skill Training Center'",
      category: "Desarrollo Web", 
      type: "Diseño y Desarrollo Web",
      icon: <Sparkles className="w-5 h-5" />,
      image: imgSTC,
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
      description: "Creación de piezas gráficas para redes sociales enfocadas en servicios de salud mental y terapia ocupacional, utilizando colores que transmiten calma y profesionalismo.",
      tools: ["Figma", "Photoshop", "Canva"]
    },
    {
      id: 4,
      title: "E-commerce 'Sandwichería Mechada Chilena'",
      category: "Desarrollo Web",
      type: "Diseño y Desarrollo Web",
      icon: <Sparkles className="w-5 h-5" />,
      image: imgMechada,
      description: "Diseño y desarrollo de una plataforma de pedidos online ágil. Experiencia de usuario simplificada para que el cliente pueda armar su pedido en menos de 3 clics.",
      tools: ["React", "Node.js", "Tailwind CSS"]
    },
    {
      id: 5,
      title: "Diseño de Feed para Instagram 'Comunnity Qmed'",
      category: "Community Manager",
      type: "Diseño Gráfico para Redes Sociales",
      icon: <LayoutGrid className="w-5 h-5" />,
      image: imgComunnityQ,
      description: "Gestión de contenidos y diseño de feed de Instagram corporativo para empresa de equipamiento médico. Se desarrolló una identidad visual coherente con la misión de la empresa, utilizando tonos verdes y azules para transmitir confianza y sostenibilidad.",
      tools: ["Canva", "Adobe Photoshop", "CapCut"]
    },
    {
      id: 6,
      title: "Diseño de Feed para Instagram",
      category: "Community Manager",
      type: "Diseño Gráfico para Redes Sociales",
      icon: <LayoutGrid className="w-5 h-5" />,
      image: imgTo, 
      description: "Planificación y diseño de feed de Instagram para marca personal de Terapia Ocupacional. Se priorizó la coherencia visual y la comunicación clara de los servicios ofrecidos.",
      tools: ["Canva", "Adobe Illustrator", "CapCut"]
    },
    {
      id: 7,
      title: "Sitio Web Corporativo 'SDC Producciones'",
      category: "Desarrollo Web",
      type: "Diseño y Desarrollo Web",
      icon: <Sparkles className="w-5 h-5" />,
      image: imgSDC,
      description: "Desarrollo de sitio web corporativo responsivo para SDC-Producciones. Plataforma moderna enfocada en UI/UX para exhibir su catálogo de servicios audiovisuales, integrando un diseño interactivo y coherente con la identidad de la marca..",
      tools: ["React", "Diseño UI/UX", "Tailwind CSS"]
    },
    {
      id: 8,
      title: "Desarrollo y diseño web 'Dog Trainer AI'",
      category: "Desarrollo Web",
      type: "Desarrollo y Diseño Web Conceptual",
      icon: <Sparkles className="w-5 h-5" />,
      image: imgDog, 
      description: "Desarrollo de plataforma web asistida por inteligencia artificial para el análisis del comportamiento y adiestramiento canino. La aplicación ofrece pautas de entrenamiento personalizadas a través de una interfaz interactiva y optimizada.",
      tools: ["React", "Python / Django", "Integración API de IA"]
    },
    {
      id: 9,
      title: "Vinilo Publicitario Cyber 'Jac'",
      category: "Branding",
      type: "Diseño Gráfico Publicitario",
      icon: <Globe className="w-5 h-5" />,
      image: imgJac, 
      description: "Diseño de vinilos de gran formato para campaña Cyber en vitrina automotriz.",
      tools: ["Illustrator", "Photoshop"]
    },
  ];

  // Filtrar los proyectos segun la categoria
  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">
            Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Éxito.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Una selección de nuestros mejores trabajos. Exploramos soluciones tecnológicas y creativas para potenciar marcas en el mundo digital.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveFilter(category)} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gray-900 text-white shadow-lg': 'bg-white text-gray-600 border border-gray-200 hover:border-gray-900 hover:text-gray-900' }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Grilla de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <button key={project.id} onClick={() => setSelectedProject(project)} className="group relative rounded-[2rem] overflow-hidden block w-full text-left h-[350px] shadow-sm hover:shadow-xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50">
              <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{  backgroundImage: project.image ? `url(${project.image})` : 'linear-gradient(to bottom right, #4f46e5, #ec4899)'}}>
                {!project.image && <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95"></div>
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
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Te gusta lo que ves?</h3>
          <Link  to="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors">
            Comenzar mi proyecto <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/*MODAL*/}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm cursor-pointer transition-opacity" onClick={() => setSelectedProject(null)}></div>
            <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
              <div className="md:w-3/5 h-64 md:h-auto bg-gray-100 relative">
                {selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover"/>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-pink-500"></div>
                )}
                
                <button onClick={() => setSelectedProject(null)} className="md:hidden absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg">
                  <X className="w-5 h-5 text-gray-900" />
                </button>
              </div>

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
    </div>
  );
};

export default PortfolioPage;