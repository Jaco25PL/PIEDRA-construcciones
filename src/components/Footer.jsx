
export function Footer() {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return(
        <div className="max-w-full">

        <footer className="w-full bg-gray-950 md:py-20 md:px-10">
            <div className="w-full flex flex-col-reverse py-10 md:py-0 md:grid gap-10 md:gap-0 md:grid-flow-col [&>div]:m-auto">

                <div>
                    <button className="[&_*]:text-gray-50 [&>h2]:text-6xl [&>h2]:font-bold [&>span]:text-3xl [&>span]:font-medium" type="button" onClick={scrollToTop}>
                        <h2>PIEDRA</h2>
                        <span>construcciones</span>
                    </button>
                </div>

                <div>
                    <nav>
                        <ul className="[&>*]:text-gray-50 [&>*]:font-semibold [&>*]:pb-2 [&>*]:text-lg hover:[&>*]:transform hover:[&>*]:scale-110 [&>*]:transition-transform [&>*]:duration-200">
                            <li><button type="button">Home</button></li>
                            <li><button type="button">Conocenos</button></li>
                            <li><button type="button">Servicios</button></li>
                            <li><button type="button">Proyectos</button></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <u className="[&_img]:max-w-9 [&>li]:mb-3 [&>li]:list-none [&_a]:flex [&_a]:justify-start [&_a]:items-center [&_span]:text-gray-50 [&_span]:font-semibold [&_span]:text-lg  hover:[&_span]:transform hover:[&_span]:scale-110 [&_span]:transition-transform [&_span]:duration-200 [&_img]:mr-3 ">
                        <li><a href="https://www.instagram.com/piedra.construcciones/" target="blank"><img src="./icons/instagram-light.svg" alt="Instagram" /><span>Instagram</span></a></li>
                        <li><a href="https://www.facebook.com/piedra.construcciones.uy" target="blank"><img src="./icons/facebook-light.svg" alt="Facebook" /><span>Facebook</span></a></li>
                        <li><a href="https://www.linkedin.com/in/jplangone" target="blank"><img src="./icons/linkedin-light.svg" alt="LinkedIn" /><span>LinkedIn</span></a></li>
                    </u>
                </div>

                <div>
                    <div className="text-center mb-7 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-gray-50">
                        <h3>ESCRIBENOS</h3>
                    </div>

                    <div>
                        <ul className="[&>li]:flex [&>li]:justify-start [&>li]:items-center  [&>li]:mb-3  [&_span]:text-gray-50 [&_span]:font-semibold [&_span]:text-lg  hover:[&_span]:transform hover:[&_span]:scale-110 [&_span]:transition-transform [&_span]:duration-200 [&_img]:mr-3">
                            <li><img className="max-w-8" src="./icons/light/write-light.png" alt="Write" /><span>Escribenos</span></li>
                            <li><img className="max-w-8" src="./icons/whatsapp-light.svg" alt="WhatsAapp" /><span>WhatsApp</span></li>
                            <li><img className="max-w-8" src="./icons/light/phone-light-02.png" alt="Phone" /><span>123 456 789</span></li>
                            <li><img className="max-w-8" src="./icons/light/envelope-light.png" alt="Mail" /><span>piedraconstr.uy</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            

        </footer>
        <div className="bg-gray-950 md:py-2 text-center">
            <span className="text-gray-800">Copyright PIEDRA construcciones 2024</span>
        </div>

        </div>
    )
}