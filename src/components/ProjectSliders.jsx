/* eslint-disable react/prop-types */

export function ProjectSliders({ card, currentIndex, handleClose, handleNext, handlePrev, manualScroll, handleAutoScroll }) {

    return (
        <>
        {/* mobile */}
            <div onTouchMove={handleAutoScroll} className="md:hidden resize-none overflow-x-auto scrollbar-none scrollbar-webkit">
                <div className={`inline-flex ${manualScroll ? "animate-none" : "animate-infinite-scroll-slow"} items-center`}>
                    {
                        card?.images.map((img, index) => (
                            <div key={index} className="h-fit w-[370px] m-2 overflow-hidden rounded">
                                <img  src={img} alt="project" className=""/>
                            </div>
                        ))
                    }
                </div>
            </div>

        {/* desktop */}

            <div  className=" lg:w-10/12  hidden md:flex justify-center">
                <div className="max-h-dvh md:p-2 px-0 flex flex-col items-center justify-center [&>img]:w-auto [&>img]:rounded [&>img]:h-full [&>img]:duration-500">
                    <img src={card.images[currentIndex]} alt="image" loading="lazy"/>
                </div>
            </div>

            <div className="absolute right-5 bottom-10 md:top-3 [&_*]:w-fit [&_*]:bg-red-500 [&_*]:py-3 [&_*]:px-4 [&_*]:rounded-lg [&_*]:font-bold [&_*]:text-gray-50 hover:[&_*]:bg-gray-900 [&_*]:transition-all [&_*]:duration-200 hover:[&_*]:transform hover:[&_*]:scale-110 ">
                <button onClick={handleClose} type="button">VOLVER</button>
            </div>
            
            <button onClick={() => handlePrev(card.images)} className="hidden md:block" type="button"><img className="max-w-14 lg:max-w-20 absolute left-0 xl:left-5 rotate-180 hover:transform hover:scale-110 active:transform active:scale-95 transition-all duration-200 ease-in-out " src="./icons/arrow.svg" alt="arrow" /></button>
            <button onClick={() => handleNext(card.images)} className="hidden md:block" type="button"><img className="max-w-14 lg:max-w-20 absolute right-0  xl:right-5  hover:transform hover:scale-110 active:transform active:scale-95 transition-all duration-200 ease-in-out " src="./icons/arrow.svg" alt="arrow" /></button>

        </>
    )
}