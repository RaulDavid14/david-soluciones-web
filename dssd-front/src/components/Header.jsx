import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <a
          href="#home"
          className="text-white text-lg font-semibold hover:text-neutral-300 transition cursor-pointer"
        >
          David Soluciones TI
        </a>


        <div className="hidden md:flex space-x-8 text-neutral-300">

          <a href="#services" className="hover:text-white transition">
            Servicios
          </a>

          <a href="#process" className="hover:text-white transition">
            Proceso
          </a>

          <a href="#benefits" className="hover:text-white transition">
            Beneficios
          </a>

        </div>

        <a
          href="#contacto"
          className="hidden md:inline-block border border-neutral-500 px-5 py-2 rounded-lg text-white hover:bg-neutral-800 transition"
        >
          Cotizar proyecto
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800">

          <div className="flex flex-col items-center gap-6 py-8 text-neutral-300">

            <a onClick={() => setOpen(false)} href="#services">
              Servicios
            </a>

            <a onClick={() => setOpen(false)} href="#process">
              Proceso
            </a>

            <a onClick={() => setOpen(false)} href="#benefits">
              Beneficios
            </a>

            <a
              onClick={() => setOpen(false)}
              href="#contacto"
              className="border border-neutral-500 px-6 py-3 rounded-lg text-white"
            >
              Cotizar proyecto
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
