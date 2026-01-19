import { motion } from "framer-motion";

export default function CallToAction() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-28 bg-neutral-950 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />

      <motion.div
        className="relative max-w-5xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-semibold text-white mb-6"
        >
          ¿Cómo quieres empezar?
        </motion.h2>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-12"
        >
          Selecciona el servicio que necesitas y entra al proceso correcto
          para evaluar tu caso.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-medium text-white 
                       bg-gradient-to-r from-indigo-600 to-cyan-600
                       hover:from-indigo-500 hover:to-cyan-500
                       transition"
          >
            Iniciar escaneo de seguridad
          </motion.a>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-medium 
                       border border-neutral-700 text-white 
                       hover:bg-neutral-900 transition"
          >
            Cotizar desarrollo de software
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}
