/* eslint-disable react/prop-types */

import { useState } from "react"
import servicesCards from "../data/servicesCards"
import { Loader } from "./Loader"

export function Services({ servicesRef }) {


    const [ loading , setLoading ] = useState(true)
    const handleImage = () => {
        setLoading(false)
    }

    return (
        <section ref={servicesRef} className="relative pt-10 mt-0 md:pt-20 md:mt-10 max-w-full mx-5 lg:mx-20 before:absolute before:content-[&quot;&quot;] before:top-0 before:left-1/4 before:h-1 before:w-1/2 before:bg-gray-300">
            <header className="mx-auto max-w-4xl [&_*]:text-center  [&>h1]:mb-6 [&>p]:my-6">
                <h2>EXPLORE NUESTRO <br/><span className="text-3xl sm:text-4xl md:text-5xl font-bold">CATÁLOGO DE SERVICIOS</span></h2>
                <p><span className="font-semibold sm:text-lg">PIEDRA construcciones</span> se destaca por ofrecer una amplia gama de servicios de construcción.<br/>Desde remodelaciones hasta proyectos residenciales y comerciales</p>
            </header>

            <main className="my-10 [&>div]:mb-5 ">
                {
                    servicesCards?.map(card => (
                        <div key={card.id} className={`bg-gradient-to-t md:bg-gradient-to-l from-gray-100 rounded-b-3xl md:rounded-e-3xl justify-center items-center gap-5 lg:gap-10  flex flex-col ${card.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>

                            <div className="relative flex-shrink flex-grow basis-1/2 flex items-center overflow-hidden min-w-[100px] min-h-[290px] xl:min-h-[430px] max-h-[260px] sm:max-h-[400px] lg:max-h-[320px] xl:max-h-[440px] rounded [&>img]:w-full [&>img]:h-auto">
                                {loading && <Loader/>}
                                <img loading="lazy" onLoad={handleImage} src={card.img} alt={card.title} />
                            </div>
    
                            <div className="flex-shrink flex-grow basis-1/2">
                                <div className="flex justify-center mb-5 md:mb-10 md:justify-start items-center gap-5 md:gap-11 [&>img]:max-w-11 lg:[&>img]:max-w-20 [&>span]:text-3xl md:[&>span]:text-4xl [&>span]:font-semibold ">
                                    <img src={card.icon} alt={card.title} />
                                    <span>{card.title}</span>
                                </div>
                        
                                <div className="mx-3 my-5 text-center md:text-left md:ml-0 md:mr-5 [&>p]:text-base lg:[&>p]:text-lg">
                                    <p>{card.text}</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </main>
            
        </section>
    )
}