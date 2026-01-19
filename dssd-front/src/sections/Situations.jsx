import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Situations() {
  return (
    <section className="py-36 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-8">
            ¿Cómo podemos ayudarte?
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
            En David Soluciones TI colaboramos con empresas que requieren soporte técnico especializado,
            ya sea para fortalecer su seguridad o construir software alineado
            a su operación real.
          </p>
        </div>

        {/* Carrusel */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          loop
          spaceBetween={32}
          slidesPerView={1}
          centeredSlides
          breakpoints={{
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
        >
          {[
            {
              title: "Evaluación de seguridad",
              text:
                "Análisis técnico de servidores, aplicaciones y APIs para conocer su estado real antes de auditorías o procesos críticos."
            },
            {
              title: "Software a la medida",
              text:
                "Diseño y desarrollo de sistemas internos, plataformas y herramientas construidas específicamente para tu operación."
            },
            {
              title: "Integraciones y automatización",
              text:
                "Conexión de servicios, APIs y procesos para reducir tareas manuales y mejorar la eficiencia operativa."
            },
            {
              title: "Revisión de infraestructura",
              text:
                "Evaluación de arquitectura, configuraciones y buenas prácticas en entornos productivos."
            },
            {
              title: "Crecimiento y escalabilidad",
              text:
                "Acompañamiento técnico cuando la tecnología existente deja de escalar con el negocio."
            },
            {
              title: "Proyectos desde cero",
              text:
                "Construcción de soluciones desde la planeación hasta la puesta en producción."
            }
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full bg-neutral-900 border border-neutral-800 rounded-2xl p-12 hover:border-neutral-600 transition">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                  {item.title}
                </h3>

                <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
