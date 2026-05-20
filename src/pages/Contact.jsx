import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'desarrollo-web',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_eg1azpl',
        'template_cmodgfu',
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        'd40vPjgw__axuQ8cu'
      );

      alert('¡Mensaje enviado con éxito! Te contactaremos a la brevedad.');
      setFormData({ name: '', email: '', service: 'desarrollo-web', message: '' });
    } catch (error) {
      console.error('Error al enviar el email:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, contáctanos vía WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">
            Hagamos realidad tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">próximo proyecto.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Completa el formulario a continuación detallando lo que tienes en mente, o escríbenos directamente a través de nuestros canales oficiales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/*Info de contacto */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-gray-900 text-white p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Información Directa</h3>
              
              <div className="space-y-6">
                <a href="mailto:hola@gridstudio.cl" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium group-hover:text-blue-400 transition-colors">gridstudio.dev@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/56956293938" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="font-medium group-hover:text-green-400 transition-colors">+56 9 5629 3938</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="font-medium">Santiago, Chile (Remoto)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-[2rem] border border-gray-200 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nombre completo</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ej. Juan Pérez"/>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Correo electrónico</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="hola@tuempresa.com"/>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-semibold text-gray-700">¿En qué te podemos ayudar?</label>
                <select id="service"name="service" value={formData.service} onChange={handleChange} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700">
                  <option value="desarrollo-web">Desarrollo Web (Landing, Corporativo, E-commerce)</option>
                  <option value="branding">Branding e Identidad Visual</option>
                  <option value="audiovisual">Producción Audiovisual (Foto / Video)</option>
                  <option value="impresos">Diseño Impreso y Eventos</option>
                  <option value="otro">Otro proyecto</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Cuéntanos sobre tu proyecto</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Me gustaría cotizar una tienda online para mis productos...">
                  </textarea>
              </div>

              {/* Boton Enviar */}
              <button type="submit" disabled={isSubmitting} className="mt-2 w-full flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors group disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando mensaje...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;