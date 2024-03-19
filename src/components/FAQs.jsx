import { useState } from "react"
import userFAQs from "../data/userFAQs"

export function FAQs() {

    const questions = userFAQs     
    const [ showText , setShowText ] = useState(false)

    const handleText = (current) => {

        const newState = { ...showText, [current.id]: !showText[current.id]  || false}
        setShowText(newState)
    }


    return (
        <section className="w-full my-5 pt-10 pb-5 relative after:absolute after:content-[''] after:top-0 after:left-1/4 after:h-1 after:w-1/2 after:bg-gray-300">
            <div>
                <div className="[&>*]:w-fit [&>*]:mx-auto [&>*]:text-center [&>div]:text-4xl [&>div]:tracking-tighter [&_button]:font-bold">
                    <h2 className="font-bold">PREGUNTAS FRECUENTES</h2>
                </div>

                <div className="md:my-6 mx-auto lg:max-w-4xl">
                    {
                        questions?.map(q => (
                            <button type="button" onClick={() => handleText(q)} key={q.id} className="hover:bg-slate-200 transition-colors duration-300 rounded-lg w-full p-5 ">
                                
                                <div className="flex items-center justify-between w-full">
                                    <div className="md:text-xl font-semibold tracking-tight">{q.ask}</div>
                                    <div className={`p-3 max-w-11 [&>img]:transform  [&>img]:transition-transform [&>img]:duration-300 ${showText[q.id] ? "[&>img]:rotate-0" : "[&>img]:rotate-45"}`}><img src="./icons/cross-02.svg" alt="cross" /></div>
                                </div>

                                <div className={`grid overflow-hidden transition-all duration-300 my-4 mb-4 [&>div]:text-start lg:[&>div]:text-lg lg:[&>div]:tracking-tight ${showText[q.id] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                    <div className="overflow-hidden">{q.resp}</div>
                                </div>

                                <div className="w-full h-0.5 bg-slate-400"></div>
                            </button>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}