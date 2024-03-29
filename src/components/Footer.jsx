/* eslint-disable react/prop-types */

import useScrollToTopBot from "../hooks/useScrollTopBot"

export function Footer({ scrollToAbout , scrollToServices , scrollToProjects,  scrollToForm }) {

    const scrollTo = useScrollToTopBot()

    return(
        <div className="max-w-full">

        <footer className="w-full bg-gray-950 md:py-20 md:px-10">
            <div className="w-full flex flex-col-reverse py-10 md:py-0 md:grid gap-10 md:gap-0 md:grid-flow-col [&>div]:m-auto">

                <div>
                    <button type="button" onClick={() => scrollTo("top")} className="[&_*]:text-gray-50 [&>h2]:text-6xl [&>h2]:font-bold [&>span]:text-3xl [&>span]:font-medium">
                        <h2>PIEDRA</h2>
                        <span>construcciones</span>
                    </button>
                </div>

                <div>
                    <nav>
                        <ul className="[&>li]:text-center md:[&>li]:text-left [&>*]:text-gray-50 [&>*]:font-semibold [&>*]:pb-2 [&>*]:text-lg hover:[&>*]:transform hover:[&>*]:scale-110 [&>*]:transition-transform [&>*]:duration-200">
                            <li><button onClick={() => scrollTo("top")} type="button">Home</button></li>
                            <li><button onClick={scrollToAbout} type="button">Conocenos</button></li>
                            <li><button onClick={scrollToServices} type="button">Servicios</button></li>
                            <li><button onClick={scrollToProjects} type="button">Proyectos</button></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <ul className="flex gap-4 md:gap-0 md:block [&>li]:mb-3 [&>li]:list-none [&_a]:flex  [&_a]:justify-start [&_a]:items-center [&_span]:border-b-2 [&_span]:border-gray-700  [&_span]:tracking-wide [&_span]:hidden md:[&_span]:block [&_span]:text-gray-50 [&_span]:font-semibold [&_span]:text-lg  hover:[&_span]:transform hover:[&_span]:scale-110 [&_span]:transition-transform [&_span]:duration-200 md:[&_img]:mr-3 [&_img]:max-w-11 md:[&_img]:max-w-9">
                        <li><a href="https://www.instagram.com/piedra.construcciones/" target="blank">
                            <img src="./icons/instagram-light.svg" alt="Instagram" /><span>Instagram</span>
                        </a></li>
                        <li><a href="https://www.facebook.com/piedra.construcciones.uy" target="blank">
                            <img src="./icons/facebook-light.svg" alt="Facebook" /><span>Facebook</span>
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/jplangone" target="blank">
                            <img src="./icons/linkedin-light.svg" alt="LinkedIn" /><span>LinkedIn</span>
                        </a></li>
                    </ul>
                </div>

                <div>
                    <div className="text-center mb-7 bg-black py-2 rounded-xl [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-gray-50">
                        <h3>ESCRIBENOS</h3>
                    </div>

                    <div>
                        <ul className="[&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li]:mb-3 [&_img]:max-w-8 [&_img]:mr-5 md:[&_img]:mr-3 [&_span]:border-b-2 [&_span]:border-gray-700  [&_span]:tracking-wide [&_span]:text-gray-50 [&_span]:font-semibold [&_span]:text-lg  hover:[&_span]:transform hover:[&_span]:scale-110 [&_span]:transition-transform [&_span]:duration-200">
                            <li><img src="./icons/write-light.png" alt="Write" /><span><button onClick={scrollToForm} type="button">Escribenos</button></span></li>
                            <li><img src="./icons/whatsapp-light.svg" alt="WhatsAapp" /><span><a href="https://api.whatsapp.com/send?phone=59893595589" target="blank">WhatsApp</a></span></li>
                            <li><img src="./icons/phone-light-02.png" alt="Phone" /><span>093 595 589</span></li>
                            <li><img src="./icons/envelope-light.png" alt="Mail" /><span><a href="mailto:piedraconstr.uy@gmail.com">piedraconstr.uy</a></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            

        </footer>
        <div className="bg-gray-950 pb-1 md:py-2 text-center">
            <span className="text-gray-800 text-xs sm:text-base">© 2024 PIEDRA construcciones - Todos los derechos reservados</span>
        </div>

        </div>
    )
}