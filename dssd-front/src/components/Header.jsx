
export default function Header()
{

    return(
        <header className="border-b border-gray-800">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-6">
            <h1 className="text-xl font-bold">
            David Soluciones TI
            </h1>

            <div className="space-x-6 text-gray-400">
            <a href="" className="hover:text-white">Servicios</a>
            <a href="" className="hover:text-white">Contacto</a>
            </div>
        </nav>
        </header>
    )

}