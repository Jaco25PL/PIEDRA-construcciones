import { useEffect, useRef } from "react"
import clientCards from "../data/userFeedback"

export function AutoSlider() {

    const sliderRef = useRef(null)

    useEffect(() => {
        const slider = sliderRef.current
        const sliderClone = slider.cloneNode(true)
        sliderClone.setAttribute('aria-hidden', 'true')
        slider.parentNode.insertBefore(sliderClone, slider.nextSibiling)
    },[])
    
    return(
        <div className="w-full flex justify-center ">
            <div className=" inline-flex flex-nowrap overflow-hidden w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div ref={sliderRef} className="flex flex-nowrap animate-infinite-scroll-v2 md:animate-infinite-scroll">
                    {
                        clientCards?.map(clientCard => (
                            <div key={clientCard.id} className={`w-80 h-80 mx-3 md:mx-6 py-5 px-3 md:py-10 md:px-6rounded-xl ${clientCard.id % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}`}>
                                <div className="mb-6 flex w-full gap-5 md:gap-10 items-center">
                                    <img className="w-20 md:max-w-24 h-auto rounded-full" src={clientCard.img} alt={clientCard.userName} />
                                    <h5 className="text-lg font-medium">{clientCard.userName}</h5>
                                </div>
                                <div className="h-28 mx-2 text-center">
                                    <p className="text-base leading-5 italic mb-2">{clientCard.userQuote}</p>
                                </div>
                                <img className=" mx-auto max-w-40 h-auto bg-center bg-cover" src="./icons/rating-stars.svg" alt="stars" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}