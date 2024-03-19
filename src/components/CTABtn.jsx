
export function CTABtn({ action, name }) {

    const handleBtn = () => {
        const bottom = document.documentElement.scrollHeight
        window.scrollTo({top: bottom, behavior: "smooth"})
    }

    return(
        <div>
            <div className='my-10 text-xl bg-red-500 hover:bg-red-400 text-gray-50 font-bold py-2 px-4 rounded-xl inline-flex items-center cursor-pointer transition-all duration-200'>
                {
                    action === "button" ? <button type="button" onClick={handleBtn} >{name}</button> : <a target="blank" href="https://www.instagram.com/piedra.construcciones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">{name}</a>
                }
            </div>
        </div>
    )
}



