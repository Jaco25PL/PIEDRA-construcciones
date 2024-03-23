import { useState } from "react"
import projects from "../data/projects"
import { Loader } from "./Loader"
import { ProjectCards } from "./ProjectCards"

export function Projects() {

    const [ loading , setLoading ] = useState(true)
    const handleImage = () => {
        setLoading(false)
    }

    return(
        <section className="relative max-w-full">
            
            <div className="flex flex-col items-center sm:mx-0 md:mx-20 xl:mx-40">
                <div className="mx-4  md:mx-0 [&>*]:text-center [&>p]:max-w-4xl [&>p]:my-6 ">
                    <div className="[&>*]:text-center [&_span]:text-3xl sm:[&_span]:text-4xl md:[&_span]:text-5xl [&_span]:font-bold [&_span]:tracking-tighter">
                        <h2>DETRÁS DE CADA PROYECTO<br/><span>HAY UNA HISTORIA</span></h2>
                    </div>
                    <p>En <span className="font-semibold sm:text-lg">PIEDRA construcciones</span>, no solo construimos estructuras, sino que transformamos sueños en realidad. Descubre la creatividad e innovación que ofrecemos en cada obra</p>
                </div>

                <div className="relative overflow-hidden rounded-xl max-w-5xl xl:w-full xl:px-20 [&>img]:bg-center [&>img]:cover [&>img]:w-full [&>img]:h-auto md:[&>img]:rounded-xl">
                    { loading && <Loader/> }
                    <img onLoad={handleImage} loading="lazy" src="./header-slider-02.jpg" alt="project" />
                </div>

            </div>

            <div className="relative">
                <div className="my-6 [&_*]:text-4xl [&_*]:tracking-tighter [&>h3]:w-fit [&>h3]:mx-auto [&>h3]:text-center [&_span]:font-bold">
                    <h3>PROYECTOS <span>SELECCIONADOS</span></h3>
                </div>

                <div className="relative [&>div]:mb-5 md:[&>div]:mb-10">
                   
                    <div className="relative"> 
                    
                        <ProjectCards projects={projects}/>
                        
                    </div>

                    <div className="mt-10 max-w-full flex justify-center gap-5  [&>button]:bg-gray-900 [&>a]:bg-red-500 [&_*]:py-2 sm:[&_*]:py-4 [&_*]:px-4 sm:[&_*]:px-8 [&_*]:rounded-lg [&_*]:text-lg [&_*]:font-bold [&_*]:text-gray-50 hover:[&>button]:bg-red-500 hover:[&>a]:bg-gray-900 [&_*]:transition-all [&_*]:duration-200 hover:[&_*]:transform hover:[&_*]:scale-110 ">
                        <button type="button">CONOCE MÁS</button>
                        <a target="blank" href="https://www.instagram.com/piedra.construcciones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">VER GALERÍA</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

// {
//     amount?.map(card => (
//         <div key={card.id} className="rounded-xl mx-4 lg:mx-10 xl:mx-20 flex justify-center items-center md:items-start flex-col md:flex-row bg-gradient-to-b md:bg-gradient-to-r from-transparent to-slate-200 ">

//             <div className="inline-flex gap-5 flex-shrink flex-grow md:[&>div]:max-w-xs xl:[&>div]:max-w-sm [&>div]:overflow-hidden [&>div]:rounded-xl [&_img]:w-full [&_img]:h-full [&_img]:aspect-square [&_img]:object-cover">
//                 <div className="hidden lg:block"><img src={card.before} alt={card.title}/></div>
//                 <div><img src={card.after} alt={card.title} /></div>   
//             </div>

//             <div className="flex-shrink flex flex-col items-center md:block  flex-grow basis-1/2 lg:basis-2/5 p-4 md:p-5">

//                 <div className="[&>h4]:text-3xl [&>h4]:font-semibold [&>h4]:mb-5 [&_*]:text-center md:[&_*]:text-left [&>p]:text-base [&>p]:leading-5">
//                     <h4>{card.title}</h4>
//                     <p>{card.text}</p>
//                 </div>
//                 <div className="mt-5 xl:mt-10 [&_*]:w-fit [&_*]:bg-red-500 [&_*]:py-2 [&_*]:px-4 [&_*]:rounded-lg [&_*]:font-bold [&_*]:text-gray-50 hover:[&_*]:bg-gray-900 [&_*]:transition-all [&_*]:duration-200 hover:[&_*]:transform hover:[&_*]:scale-110 ">
//                     <button type="button">CONOCER</button>
//                 </div>

//             </div>
//         </div> 
//     ))
// }