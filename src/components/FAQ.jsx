import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué incluye el hosting y dominio del primer año?",
      answer: "Nuestros planes incluyen el registro de tu dominio (.cl o .com según disponibilidad) y un alojamiento web seguro y de alto rendimiento por 12 meses. Además, configuramos tu certificado SSL para que la web aparezca como 'Segura'."
    },
    {
      question: "¿Qué pasa después de que termine el primer año?",
      answer: "Te notificaremos con anticipación. Podrás renovar el hosting y dominio directamente con nosotros mediante un pago anual muy accesible, o si lo prefieres, te entregamos los accesos para que lo administres por tu cuenta."
    },
    {
      question: "¿En cuánto tiempo entregan la página web?",
      answer: "Depende del plan. El Plan Base (Landing Page) suele estar listo en 5 a 7 días hábiles tras recibir tu información. Los planes Proyecta y E-commerce toman entre 2 a 4 semanas, garantizando un diseño impecable y pruebas de rendimiento."
    },
    {
      question: "¿Yo seré el dueño de mi página web y dominio?",
      answer: "Absolutamente. Tú eres el propietario 100% legal de tu dominio y de tu sitio web. Nosotros funcionamos como tu agencia de desarrollo y soporte técnico."
    },
    {
      question: "Si ya tengo logo, ¿pueden usarlo?",
      answer: "¡Claro que sí! Adaptaremos todo el diseño de la página web para que respete tu manual de marca, paleta de colores y tipografías actuales."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600">Resolvemos tus dudas principales para que des el paso con total seguridad.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-blue-500 shadow-md bg-white' : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}>
              <button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}>
                <span className={`font-semibold text-lg pr-4 ${openIndex === index ? 'text-blue-600' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-600' : 'text-gray-500'}`} />
              </button>
              <div className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;