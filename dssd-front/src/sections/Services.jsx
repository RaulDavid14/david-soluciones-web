import { motion } from "framer-motion";

export default function Services({ onOpenModal }) {
  return (
    <section id="services" className="py-32 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Desarrollo de software a la medida
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl">
            Creamos sistemas adaptados a tus procesos reales. Nada genérico.
            Nada innecesario. Solo soluciones diseñadas específicamente para tu negocio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="relative rounded-2xl p-12 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 border border-neutral-700 hover:border-neutral-500 transition max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6">
            Sistemas hechos para tu operación
          </h3>

          <p className="text-neutral-300 leading-relaxed mb-8 text-base md:text-lg lg:text-xl">
            Analizamos tu flujo de trabajo y desarrollamos plataformas que optimizan
            tiempos, reducen errores y centralizan tu información.
          </p>

          <ul className="space-y-3 text-neutral-200 text-base md:text-lg lg:text-xl mb-10">
            <li>• Soluciones web estratégicas para captación y conversión</li>
            <li>• Sistemas administrativos internos</li>
            <li>• APIs y servicios backend</li>
            <li>• Automatización de procesos</li>
            <li>• Aplicaciones web personalizadas</li>
          </ul>

          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block border border-neutral-500 px-8 py-4 rounded-lg text-base md:text-lg font-medium text-white hover:bg-neutral-800 transition"
          >
            Cotiza tu proyecto
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
}