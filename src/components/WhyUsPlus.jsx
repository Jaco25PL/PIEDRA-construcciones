import whyUsCard from "../data/whyUsCards"

export function WhyUsPlus() {

    const cardData = whyUsCard?.slice(3, 4)

    return(
        <section className="w-full my-10 pt-10 pb-5 relative after:absolute after:content-[''] after:bottom-0 after:left-1/4 after:h-1 after:w-1/2 after:bg-gray-300">

            <header className="w-full [&_*]:w-fit [&_*]:mx-auto [&_*]:text-center [&_span]:text-3xl sm:[&_span]:text-4xl md:[&_span]:text-5xl [&_span]:font-bold [&_span]:tracking-tighter before:absolute before:content-[''] before:top-0 before:left-1/4 before:h-1 before:w-1/2 before:bg-gray-300 ">
                <h2>¿POR QUÉ NO <span>INVERTIR</span> EN EL <br/>FUTURO DE TU HOGAR?</h2>
            </header>

            <div className="sm:mx-4 lg:mx-20">
                {
                    cardData?.map(card => (
                        <div key={card.id} className="relative bg-gradient-to-t md:bg-gradient-to-l from-gray-100 rounded-b-3xl md:rounded-e-3xl my-10 flex flex-col mx-4 md:mx-0 md:flex-row justify-center items-center gap-5 lg:gap-10">
                            <div className="flex-shrink flex-grow basis-3/5 overflow-hidden rounded-xl">
                                <img className="w-full h-auto" src={card.img} alt={card.title} />
                            </div>
                            <div className=" pb-5 md:pb-0 px-5 md:pl-0 flex-shrink flex-grow basis-2/4">
                                <div className="w-full mb-4 inline-flex gap-5 md:gap-10 items-center justify-center md:justify-start">
                                        <div className="max-w-12 md:max-w-16 lg:max-w-20 [&>img]:w-full [&>img]:h-auto"><img src={card.icon} alt={card.title} /></div>
                                        <div className="[&>h3]:font-bold [&>h3]:text-3xl md:[&>h3]:text-4xl">
                                            <h3>{card.title}</h3>
                                        </div>
                                </div>
                                <ul className="[&>li]:w-fit lg:[&>li]:text-lg xl:[&>li]:text-xl [&>li]:pb-1 md:[&>li]:pb-3 [&>li]:inline-flex [&>li]:items-center [&>li]:gap-5 tracking-tight flex flex-col md:block">
                                    <li><img className="max-w-10" src="./icons/icon-done.svg" alt="done"/>{card.txI}</li>
                                    <li><img className="max-w-10" src="./icons/icon-done.svg" alt="done"/>{card.txII}</li>
                                    <li><img className="max-w-10" src="./icons/icon-done.svg" alt="done"/>{card.txIII}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        
        </section>
    )
}



