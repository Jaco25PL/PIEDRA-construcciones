import { AutoSlider } from "./AutoSlider"
import { CTABtn } from "./CTABtn"
import { WhyUs } from "./WhyUs"


export function About() {



    return(
        <section>
            <div className='max-w-full sm:mx-0 md:mx-20 xl:mx-40 relative '>
                <div className=' mt-9 pt-10 flex flex-col items-center before:content-[""] before:absolute before:top-0  before:h-1 before:w-1/2 before:bg-gray-300 '>

                    <div className="[&_*]:text-center [&>p]:max-w-4xl [&>p]:mx-4 md:[&>p]:mx-0">
                        <h2 className=" mb-6 [&>span]:font-bold [&>span]:text-3xl sm:[&>span]:text-4xl md:[&>span]:text-5xl" >CONOCE AL <span className="font-bold text-5xl">EQUIPO</span></h2>
                        <p className="mb-3 "><span className="font-semibold sm:text-lg">Calidad y confianza</span>. Resultados destacados en cada proyecto, construyendo relaciones duraderas con nuestros clientes</p>
                        <p>Cada proyecto es una oportunidad para brillar, entregando resultados que superan tus expectativas y <span className="font-semibold sm:text-lg">fortalecen nuestra relación contigo</span></p>
                    </div>

                    <div className="max-w-lg md:max-w-xl overflow-hidden mx-4 md:mx-0 my-10">
                        <img className="w-full h-auto bg-center bg-cover rounded-xl" src="./header-slider-01.webp" alt="team" />
                    </div>

                    <div className="text-center [&>*]:mx-auto mb-6 [&_span]:text-3xl sm:[&_span]:text-4xl md:[&_span]:text-5xl [&_span]:font-bold">
                        <h2 className="mb-6">¿QUIÉNES NOS <span>RECOMIENDAN</span>?</h2>
                        <p className="px-4 px:mx-0 max-w-xl">Dejemos que nuestros clientes hablen por nosotros. Sus experiencias son la mejor evidencia de nuestro trabajo de calidad</p>
                    </div>

                    <AutoSlider/>
               
                </div>
            </div>
               
            <WhyUs/>

            <div className=" max-w-full flex justify-center">
                <CTABtn action="button" name="Comunícate" />
            </div>

        </section>

            
    )
}