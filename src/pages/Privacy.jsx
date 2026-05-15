const Privacy = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-gray-800">
        
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
          Políticas de <span className="text-blue-600">Privacidad</span>
        </h1>
        <p className="text-sm text-gray-500 mb-12">Última actualización: Mayo 2026</p>

        <div className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Recopilación de Información</h2>
            <p>
              En Grid Studio, recopilamos información personal únicamente cuando tú nos la proporcionas voluntariamente 
              al completar nuestro formulario de contacto o al comunicarte a través de correo electrónico o WhatsApp. 
              Esta información puede incluir tu nombre, correo electrónico, número de teléfono y detalles de tu proyecto empresarial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de la Información</h2>
            <p>
              La información que recopilamos se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
              <li>Responder a tus consultas y enviarte cotizaciones personalizadas.</li>
              <li>Proveer y mantener los servicios contratados (ej. registro de dominios).</li>
              <li>Mejorar tu experiencia en nuestro sitio web.</li>
              <li>Enviarte actualizaciones importantes sobre la renovación de tus servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Protección de Datos</h2>
            <p>
              Nos comprometemos a mantener tu información segura. No vendemos, intercambiamos ni transferimos 
              tus datos personales a terceros bajo ninguna circunstancia, excepto a proveedores de servicios de confianza 
              (como empresas de hosting) que nos asisten en la operación de tu proyecto, quienes también están obligados a mantener dicha información confidencial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso de Cookies</h2>
            <p>
              Nuestro sitio web puede utilizar "cookies" para mejorar la experiencia del usuario y analizar el tráfico del sitio. 
              Puedes elegir configurar tu navegador para que rechace las cookies o para que te avise cuando se estén enviando.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tus Derechos</h2>
            <p>
              Tienes el derecho de solicitar en cualquier momento el acceso, rectificación o eliminación de tus datos personales 
              almacenados en nuestra base de datos. Para ejercer este derecho, puedes escribirnos a <strong>hola@gridstudio.cl</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Privacy;