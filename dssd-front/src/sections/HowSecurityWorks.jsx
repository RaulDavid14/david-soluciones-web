export default function HowSecurityWorks() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          ¿Cómo hacemos el escaneo de seguridad?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16 text-center">
          Un proceso técnico automatizado con resultados claros y accionables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="bg-gray-900 p-8 rounded-2xl">
            <span className="text-3xl font-bold text-blue-500">01</span>
            <h3 className="text-2xl font-semibold mt-4 mb-3">Ingresas tu sistema</h3>
            <p className="text-gray-400">
              Proporcionas tu dominio, IP o API para iniciar el análisis.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl">
            <span className="text-3xl font-bold text-blue-500">02</span>
            <h3 className="text-2xl font-semibold mt-4 mb-3">Escaneamos</h3>
            <p className="text-gray-400">
              Ejecutamos pruebas automáticas para detectar vulnerabilidades y configuraciones inseguras.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl">
            <span className="text-3xl font-bold text-blue-500">03</span>
            <h3 className="text-2xl font-semibold mt-4 mb-3">Analizas resultados</h3>
            <p className="text-gray-400">
              Visualizas riesgos, evidencias y severidades en tu panel.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl">
            <span className="text-3xl font-bold text-blue-500">04</span>
            <h3 className="text-2xl font-semibold mt-4 mb-3">Desbloqueas reporte</h3>
            <p className="text-gray-400">
              Pagas y descargas el reporte técnico listo para auditoría o remediación.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
