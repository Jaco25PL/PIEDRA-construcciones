/* eslint-disable react/prop-types */

import { useState , useRef } from "react"
import projects from "../data/projects"
import projectMobile from "../data/projectMobile"
import { Loader } from "./Loader"
import { ProjectCards } from "./ProjectCards"

export function Projects({ projectsRef }) {

    const [ loading , setLoading ] = useState(true)
    const handleImage = () => {
        setLoading(false)
    }

    const imgContRef = useRef(null)

    const [ newProjects , setNewProjects ] = useState(projects.slice(0, 2))
    const [ handleView, setHandleView ] = useState(false)

    const handleProjectsView = () => {
        const imgContH = imgContRef.current.getBoundingClientRect().top + window.scrollY - 200
        
        if(!handleView){
            setNewProjects(projects)
        }else{
            setNewProjects(projects.slice(0, 2))
            if(imgContRef.current){
                window.scrollTo({ top: imgContH, behavior: "auto"})
            }
        }
        setHandleView(!handleView)
    }

    return(
        <section ref={projectsRef} className="relative max-w-full">
            
            <div className="flex flex-col items-center sm:mx-0 md:mx-20 xl:mx-40">
                <div className="mx-4  md:mx-0 [&>*]:text-center [&>p]:max-w-4xl [&>p]:my-6 ">
                    <div className="[&>*]:text-center [&_span]:text-3xl sm:[&_span]:text-4xl md:[&_span]:text-5xl [&_span]:font-bold [&_span]:tracking-tighter">
                        <h2>DETRÁS DE CADA PROYECTO<br/><span>HAY UNA HISTORIA</span></h2>
                    </div>
                    <p>En <span className="font-semibold sm:text-lg">PIEDRA construcciones</span>, no solo construimos, sino que transformamos sueños en realidad.<br/>Descubre la creatividad e innovación que ofrecemos en cada obra</p>
                </div>

                <div className="relative flex items-center overflow-hidden md:rounded-md max-w-5xl xl:w-full xl:px-20 [&>img]:bg-center [&>img]:cover [&>img]:w-full [&>img]:h-auto md:[&>img]:rounded-md">
                    { loading && <Loader/> }
                    <img onLoad={handleImage} loading="lazy" src="./projects/truck-2.avif" alt="project" />
                </div>

            </div>

            <div className="relative">
                <div className="my-6 [&_*]:text-4xl [&_*]:tracking-tighter [&>h3]:w-fit [&>h3]:mx-auto [&>h3]:text-center [&_span]:font-bold">
                    <h3>PROYECTOS <span>SELECCIONADOS</span></h3>
                </div>

                <div className="relative [&>div]:mb-5 md:[&>div]:mb-10">
                   
                    <div  ref={imgContRef}  className="relative"> 
                        <ProjectCards projectMobile={projectMobile} newProjects={newProjects}/>
                    </div>

                    <div className="mt-10 max-w-full flex justify-center gap-5  [&>button]:bg-gray-900 [&>a]:bg-red-500 [&_*]:py-2 sm:[&_*]:py-4 [&_*]:px-4 sm:[&_*]:px-8 [&_*]:rounded-lg [&_*]:text-lg [&_*]:font-bold [&_*]:text-gray-50 hover:[&>button]:bg-red-500 hover:[&>a]:bg-gray-900 [&_*]:transition-all [&_*]:duration-200 hover:[&_*]:transform hover:[&_*]:scale-110 ">
                        <button onClick={handleProjectsView} type="button">{handleView ? "VER MENOS" : "CONOCE MÁS"}</button>
                        <a target="blank" href="https://www.instagram.com/piedra.construcciones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">VER TODOS</a>
                    </div>
                </div>

            </div>
        </section>
    )
}