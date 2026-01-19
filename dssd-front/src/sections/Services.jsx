import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-32 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Servicios
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl">
            David Soluciones TI ofrece servicios técnicos especializados enfocados en seguridad
            y desarrollo de software a la medida, adaptados a las necesidades
            reales de cada empresa.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-12 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="relative rounded-2xl p-10 md:p-12 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 border border-neutral-700 hover:border-neutral-500 transition"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6">
              Evaluación y Monitoreo de Seguridad Web
            </h3>

            <p className="text-neutral-300 leading-relaxed mb-6 text-base md:text-lg lg:text-xl">
              Identificamos vulnerabilidades y riesgos técnicos en
              infraestructuras, aplicaciones y APIs, proporcionando reportes
              claros y accionables.
            </p>

            <ul className="space-y-2 text-neutral-200 text-base md:text-lg lg:text-xl mb-8">
              <li>• Escaneo de vulnerabilidades</li>
              <li>• Evaluación de servidores y APIs</li>
              <li>• Revisión de configuraciones</li>
              <li>• Reportes técnicos y recomendaciones</li>
            </ul>

            <a
              href="#contacto"
              className="inline-block border border-neutral-500 px-6 py-3 rounded-lg text-sm md:text-base lg:text-lg font-medium text-white hover:bg-neutral-800 transition"
            >
              Solicitar diagnóstico
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -6 }}
            className="relative rounded-2xl p-10 md:p-12 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 border border-neutral-700 hover:border-neutral-500 transition"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6">
              Desarrollo de software a la medida
            </h3>

            <p className="text-neutral-300 leading-relaxed mb-6 text-base md:text-lg lg:text-xl">
              Diseñamos y desarrollamos sistemas alineados a los procesos reales
              de cada negocio, evitando soluciones genéricas.
            </p>

            <ul className="space-y-2 text-neutral-200 text-base md:text-lg lg:text-xl mb-8">
              <li>• Sistemas internos y plataformas administrativas</li>
              <li>• APIs y servicios backend</li>
              <li>• Integraciones y automatización</li>
              <li>• Aplicaciones web y herramientas internas</li>
            </ul>

            <a
              href="#contacto"
              className="inline-block border border-neutral-500 px-6 py-3 rounded-lg text-sm md:text-base lg:text-lg font-medium text-white hover:bg-neutral-800 transition"
            >
              Cotiza tu proyecto
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
