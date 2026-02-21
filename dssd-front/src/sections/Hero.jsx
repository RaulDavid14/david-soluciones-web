import { motion } from "framer-motion";

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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero({ onOpenModal }) {
  return (
    <section id="home" className="relative py-32 lg:py-40 text-center overflow-hidden">
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={item}
          className="font-bold mb-6 text-white drop-shadow-xl
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Soluciones tecnológicas críticas para empresas que no pueden fallar
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto drop-shadow-lg text-gray-200 max-w-3xl
            text-base sm:text-lg md:text-xl lg:text-2xl"
        >
          Diseñamos, construimos y auditamos sistemas para que tu operación sea
          escalable, segura y sin puntos ciegos.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white shadow-lg
              px-8 py-4 text-base sm:text-lg md:text-xl"
          >
            Cotiza tu proyecto
          </motion.button>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 text-gray-300 text-xs sm:text-sm md:text-base"
        >
          Desarrollo de software a la medida
        </motion.p>
      </motion.div>
    </section>
  );
}