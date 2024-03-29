/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"

export function Form({ fromRef }) {

    const { 
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


    return(

        <div ref={fromRef} className=" w-full pb-10 ">
            
            <h2 className="text-center w-fit mx-auto mb-6">¿QUIERES HACERNOS LLEGAR TUS IDEAS?</h2>

            <div className="bg-gradient-to-t to-gray-400 from-transparent p-10 sm:max-w-xl mx-auto sm:rounded-xl [&>form]:flex [&>form]:flex-col [&>form]:gap-4 [&>form]:w-full ">
                <form onSubmit={handleSubmit(onSubmit)} id="myForm" className=" [&_input]:w-full [&_textarea]:w-full  [&_input]:p-3 [&_input]:rounded-lg focus:[&_input]:outline focus:[&_input]:outline-gray-300 focus:[&_input]:outline-4 [&_textarea]:p-3 [&_textarea]:rounded-lg focus:[&_textarea]:outline focus:[&_textarea]:outline-gray-300 focus:[&_textarea]:outline-4 [&_textarea]:h-52 [&_textarea]:resize-none">

                    <div>
                        <input {...register("name", {
                            required: "Se requiere un Nombre",
                            minLength: {
                                value: 3,
                                message: "Introduce un nombre real"
                            }
                        })} type="text" placeholder="NOMBRE"  />
                        {  errors.name && (
                            <div className="text-red-600 font-medium">{errors.name.message}</div>
                        ) }
                    </div>
                    
                    <div>
                        <input {...register("phone", {
                            validate: (value) => {
                                if(value && value.length !== 9){
                                    return "Porfavor introduzca un numero valido"
                                }
                            }
                        })}
                        type="tel" placeholder="TELEFONO"  />
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
                        })} type="text" placeholder="EMAIL" />
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
                        })} placeholder="ESCRIBA UN MENSAJE" />
                        { errors.message && (
                            <div className="text-red-600 font-medium">{errors.message.message}</div>
                        )}
                    </div>
                    
                    <button type="submit" className="bg-red-500 px-4 py-2 rounded-xl w-fit text-gray-50 font-semibold mx-auto mt-6 hover:transform hover:scale-110 active:scale-90 hover:transition-all duration-300 ease-in-out ">ENVIAR</button>
                </form>
            </div> 
        
        </div>
    )
}
