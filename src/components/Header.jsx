import { CTABtn } from "./CTABtn"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import headerSlider from "../data/headerSlider"
import { motion } from "framer-motion"

export function Header() {

    return(
      <section  className='mx-0 md:mx-20 xl:mx-40'>
        
        <div className='mt-10 lg:mt-0 sm:mx-4 flex flex-col items-center'>
          <motion.div 
            initial={{ opacity: 0 }}
            transition={{duration: 1.5}}
            whileInView={{ opacity: 1 }}
            viewport={{once: true}}
            className='whitespace-nowrap flex justify-center mx-2 mb-10 lg:my-16 max-w-4xl [&>h1]:text-center lg:[&>h1]:text-7xl [&_span]:font-bold [&_span]:text-3xl sm:[&_span]:text-4xl md:[&_span]:text-5xl lg:[&_span]:text-7xl'>
            <h1>UNA<br className="sm:hidden"/> EMPRESA DE <span>CONFIANZA</span></h1>
          </motion.div>
          
          <div className='mx-4 md:mx-0 text-center mb-6 max-w-4xl'>
            <motion.p
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 , duration: 1}}
            whileInView={{ opacity: 1 }}
            viewport={{once: true}}
            >En <span className="font-semibold sm:text-lg">PIEDRA construcciones</span>, construimos hogares y proyectos de calidad con más de <span className="font-semibold sm:text-lg">40 años de experiencia</span>. Nuestro equipo familiar, obsesionado con los detalles, se compromete a convertir tu visión en realidad. Confía en nosotros para la excelencia en cada paso del camino</motion.p>
          </div>
          
          <motion.div
            initial={{y:100 , opacity: 0}}
            transition={{delay: 0.5, duration: 1.5, type: "spring", stiffness: 100, damping: 15}}
            whileInView={{y: 0 , opacity: 1}}
            viewport={{once: true}}
          >
            <Swiper 
              slidesPerView={"auto"}
              spaceBetween={5} 
              centeredSlides={true}
              lazy="load"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[ Autoplay, Pagination ]}
              className="mySwiper overflow-hidden sm:rounded-md lg:max-h-[600px] xl:max-w-[900px] sm:[&_img]:rounded-md lg:[&_img]:w-full"
            >
              {
                headerSlider?.map(e => (
                  <SwiperSlide key={e.id}>
                    <img src={e.img} alt="PIEDRA" loading="lazy"/>
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </motion.div>
          
          <CTABtn action="button" name="Escríbenos"/>
          
          <motion.div 
            initial={{ opacity: 0 , scale: 0.8}}
            transition={{delay: 0, duration: 1}}
            whileInView={{ opacity: 1 , scale: 1 }}
            className='my-10 md:my-20 text-center '>
              <h2 className='text-7xl sm:text-9xl font-bold tracking-wider '>PIEDRA</h2>
              <p className='text-5xl sm:text-7xl tracking-tight relative -top-4'>construcciones</p>
          </motion.div>

        </div>

      </section>
    )
}