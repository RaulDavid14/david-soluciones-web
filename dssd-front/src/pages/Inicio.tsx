export default function Inicio() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Transforma tu negocio con tecnología
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Soluciones digitales a medida para impulsar tu crecimiento.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300 hover:scale-105">
            Comenzar
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition duration-300 hover:scale-105">
            Saber más
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center animate-fade-in">
        <img
          src="/img/dssd.jpg"
          alt="Hero Image"
          className="rounded-lg shadow-xl h-full"
        />
      </div>
    </section>
  );
}
