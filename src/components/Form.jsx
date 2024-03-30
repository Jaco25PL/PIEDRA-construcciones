/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

export function Form({ fromRef }) {

    const { 
        register, 
        // handleSubmit,
        formState: { errors },
    } = useForm()

    // const onSubmit = (data) => {
    //     console.log(data)
    // }


    return(

        <motion.div 
        
        initial={{opacity: 0}}
        transition={{delay: 0, duration: 1, ease: "easeInOut"}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        ref={fromRef} 
        className="px-5 sm:mx-0 w-full pb-10 ">
            
            <h2 className="text-center w-fit mx-auto mb-6">CONTACTATE CON NOSOTROS</h2>

            <div className=" border-solid border-2 border-gray-200 px-5 sm:px-10 py-10 sm:max-w-xl mx-auto sm:rounded [&>form]:flex [&>form]:flex-col [&>form]:gap-4 [&>form]:w-full ">
                {/* <form action="https://getform.io/f/lakmkona" method="POST" onSubmit={handleSubmit(onSubmit)} id="myForm" className=" [&_input]:w-full [&_textarea]:w-full  [&_input]:p-3 [&_input]:rounded-lg focus:[&_input]:outline focus:[&_input]:outline-gray-300 focus:[&_input]:outline-4 [&_textarea]:p-3 [&_textarea]:rounded-lg focus:[&_textarea]:outline focus:[&_textarea]:outline-gray-300 focus:[&_textarea]:outline-4 [&_textarea]:h-52 [&_textarea]:resize-none"> */}
                <form action="https://getform.io/f/lakmkona" method="POST" id="myForm" className=" [&_input]:w-full [&_textarea]:w-full focus:[&_input]:bg-gray-50 [&_input]:bg-gray-100 focus:[&_textarea]:bg-gray-50 [&_textarea]:bg-gray-100 focus:[&_input]:border-gray-50 focus:[&_textarea]:border-gray-50 [&_input]:border-l-2 [&_input]:border-solid [&_input]:border-gray-500 [&_textarea]:border-l-2 [&_textarea]:border-solid [&_textarea]:border-gray-500 [&_input]:p-3 [&_input]:rounded focus:[&_input]:outline focus:[&_input]:outline-gray-300 focus:[&_input]:outline-2 [&_textarea]:p-3 [&_textarea]:rounded focus:[&_textarea]:outline focus:[&_textarea]:outline-gray-300 focus:[&_textarea]:outline-2 [&_textarea]:h-52 [&_textarea]:resize-none">

                    <div>
                        <input {...register("name", {
                            required: "Se requiere un Nombre",
                            minLength: {
                                value: 3,
                                message: "Introduce un nombre real"
                            }
                        })} type="text" placeholder="NOMBRE" name="name" />
                        {  errors.name && (
                            <div className="text-red-600 font-medium">{errors.name.message}</div>
                        ) }
                    </div>
                    
                    <div>
                        <input  {...register("phone", {
                            validate: (value) => {
                                if(value && value.length !== 9){
                                    return "Porfavor introduzca un numero valido"
                                }
                            }
                        })}
                        type="tel" placeholder="TELEFONO" name="phone" />
                        { errors.phone && (
                            <div className="text-red-600 font-medium">{errors.phone.message}</div>
                        )}
                
                    </div>
                    
                    <div>
                        <input {...register("email", {
                            required: "El email es requerido",
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "Correo invalido"
                            },
                        })} type="text" placeholder="EMAIL"  name="email"/>
                        {  errors.email && (
                            <div className="text-red-600 font-medium">{errors.email.message}</div>
                        ) }
                    </div>

                    <div>
                        <textarea {...register("message", {
                            required: "Por favor, no deje la hoja en blanco",
                            minLength: {
                                value: 20,
                                message: "Porfavor, detalle sus dudas"
                            }
                        })} placeholder="ESCRIBA UN MENSAJE" name="message" />
                        { errors.message && (
                            <div className="text-red-600 font-medium">{errors.message.message}</div>
                        )}
                    </div>
                    
                    <button type="submit" className="bg-red-500 px-4 py-2 rounded-xl w-fit text-gray-50 font-semibold mx-auto mt-6 hover:transform hover:scale-110 active:scale-90 hover:transition-all duration-300 ease-in-out ">ENVIAR</button>
                </form>
            </div> 
        
        </motion.div>
    )
}
