/* eslint-disable react/prop-types */

import { useState } from "react"
import { ProjectSliders } from "./ProjectSliders"

export function ProjectCards( {newProjects} ) {

    const [ open, setOpen ] = useState(false)
    const [ currentIndex , setCurrentIndex ] = useState(0)
    const [ manualScroll, setManualScroll ] = useState(false)

// handle open card
    const handleImage = ( data ) => {
        const newCard = { ...open, [data.id]: !open[data.id] || false}
        setOpen(newCard)
        setCurrentIndex(0)
        document.body.style.overflow = "hidden"
    }
    const handleClose = () => {
        setOpen(!open)
        document.body.style.overflow = "auto"
        setManualScroll(false)
    }

// desktop gallery
    const handleNext = (card) => {
        const isLast = currentIndex === card.length -1
        const newIndex = isLast ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const handlePrev = (card) => {
        const isFirst = currentIndex === 0
        const newIndex = isFirst ? card.length -1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

// mobile auto slider
    const handleAutoScroll = () => {
        setManualScroll(true)
    }
    
    return(
        <>
            {
                newProjects?.map(card => (
                    <div key={card.id} className="mb-5 rounded-xl mx-4 lg:mx-10 xl:mx-20 flex justify-center items-center md:items-start flex-col md:flex-row bg-gradient-to-b md:bg-gradient-to-r from-transparent to-slate-200 ">
                        
                        <div className=" sm:grid grid-flow-col grid-rows-1 gap-5  flex-shrink flex-grow basis-1/2">
                            {
                                card.images.slice(0, 2).map((img, index) => (
                                    <div key={index} className="hidden sm:block overflow-hidden rounded-xl [&_img]:w-full [&_img]:aspect-square [&_img]:object-cover">
                                        <img src={img} alt="project"/>
                                    </div>
                                ))
                            }
                            {
                                card.images.slice(0, 1).map((img, index) => (
                                    <div key={index} className="block sm:hidden overflow-hidden rounded-xl [&_img]:w-full [&_img]:h-full [&_img]:aspect-square [&_img]:object-cover">
                                        <img src={img} alt="project"/>
                                    </div>
                                ))
                            }
                        </div>
                                             
                        <div className="md:pl-10 md:p-5 p-4 flex flex-col items-center gap-5 md:block  flex-shrink flex-grow basis-1/2   "> 
                             <div className="[&>h4]:text-3xl [&>h4]:font-semibold [&>h4]:mb-5 [&_*]:text-center md:[&_*]:text-left [&>p]:text-base [&>p]:leading-5">
                                <h4>{card.title}</h4>
                                <p>{card.text}</p>
                            </div>
                            <div className="mt-5 xl:mt-10 [&_*]:w-fit [&_*]:bg-red-500 [&_*]:py-2 [&_*]:px-4 [&_*]:rounded-lg [&_*]:font-bold [&_*]:text-gray-50 hover:[&_*]:bg-gray-900 [&_*]:transition-all [&_*]:duration-200 hover:[&_*]:transform hover:[&_*]:scale-110 ">
                                <button onClick={() => handleImage(card)} type="button">CONOCER</button>
                            </div>
                        </div>

                        <div className={` ${open[card.id] ? "flex" : "hidden"} bg-white items-center justify-center z-50 fixed top-0 bg-opacity-50 backdrop-blur w-full h-dvh`}>
                            <ProjectSliders card={card} currentIndex={currentIndex} handleClose={handleClose} handlePrev={handlePrev} handleNext={handleNext} manualScroll={manualScroll} handleAutoScroll={handleAutoScroll} />
                        </div> 

                    </div>
                ))
            }      
        </>
    )
}



                            
                            