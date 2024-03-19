// import { useRef, useEffect } from "react"

import whyUsCard from "../data/whyUsCards"

export function WhyUs() {
    

    const cardData = whyUsCard.slice(0, 3)


    // const eRef = useRef(null)

    // useEffect(() =>{
  
    //   const element = eRef.current
  
    //   const getElementPosition = (e) => {
    //     const position = e.getBoundingClientRect()
    //     return position.top
    //   }
  
    //   const fPosition = getElementPosition(element)
  
    //   console.log(`Position: ${fPosition}`)
  
    // },[])

    return(
        <section className="mt-20 max-w-full sm:mx-4 lg:mx-20 relative ">
               
            <div className="mb-12">
                <h2 className="tracking-tighter text-5xl text-center">¿POR QUÉ NOS <span className="text-5xl font-bold">ELIGEN</span>?</h2>
            </div>

            <div>
                    {
                        cardData?.map(card => (
                            <div key={card.id} className="relative bg-gradient-to-t md:bg-gradient-to-l from-gray-100 rounded-b-3xl md:rounded-e-3xl my-10 flex flex-col mx-4 md:mx-0 md:flex-row justify-center items-center gap-5 lg:gap-10">

                                <div className="flex-shrink flex-grow basis-3/5 overflow-hidden rounded-xl">
                                    <img className="w-full h-auto" src={card.img} alt={card.title} />
                                </div>

                                <div className=" pb-5 md:pb-0 px-5 md:pl-0 flex-shrink flex-grow basis-2/4">
                                    <div className="w-full mb-4 inline-flex gap-5 md:gap-10 items-center justify-center md:justify-start">
                                            <div className="max-w-14 md:max-w-16 lg:max-w-20 [&>img]:w-full [&>img]:h-auto"><img src={card.icon} alt={card.title} /></div>
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