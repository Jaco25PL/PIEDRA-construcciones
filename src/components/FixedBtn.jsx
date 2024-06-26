import { motion } from "framer-motion" 

export function FixedBtn() {

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        transition={{ delay: 2 , duration: 1}}
        whileInView={{ opacity: 1 }}
        className="z-20 w-full sticky top-3/4">

            <a className="absolute w-20 right-2 md:right-10" title="whatsapp" href="https://api.whatsapp.com/send?phone=59893595589" target="blank"><img src="./icons/whatsapp.png" title="WhatsApp logo" alt="WhatsApp" /></a>
            
        </motion.div>
    )
}