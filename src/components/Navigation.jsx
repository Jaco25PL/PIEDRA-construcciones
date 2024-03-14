
export function Navigation() {

    return (
        <header className='w-full'>
            <div className='w-full'>
              <nav className='mx-32 py-5  flex flex-row justify-between items-center'>
                <div>
                  <span className='font-bold text-3xl cursor-pointer'>
                    PIEDRA
                  </span>
                </div>
                <div>
                  <ul className='nav-link flex flex-row gap-8 font-semibold [&>li]:relative [&>li:after]:absolute [&>li:after]:content-[""] [&>li:after]:top-8 [&>li:after]:left-0 [&>li:after]:w-full [&>li:after]:h-1 [&>li:after]:bg-gray-900 [&>li:after]:opacity-0 [&>li:after]:transition-opacity [&>li:after]:duration-300 hover:[&>li:after]:opacity-100'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                  </ul>
                </div>
                <div className='bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center cursor-pointer transition-all duration-200'>
                  <span className='font-bold text-xl'>
                    Contactanos
                  </span>
                </div>
              </nav>
            </div>
        </header>
    )
}