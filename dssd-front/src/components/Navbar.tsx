import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-blue-600">
                    <Link to="/">David Soluciones Software Development</Link>
                </div>
                <ul className="flex space-x-6 text-gray-700">
                    <li>
                        <Link to="/" className="hover:text-blue-500">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/nosotros" className="hover:text-blue-500">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/servicios" className="hover:text-blue-500">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/contacto" className="hover:text-blue-500">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}  
