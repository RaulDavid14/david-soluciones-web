export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-neutral-400">
        
        <div className="space-y-4">
          <h3 className="text-white text-lg font-medium">
            David Soluciones TI
          </h3>
          <p className="text-sm leading-relaxed">
            Servicios profesionales de seguridad informática y desarrollo
            de software a la medida para empresas que requieren soluciones
            técnicas confiables.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-lg font-medium">
            Servicios
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Evaluación y escaneo de seguridad</li>
            <li>Análisis de infraestructura y APIs</li>
            <li>Desarrollo de software a la medida</li>
            <li>Integraciones y automatización</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-lg font-medium">
            Contacto
          </h4>
          <address className="not-italic text-sm space-y-2">
            <p>
              <a
                href="mailto:raul.david@davidsolucionesti.com"
                className="hover:text-white transition"
              >
                raul.david@davidsolucionesti.com
              </a>
            </p>
            <p>México</p>
          </address>
        </div>

      </div>

      {/* Legal */}
      <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} David Soluciones TI. Todos los derechos reservados.
      </div>
    </footer>
  )
}
