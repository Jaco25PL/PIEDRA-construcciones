import { useEffect, useState } from "react"


export function usePosition({ eRef }) {

    // const eRef = useRef(null)
    
    const [ position, setPosition ] = useState(null)

    useEffect(() => {
        const element = eRef.current

        if(element){
            const position = element.getBoundingClientRect().top
            setPosition(position)
        }

    }, [ eRef ])

    return { position }
}