export function Navigation() {

  const scrollTo = ( to ) => {
    
    if(to === "top"){
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }else if(to === "bottom"){
      const height = document.documentElement.scrollHeight
      window.scrollTo({top: height, behavior: 'smooth'})
    }
  }

    return (
        <header className='z-50 w-full backdrop-blur-md bg-slate-50 bg-opacity-50 sticky top-0'>
            <div className='w-full'>
              <nav className='mx-5 md:mx-10 lg:mx-32 py-5 hidden sm:flex flex-row justify-between items-center'>
                <div>
                  <button onClick={() => scrollTo("top")} className='font-bold text-2xl md:text-3xl cursor-pointer'>
                    PIEDRA
                  </button>
                </div>
                <div>
                  <ul className='nav-link flex flex-row md:gap-8 gap-4 font-semibold [&>li]:relative [&>li:after]:absolute [&>li:after]:content-[""] [&>li:after]:top-8 [&>li:after]:left-0 [&>li:after]:w-full [&>li:after]:h-1 [&>li:after]:bg-gray-900 [&>li:after]:opacity-0 [&>li:after]:transition-opacity [&>li:after]:duration-300 hover:[&>li:after]:opacity-100'>
                    <li><button type="button" onClick={() => scrollTo("top")}>Home</button></li>
                    <li><button type="button" >Servicios</button></li>
                    <li><button type="button" >Nosotros</button></li>
                    <li><button type="button" >Proyectos</button></li>
                  </ul>
                </div>
                <div className='bg-gray-100 bg-opacity-70 hover:bg-red-500 hover:text-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center cursor-pointer transition-all duration-200'>
                  <button type="button" onClick={() => scrollTo("bottom")} className='font-bold md:text-xl'>Contactanos</button>
                </div>
              </nav>
            </div>
        </header>
    )
}