import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <nav>
                <div className="grid md:grid-cols-4 py-5 px-2 bg-gray-800 ">
                    <Link to="/" className="font-bold col-span-1 text-white">MiLogo</Link>
                    <div className="flex gap-12 col-span-2 justify-center text-white">

                        <Link to="/newproject" className="font-bold">Crear proyecto</Link>

                        <Link to="/" className="font-bold">Ver todos los proyectos</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
