function Navbar() {
    return (
        <header>
            <nav>
                <div class="grid md:grid-cols-4 py-5 px-2 bg-gray-800 ">
                    <div class="font-bold col-span-1 text-white">MiLogo</div>
                    <div class="flex gap-12 col-span-2 justify-center text-white" >
                        <a href="#" class="font-bold">Crear proyecto</a>
                        <a href="#" class="font-bold">Ver todos los proyectos</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
