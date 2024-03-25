/* eslint-disable react/prop-types */


export function ProjectSliders({ card, currentIndex, handleClose, handleNext, handlePrev }) {

    return (
        <>
        {/* mobile */}
            <div  className=" md:hidden md:mx-16 lg:w-10/12 h-1/2 md:h-5/6 flex flex-col justify-center items-start resize-none overflow-x-auto scrollbar-none scrollbar-webkit md:rounded-xl">
                <div className="inline-flex ">
                    {
                        card?.images.map((img, index) => (
                            <div key={index} className="h-fit w-[370px] md:w-[700px] m-2 overflow-hidden rounded-lg">
                                <img  src={img} alt="project" className=""/>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="md:hidden absolute h-4 w-full bottom-52 bg-white">
                <div className="relative h-2 w-3/4 bg-gray-950 rounded-full mx-auto top-1 animate-infinite-scroll"></div>
            </div>


        {/* desktop */}
            <div  className="md:mx-16 lg:w-10/12 h-1/2 md:h-5/6 hidden md:flex justify-center overflow-hidden md:rounded-xl bg-gray-900 bg-opacity-70">
                <div className="w-[1000px] flex flex-col items-center justify-center [&>img]:w-full [&>img]:h-auto [&>img]:duration-500">
                    <img src={card.images[currentIndex]} alt="image"/>
                </div>
            </div>

            <div className="absolute right-5 bottom-10 md:top-3 [&_*]:w-fit [&_*]:bg-red-500 [&_*]:py-3 [&_*]:px-4 [&_*]:rounded-lg [&_*]:font-bold [&_*]:text-gray-50 hover:[&_*]:bg-gray-900 [&_*]:transition-all [&_*]:duration-200 hover:[&_*]:transform hover:[&_*]:scale-110 ">
                    <button onClick={handleClose} type="button">VOLVER</button>
            </div>
            
            <button onClick={() => handlePrev(card.images)} className="hidden md:block" type="button"><img className="max-w-14 lg:max-w-20 absolute left-0 rotate-180 hover:transform hover:scale-110 active:transform active:scale-95 transition-all duration-200 ease-in-out " src="./icons/arrow.svg" alt="arrow" /></button>
            <button onClick={() => handleNext(card.images)} className="hidden md:block" type="button"><img className="max-w-14 lg:max-w-20 absolute right-0  hover:transform hover:scale-110 active:transform active:scale-95 transition-all duration-200 ease-in-out " src="./icons/arrow.svg" alt="arrow" /></button>

        </>
    )
}