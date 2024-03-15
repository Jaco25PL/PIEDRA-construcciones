import clientCards from "../data/userFeedback"

export function About() {

    return(
        <section className='max-w-full sm:mx-0 md:mx-20 xl:mx-40 relative'>
            <div className=' mt-9 pt-9 flex flex-col items-center before:content-[""] before:absolute before:top-0  before:h-1 before:w-1/2 before:bg-gray-300 '>

                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6">Conocenos</h1>
                    <p className="mb-3 max-w-4xl">Lorem, dolor sit amet consectetur adipisicin quaerat deserunt harum neque soluta repellat dolores quia fugit rem!</p>
                    <p className="max-w-4xl">Lorem,her ewill be more words than the text of above os be createive  dolor sit amet consectetur adipisicin quaerat deserunt harum neque soluta repellat dolores quia fugit rem!</p>
                </div>

                <div className="max-w-lg md:max-w-xl overflow-hidden my-10">
                    <img className="w-full h-auto bg-center bg-cover rounded-xl" src="./header-slider-01.webp" alt="team" />
                </div>

                <div className="text-center mb-6">
                    <h1 className="text-5xl font-semibold mb-6">Nuestros clientes</h1>
                    <p className="max-w-xl">Basta de hablar de nosotros mismos, dejemos que nuestros clientes hablen por nuestro trabajo</p>
                </div>

                <div 
                
                className="max-w-full inline-flex flex-nowrap overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-200px),transparent_100%)]">
                    {/* <div className="grid grid-flow-col my-6 gap-6 animate-infinite-scroll"> */}
                    <div className="flex items-center justify-center my-6 gap-6 animate-infinite-scroll">
                        {
                            clientCards?.map(clientCard => (
                                <div key={clientCard.id} className={`px-6 py-10 rounded-xl ${clientCard.id % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}`}>
                                    <div className="mb-10 flex w-full gap-10 items-center">
                                        <img className="max-w-24 h-auto rounded-full" src={clientCard.img} alt={clientCard.userName} />
                                        <h5 className="text-lg font-medium">{clientCard.userName}</h5>
                                    </div>
                                    <div className="h-32 flex-col flex justify-between mx-2 text-center">
                                        <p className="text-base leading-5 italic mb-4">"{clientCard.userQuote}"</p>
                                        <img className="mx-auto max-w-40 h-auto bg-center bg-cover" src="./rating-stars.svg" alt="stars" />
                                    </div>
                                </div>
                            ))
                        }
                    </div> 
                </div>

                <div>ranking</div>
            </div>

        </section>
    )
}