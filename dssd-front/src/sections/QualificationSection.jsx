import { motion } from "framer-motion";

export default function QualificationSection() {
  return (
    <section className="relative py-28 bg-neutral-950 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tu camino hacia la solución
          </h2>
         <p className="text-lg md:text-xl text-neutral-400">
            Más que un proveedor, somos tu socio técnico que entiende tus necesidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Ideal para empresas que…
            </h3>

            <ul className="space-y-4 text-neutral-300 text-lg">
              <li>• Tienen un sistema web, SaaS, ERP o API en producción</li>
              <li>• Manejan datos de clientes, pagos o información sensible</li>
              <li>• Ya han sufrido errores, caídas o incidentes de seguridad</li>
              <li>• Están creciendo y necesitan software estable y escalable</li>
              <li>• Usan sistemas heredados difíciles de mantener</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-center"
          >
            <p className="text-xl text-neutral-300 leading-relaxed">
              Este servicio está diseñado para empresas que necesitan
              <span className="text-white font-semibold">
                {" "}soluciones técnicas sólidas, seguras y escalables
              </span>.
            </p>

            <p className="text-neutral-400 mt-6">
              Si tu proyecto requiere algo más que una simple presencia en línea,
              aquí encontrarás un equipo que analiza, diseña y construye con visión de negocio.
            </p>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            ¿Cómo sabemos qué necesitas?
          </h3>

          <p className="text-lg text-neutral-400 mb-10">
            No todos los proyectos requieren lo mismo. Evaluamos tu situación para brindarte lo justo y necesario.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ya tienes un sistema",
                desc: "Lo escaneamos, analizamos riesgos y te mostramos dónde está el problema."
              },
              {
                title: "Tienes una idea",
                desc: "Diseñamos la arquitectura y el alcance antes de que gastes dinero."
              },
              {
                title: "Tu sistema falla",
                desc: "Detectamos si se corrige o si conviene reconstruirlo."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl"
              >
                <p className="text-white text-lg font-semibold mb-2">
                  {item.title}
                </p>
                <p className="text-neutral-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Qué sucede después */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            ¿Qué sucede después de enviar tu solicitud?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Recibimos tu información",
                desc: "Revisamos tu sistema o requerimiento técnico."
              },
              {
                step: "02",
                title: "Lo analizamos",
                desc: "Un especialista valida riesgos, alcance y complejidad."
              },
              {
                step: "03",
                title: "Te damos un diagnóstico",
                desc: "Propuesta, reporte de seguridad o recomendación técnica."
              },
              {
                step: "04",
                title: "Tú decides",
                desc: "Sin ventas agresivas. Solo datos para decidir."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl"
              >
                <span className="text-indigo-500 font-bold text-xl">
                  {item.step}
                </span>
                <h4 className="text-xl font-semibold text-white mt-4 mb-2">
                  {item.title}
                </h4>
                <p className="text-neutral-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
