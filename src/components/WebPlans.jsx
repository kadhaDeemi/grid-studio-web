import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebPlans = () => {
  const plans = [
    {
      name: "Plan Base",
      badge: "Presencia Digital",
      description: "Ideal para servicios rápidos que necesitan validación inmediata en internet.",
      features: [
        "Sitio web Landing Page (One-Page)",
        "Diseño Responsive (adaptable a celulares)",
        "Hosting y Dominio (.cl o .com) por 1 año",
        "Certificado de seguridad SSL",
        "Botón flotante de WhatsApp",
        "Optimización SEO básica"
      ],
      highlighted: false,
      buttonText: "Cotizar Plan Base"
    },
    {
      name: "Plan Proyecta",
      badge: "El Más Elegido",
      description: "Una plataforma robusta para empresas que buscan escalar y transmitir autoridad.",
      features: [
        "Sitio web Multi-página (Inicio, Servicios, etc.)",
        "Todo lo incluido en el Plan Base",
        "Cuentas de correo corporativo",
        "Integración con redes sociales",
        "Panel autoadministrable básico",
        "Soporte técnico prioritario"
      ],
      highlighted: true,
      buttonText: "Cotizar Plan Proyecta"
    },
    {
      name: "Plan E-commerce",
      badge: "Ventas Online",
      description: "Tu propia tienda digital abierta las 24 horas para vender sin fronteras.",
      features: [
        "Tienda online con carrito de compras",
        "Todo lo incluido en el Plan Proyecta",
        "Integración de pasarelas de pago (Webpay, etc.)",
        "Gestión de inventario y pedidos",
        "Fichas de producto optimizadas",
        "Capacitación de uso de la plataforma"
      ],
      highlighted: false,
      buttonText: "Cotizar E-commerce"
    }
  ];

  return (
    <section className="py-24 bg-white" id="planes-web">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Desarrollo Web Inteligente
          </h2>
          <p className="text-lg text-gray-600">
            Plataformas rápidas, seguras y diseñadas para convertir visitas en clientes. Todo incluido en planes transparentes.
          </p>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-gray-900 text-white shadow-2xl scale-100 md:scale-105 z-10' 
                  : 'bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-lg'
              }`}>
              {/* Etiqueta superior */}
              <div className="mb-6">
                <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
                  plan.highlighted ? 'bg-blue-500/20 text-cyan-300' : 'bg-gray-200 text-gray-700'
                }`}>
                  {plan.badge}
                </span>
              </div>

              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-8 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* Lista de características */}
              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${
                      plan.highlighted ? 'text-cyan-400' : 'text-blue-600'
                    }`} />
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón de Acción */}
              <Link
                to="/contacto"
                className={`w-full py-3 px-6 rounded-xl text-center font-semibold transition-colors duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WebPlans;