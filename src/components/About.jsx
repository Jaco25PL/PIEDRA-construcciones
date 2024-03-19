import { AutoSlider } from "./AutoSlider"
import { CTABtn } from "./CTABtn"
import { WhyUs } from "./WhyUs"


export function About() {



    return(
        <section>
            <div className='max-w-full sm:mx-0 md:mx-20 xl:mx-40 relative '>
                <div className=' mt-9 pt-10 flex flex-col items-center before:content-[""] before:absolute before:top-0  before:h-1 before:w-1/2 before:bg-gray-300 '>

                    <div className="text-center">
                        <h2 className="text-center mb-6">CONOCÉ AL <span className="font-bold text-5xl">EQUIPO</span></h2>
                        <p className="mb-3 max-w-4xl">Lorem, dolor sit amet consectetur adipisicin quaerat deserunt harum neque soluta repellat dolores quia fugit rem!</p>
                        <p className="max-w-4xl">Lorem,her ewill be more words than the text of above os be createive  dolor sit amet consectetur adipisicin quaerat deserunt harum neque soluta repellat dolores quia fugit rem!</p>
                    </div>

                    <div className="max-w-lg md:max-w-xl overflow-hidden mx-4 md:mx-0 my-10">
                        <img className="w-full h-auto bg-center bg-cover rounded-xl" src="./header-slider-01.webp" alt="team" />
                    </div>

                    <div className="text-center [&>*]:mx-auto mb-6">
                        <h2 className="text-5xl tracking-tighter mb-6">¿QUIÉNES NOS <span className="text-5xl font-bold">RECOMIENDAN</span>?</h2>
                        <p className="max-w-xl">Basta de hablar de nosotros mismos, dejemos que nuestros clientes hablen por nuestro trabajo</p>
                    </div>
                    <AutoSlider/>
                </div>
            </div>
               
            <WhyUs/>

            <div className=" max-w-full flex justify-center">
                <CTABtn action="button" name="Comunicate" />
            </div>

        </section>

            
    )
}