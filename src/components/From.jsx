
export function Form() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className="w-full pb-10 ">
            
            <h2 className="w-fit mx-auto mb-6">NOS QUIERES DECIR ALGO?</h2>

            <div className="bg-gradient-to-t to-gray-400 to-transparent p-10 sm:max-w-xl mx-auto sm:rounded-xl [&>form]:flex [&>form]:flex-col [&>form]:gap-4 [&>form]:w-full ">
                <form id="myForm" onSubmit={() => handleSubmit()} className="[&>*]:p-3 [&>*]:rounded-lg focus:[&>*]:outline focus:[&>*]:outline-gray-300 focus:[&>*]:outline-4  [&>textarea]:h-52 [&>textarea]:resize-none">

                    <input type="text" id="name" name="name" placeholder="NOMBRE" required />

                    <input type="tel" id="phone" name="phone" placeholder="TELEFONO" required />

                    <input type="email" id="email" name="email"  placeholder="EMAIL"required />

                    <textarea id="message" name="message" placeholder="ESCRIBA UN MENSAJE" required></textarea>

                    <button type="submit" className="bg-red-500 w-fit text-gray-50 font-semibold mx-auto mt-6 hover:transform hover:scale-110 active:scale-90 hover:transition-all duration-300 ease-in-out ">ENVIAR</button>
                </form>
            </div>
        
        </div>
    )
}

    {/* <form action="">
                <input type="text" placeholder="NOMBRE" />
                <input type="email" placeholder="EMAIL" />
                <input type="phone" placeholder="TELEFONO" />
                <textarea name="message" cols="30" rows="10" placeholder="CUAL ES LA RAZON DE ESTE MENSAJE?"></textarea>
                <button type="submite">ENVIAR</button>
            </form> */}