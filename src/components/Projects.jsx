
export function Projects() {

    return(
        <section className="max-w-full">
            
            <div className="[&>div]:mx-auto sm:mx-0 md:mx-20 xl:mx-40 ">
                <div className=" mx-4 md:mx-0 [&>*]:text-center [&>p]:max-w-4xl [&>p]:mx-auto [&>p]:my-6 ">
                    <div className="[&>*]:w-fit [&>*]:mx-auto [&>h3]:font-bold [&>*]:text-5xl [&>*]:tracking-tighter">
                        <h2>DETRAS DE CADA PROYECTO</h2>
                        <h3>HAY UNA HISTORIA</h3>
                    </div>
                    <p>En PIEDRA construcciones, no solo construimos estructuras, sino que transformamos sueños en realidad. Explora nuestro portafolio y déjate sorprender por la creatividad e innovación que impregnamos en cada obra. Desde proyectos residenciales hasta comerciales, nuestro equipo de profesionales se dedica a brindar soluciones personalizadas que superen las expectativas de nuestros clientes</p>
                </div>

                <div className="overflow-hidden max-w-5xl xl:w-full xl:px-20 [&>img]:bg-center [&>img]:cover [&>img]:w-full [&>img]:h-auto [&>img]:rounded-xl">
                    <img src="./header-slider-02.jpg" alt="project" />
                </div>

            </div>

            <div>
                <div className="my-6 [&_*]:text-4xl [&_*]:tracking-tighter [&>h3]:w-fit [&>h3]:mx-auto [&_span]:font-bold">
                    <h3>PROYECTOS <span>SELECCIONADOS</span></h3>
                </div>




                {/* <div className=" rounded-xl sm:mx-4 lg:mx-20 flex justify-center items-center md:items-start flex-col md:flex-row bg-gradient-to-r from-transparent to-gray-100 ">

                    <div className="inline-flex gap-5 flex-shrink flex-grow basis-1/2 [&>div]:max-w-xs [&>div]:overflow-hidden [&>div]:rounded-xl [&_img]:w-full [&_img]:h-full [&_img]:aspect-square [&_img]:object-cover">
                        <div><img src="./header-slider-01.webp" alt="project" /></div>
                        <div><img src="./header-slider-02.jpg" alt="project" /></div>
                    </div>

                    <div className="    flex-shrink flex-grow basis-1/2 p-4 md:p-5">

                        <div className="[&>h4]:text-3xl [&>h4]:font-semibold [&>h4]:mb-5 [&>p]:text-base [&>h4]:text-center md:[&>h4]:text-left">
                            <h4>Project Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit nesciunt deserunt fugit non quisquam ab eum et alias praesentium!</p>
                        </div>
                        <div className=" [&_*]:w-fit [&_*]:bg-red-500 [&_*]:py-2 [&_*]:px-4 [&_*]:rounded-lg [&_*]:font-bold [&_*]:text-gray-50 hover:[&_*]:bg-gray-900 [&_*]:transition-all [&_*]:duration-200 hover:[&_*]:transform hover:[&_*]:scale-110 mt-10 ">
                            <button type="button">CONOCER</button>
                        </div>

                    </div>
                </div> */}

                <div className=" rounded-xl sm:mx-4 lg:mx-20 flex justify-center items-center md:items-start flex-col md:flex-row bg-gradient-to-r from-transparent to-gray-100 ">

                    <div className="inline-flex gap-5 flex-shrink flex-grow md:[&>div]:max-w-60 lg:[&>div]:max-w-xs xl:[&>div]:max-w-sm [&>div]:overflow-hidden [&>div]:rounded-xl [&_img]:w-full [&_img]:h-full [&_img]:aspect-square [&_img]:object-cover">
                        <div><img src="./header-slider-01.webp" alt="project" /></div>
                        <div><img src="./header-slider-02.jpg" alt="project" /></div>   
                    </div>

                    <div className="flex-shrink flex-grow basis-2/5 p-4 md:p-5">

                        <div className="[&>h4]:text-3xl [&>h4]:font-semibold [&>h4]:mb-5 [&>h4]:text-center md:[&>h4]:text-left [&>p]:text-base [&>p]:leading-5">
                            <h4>Project Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit nesciunt deserunt fugit non quisquam ab eum et alias praesentium!</p>
                        </div>
                        <div className=" mt-5 xl:mt-10 [&_*]:w-fit [&_*]:bg-red-500 [&_*]:py-2 [&_*]:px-4 [&_*]:rounded-lg [&_*]:font-bold [&_*]:text-gray-50 hover:[&_*]:bg-gray-900 [&_*]:transition-all [&_*]:duration-200 hover:[&_*]:transform hover:[&_*]:scale-110 ">
                            <button type="button">CONOCER</button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}