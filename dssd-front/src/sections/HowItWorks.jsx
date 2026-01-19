export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Cómo funciona?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16">
          Un flujo único para evaluar, construir y proteger sistemas críticos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Paso 1 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            <span className="text-3xl font-bold text-blue-500">01</span>
            <h3 className="text-2xl font-semibold mt-4 mb-3">
              Seleccionas
            </h3>
            <p className="text-gray-400 text-lg">
              Inicias un <strong>escaneo de seguridad</strong> o una <strong>cotización de desarrollo</strong>
              desde el formulario correspondiente.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            <span className="text-3xl font-bold text-blue-500">02</span>
            <h3 className="text-2xl font-semibold mt-4 mb-3">
              Evaluamos
            </h3>
            <p className="text-gray-400 text-lg">
              Ejecutamos pruebas automáticas y revisiones técnicas (seguridad) o
              analizamos requerimientos, alcance y arquitectura (desarrollo).
            </p>
          </div>

          {/* Paso 3 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            <span className="text-3xl font-bold text-blue-500">03</span>
            <h3 className="text-2xl font-semibold mt-4 mb-3">
              Centralizamos
            </h3>
            <p className="text-gray-400 text-lg">
              Todo se documenta en tu panel: hallazgos, riesgos, avances, propuestas
              y archivos técnicos.
            </p>
          </div>

          {/* Paso 4 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            <span className="text-3xl font-bold text-blue-500">04</span>
            <h3 className="text-2xl font-semibold mt-4 mb-3">
              Decides
            </h3>
            <p className="text-gray-400 text-lg">
              Descargas reportes oficiales de seguridad o apruebas el desarrollo
              para corregir, construir o escalar tu sistema.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
