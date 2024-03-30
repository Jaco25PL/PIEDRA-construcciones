/* eslint-disable react/prop-types */
import { useState } from "react"
import { AutoSlider } from "./AutoSlider"
import { CTABtn } from "./CTABtn"
import { WhyUs } from "./WhyUs"
import { Loader } from "./Loader"
import { motion } from "framer-motion"

export function About({ aboutRef }) {

    const [ loading , setLoading ] = useState(true)

    const handleImage = () => {
        setLoading(false)
    }

    return(
        <section ref={aboutRef}>
            <div className='max-w-full sm:mx-0 md:mx-20 xl:mx-40 relative '>
                <div className=' mt-9 pt-10 flex flex-col items-center before:content-[""] before:absolute before:top-0  before:h-1 before:w-1/2 before:bg-gray-300 '>

                    <div className="[&_*]:text-center [&>p]:max-w-4xl [&>p]:mx-4 md:[&>p]:mx-0">
                        <motion.h2
                        initial={{ opacity: 0 }}
                        transition={{duration: 1}}
                        whileInView={{ opacity: 1 }}
                        viewport={{once: true}}
                        className=" mb-6 [&>span]:font-bold [&>span]:text-3xl sm:[&>span]:text-4xl md:[&>span]:text-5xl" >CONOCE AL <span className="font-bold text-5xl">EQUIPO</span></motion.h2>
                        <motion.p 
                        initial={{ opacity: 0 }}
                        transition={{delay: 0.5,duration: 1}}
                        whileInView={{ opacity: 1 }}
                        viewport={{once: true}}
                        className="mb-3 "><span className="font-semibold sm:text-lg">Calidad y confianza</span>. Resultados destacados en cada proyecto, construyendo relaciones duraderas con nuestros clientes</motion.p>
                        <motion.p
                        initial={{ opacity: 0 }}
                        transition={{delay: 0.8,duration: 1}}
                        whileInView={{ opacity: 1 }}
                        viewport={{once: true}}
                        >Cada proyecto es una oportunidad para brillar, entregando resultados que superan tus expectativas y <span className="font-semibold sm:text-lg">fortalecen nuestra relación contigo</span></motion.p>
                    </div>

                    <motion.div
                        initial={{y: 100}}
                        transition={{delay: 0, duration: 1, type: "spring", stiffness: 100, damping: 15}}
                        whileInView={{ y: 0 }}
                        viewport={{once: true}}
                    className="relative min-w-[200px] min-h-[260px] xl:min-h-[380px] flex items-center max-w-lg md:max-w-xl overflow-hidden rounded-md mx-4 md:mx-0 my-10 [&>img]:bg-cover [&>img]:bg-center [&>img]:h-auto [&>img]:w-full">
                        { loading && <Loader/> }
                        <img onLoad={handleImage} loading="lazy" src="./header-slider/truck.avif" alt="team" />
                    </motion.div>

                    <div className="text-center [&>*]:mx-auto mb-6 [&_span]:text-3xl sm:[&_span]:text-4xl md:[&_span]:text-5xl [&_span]:font-bold">
                        <motion.h2
                        initial={{ opacity: 0 }}
                        transition={{duration: 1}}
                        whileInView={{ opacity: 1 }}
                        viewport={{once: true}}
                        className="mb-6">¿QUIÉNES NOS <span>RECOMIENDAN</span>?</motion.h2>
                        <motion.p
                        initial={{ opacity: 0 }}
                        transition={{delay: 0.5,duration: 1}}
                        whileInView={{ opacity: 1 }}
                        viewport={{once: true}}
                        className="px-4 px:mx-0 max-w-xl">Dejemos que nuestros clientes hablen por nosotros. Sus experiencias son la mejor evidencia de nuestro trabajo de calidad</motion.p>
                    </div>

                    <AutoSlider/>
               
                </div>
            </div>
               
            <WhyUs/>

            <motion.div 
            initial={{ opacity: 0 }}
            transition={{delay: 0.2,duration: 1}}
            whileInView={{ opacity: 1 }}
            className=" max-w-full flex justify-center">
                <CTABtn action="button" name="Comunícate" />
            </motion.div>

        </section>

            
    )
}