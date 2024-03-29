import { CTABtn } from "./CTABtn"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import headerSlider from "../data/header-slider"

export function Header() {

    return(
      <section  className='mx-0 md:mx-20 xl:mx-40'>
        
        <div className='mt-10 sm:mx-4 flex flex-col items-center'>
          <div className='mx-2 max-w-4xl [&>h1]:text-center [&_span]:font-bold [&_span]:text-3xl sm:[&_span]:text-4xl md:[&_span]:text-5xl'>
            <h1>ENTREGAMOS LA <span>MÁXIMA CALIDAD</span> EN TODO LO QUE HACEMOS</h1>
          </div>
          
          <div className='mx-4 md:mx-0 text-center my-6 max-w-4xl'>
            <p>En <span className="font-semibold sm:text-lg">PIEDRA construcciones</span>, construimos hogares y proyectos de calidad con más de <span className="font-semibold sm:text-lg">40 años de experiencia</span>. Nuestro equipo familiar, obsesionado con los detalles, se compromete a convertir su visión en realidad. Confíe en nosotros para la excelencia en cada paso del camino</p>
          </div>
          
          <div>
            <Swiper 
              slidesPerView={"auto"}
              spaceBetween={5} 
              centeredSlides={true}
              lazy="load"
              autoplay={{
                delay: 3000,
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
          </div>
          
          <CTABtn action="button" name="Escríbenos"/>
          
          <div className='my-10 md:my-20 text-center '>
            <h2 className='text-7xl sm:text-9xl font-bold tracking-wider '>PIEDRA</h2>
            <p className='text-5xl sm:text-7xl tracking-tight relative -top-4'>construcciones</p>
          </div>
        
        </div>

      </section>
    )
}