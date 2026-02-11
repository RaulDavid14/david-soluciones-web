

export default function WhyChooseUs() {
  return (
    <section id="benefits" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Por qué elegirnos?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16">
          No solo desarrollamos software, construimos soluciones confiables
          alineadas a tu negocio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-gray-950 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Enfoque profesional
            </h3>
            <p className="text-gray-400 text-lg">
              Procesos claros, comunicación constante y entregables definidos.
            </p>
          </div>

          <div className="bg-gray-950 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Seguridad y confianza
            </h3>
            <p className="text-gray-400 text-lg">
              Trabajamos bajo buenas prácticas, confidencialidad y alcance definido.
            </p>
          </div>

          <div className="bg-gray-950 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Soluciones a la medida
            </h3>
            <p className="text-gray-400 text-lg">
              Nada genérico, cada proyecto se adapta a tu necesidad real.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
