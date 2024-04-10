/* eslint-disable react/prop-types */
import useScrollToTopBot from "../hooks/useScrollTopBot"

export function CTABtn({ action, name }) {

    const scrollTo = useScrollToTopBot()

    return(
        <div>
            <div className='my-10 text-xl bg-red-500 hover:bg-red-400 text-gray-50 font-bold py-2 px-4 rounded-xl inline-flex items-center cursor-pointer transition-all duration-200'>
                {
                    action === "button" ? <button type="button" onClick={() => scrollTo("bottom")} >{name}</button> : <a target="blank" title="instagram" href="https://www.instagram.com/piedra.construcciones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">{name}</a>
                }
            </div>
        </div>
    )
}