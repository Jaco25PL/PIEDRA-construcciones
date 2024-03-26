/* eslint-disable react/prop-types */

import { useState } from "react"

export function MobileNav({ scrollTo }) {

    const [ isOpen, setIsOpen ] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    
    return (
      <div className="relative w-full ">
          <nav className='w-full backdrop-blur-md bg-slate-50 bg-opacity-50  relative px-5 h-24 md:mx-10 lg:mx-32 py-5 lg:[&>div]:min-w-40 flex flex-row justify-between items-center'>
              <div>
                  <button type="submit" onClick={handleClick} className="flex flex-col justify-center items-center gap-2 [&>span]:bg-gray-900 [&>span]:block [&>span]:transition-all [&>span]:duration-300 [&>span]:ease-in-out [&>span]:h-[3px] [&>span]: [&>span]:rounded-lg">
                      <span className={`${isOpen ? 'w-6 rotate-45 translate-y-[19px]' : 'w-8 -translate-y-0.5'}`}></span>
                      <span className={`w-8 ${isOpen ? 'translate-x-2 ' : 'w-10'}`}></span>
                      <span className={`${isOpen ? 'w-6 -rotate-45 -translate-y-[19px]' : 'w-8 translate-y-0.5'}`}></span>
                  </button>
              </div>
              
              <div >
                <button onClick={() => scrollTo("top")} className='font-bold text-3xl cursor-pointer'>
                  PIEDRA
                </button>
              </div>
              
              <div className="[&_img]:max-w-10">
                <button type="button" onClick={() => scrollTo("bottom")}><img src="./icons/contact.svg"/></button>
              </div>
          </nav>

          <ul className={`absolute ${isOpen ? "top-24 opacity-100" : "-top-80 opacity-0"}  transition-all duration-300 ease-in-out flex flex-col gap-4 w-full px-10 pb-10 pt-5 backdrop-blur-md bg-slate-700  bg-opacity-50 [&>li]:text-gray-50 [&>li]:pb-2 [&>li]:font-semibold [&>li]:border-b-2 [&>li]:border-gray-300 [&>li]:text-2xl`}>
            <li><button type="button" onClick={() => scrollTo("top")}>Home</button></li>
            <li><button type="button"  >Servicios</button></li>
            <li><button type="button"  >Nosotros</button></li>
            <li><button type="button"  >Proyectos</button></li>
          </ul>

        </div>
    )
}