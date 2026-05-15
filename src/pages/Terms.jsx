const Terms = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-gray-800">
        
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
          Términos y <span className="text-blue-600">Condiciones</span>
        </h1>
        <p className="text-sm text-gray-500 mb-12">Última actualización: Mayo 2026</p>

        <div className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Servicios Generales</h2>
            <p>
              Grid Studio ofrece servicios de diseño web, branding, producción audiovisual y diseño impreso. 
              Al contratar cualquiera de nuestros servicios, el cliente acepta los términos descritos en este documento. 
              Los plazos de entrega comienzan a regir una vez que el cliente entrega todo el material necesario (textos, imágenes, accesos) requerido para el proyecto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Pagos y Facturación</h2>
            <p>
              Todo proyecto requiere un pago inicial del 50% para comenzar y el 50% restante antes de la entrega final 
              o publicación del sitio web, a menos que se especifique lo contrario en la cotización formal. 
              Los valores expresados en nuestros planes no incluyen impuestos (IVA) a menos que se indique explícitamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hosting y Dominios</h2>
            <p>
              Nuestros planes web incluyen hosting y dominio (.cl o .com) por el primer año. 
              La renovación anual es responsabilidad del cliente, y Grid Studio notificará con 30 días de anticipación el valor de dicha renovación. 
              Si el cliente decide no renovar, Grid Studio no se hace responsable por la pérdida del dominio o de los archivos del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Revisiones y Modificaciones</h2>
            <p>
              Nuestros planes incluyen rondas de revisión específicas (indicadas en la cotización). 
              Cualquier modificación estructural profunda solicitada después de la etapa de diseño aprobada, 
              o que exceda las rondas de revisión, será cotizada como horas de desarrollo adicionales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
            <p>
              Una vez liquidado el pago total del proyecto, el cliente es el dueño absoluto de su sitio web, 
              dominio y diseños gráficos finales. Grid Studio se reserva el derecho de utilizar los trabajos 
              realizados como parte de su portafolio público y en sus redes sociales, a menos que se firme un acuerdo de confidencialidad previo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ley Aplicable</h2>
            <p>
              Estos términos y condiciones se rigen bajo las leyes vigentes de la República de Chile. 
              Cualquier controversia derivada de este acuerdo será sometida a la jurisdicción de los tribunales de la ciudad de Santiago.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Terms;