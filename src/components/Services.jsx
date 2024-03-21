import servicesCards from "../data/servicesCards"


export function Services() {

    return (
        <section className="max-w-full mx-5 lg:mx-20">
            <header className="mx-auto max-w-4xl [&_*]:text-center  [&>h1]:mb-6 [&>p]:my-6">
                <h2>EXPLORE NUESTRO <br/><span className="text-3xl sm:text-4xl md:text-5xl font-bold">CATÁLOGO DE SERVICIOS</span></h2>
                <p><span className="font-semibold sm:text-lg">PIEDRA construcciones</span> se destaca por ofrecer una amplia gama de servicios de construcción. Desde remodelaciones hasta proyectos residenciales y comerciales</p>
            </header>

            <main className="my-10 [&>div]:mb-5">
                {
                    servicesCards?.map(card => (
                        <div key={card.id} className={`bg-gradient-to-t md:bg-gradient-to-l from-gray-100 rounded-b-3xl md:rounded-e-3xl justify-center items-center gap-5 lg:gap-10  flex flex-col ${card.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>

                            <div className="flex-shrink flex-grow basis-1/2 overflow-hidden rounded-xl">
                                <img src={card.img} alt={card.title} />
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



{/* <div className="bg-gradient-to-t md:bg-gradient-to-l from-gray-100 rounded-b-3xl md:rounded-e-3xl flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10">

<div className="flex-shrink flex-grow basis-3/5 overflow-hidden rounded-xl">
    <img src="./header-slider-03.jpg" alt="Servicio" />
</div>

<div className="flex-shrink flex-grow basis-2/4">
    <div className="flex justify-center mb-5 md:mb-10 md:justify-start items-center gap-11 [&>img]:max-w-14 lg:[&>img]:max-w-20 [&>span]:text-4xl [&>span]:font-semibold ">
        <img src="./icons/brickwall.png" alt="Icon" />
        <span>RENOVACION</span>
    </div>

    <div className="m-5 text-center md:text-left md:ml-0 md:mr-5 [&>p]:text-base lg:[&>p]:text-lg">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum unde, facere voluptate tempora a labore commodi perferendis repellat saepe dolorem at exercitationem ullam quae ex ipsam obcaecati delectus omnis qui praesentium excepturi. Nihil in impedit dolor, nostrum eum quo sed accusamus vel voluptatem labore commodi vitae distinctio quae aperiam.</p>
    </div>
</div>
</div> */}