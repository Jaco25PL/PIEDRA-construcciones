export function Header() {
    
    return(
        <section  className='sm:mx-0 md:mx-20 xl:mx-40'>

        <div className='mt-16 flex flex-col items-center'>

          <div className='max-w-3xl '>
            <h1 className='leading-tight text-center font-semibold text-5xl'>Entregamos la <span className='font-extrabold'>Máxima  Calidad</span> en todo lo que hacemos</h1>
          </div>

          <div className='text-center my-6 max-w-4xl'>
            <p>Loremnsectetur adipisicing elit. Tempora a ipsam optio tenetur sapiente neque porro necessitatibus, dicta et repellat nostrum ex dolores. Doloremque nobis ipsa iste deserunt in a, vitae odit, beatae pariatur, dolorem recusandae quam voluptates at sunt reiciendis quidem? Quod possimus repudiandae dolore tempore quas, suscipit blanditiis! </p>
          </div>

          <div className='overflow-hidden max-w-5xl xl:w-full xl:px-20'>
            <img className='rounded-xl w-full h-auto' src="./header-slider-01.webp" alt="header-image"/>
          </div>

          <div className='my-10 text-xl bg-red-500 hover:bg-red-400 text-gray-50 font-bold py-2 px-4 rounded-xl inline-flex items-center cursor-pointer transition-all duration-200'>
            <a href='#contacts'>Escríbenos</a>
          </div>

          <div className='text-center'>
            <h2 className='text-9xl font-bold tracking-wider'>PIEDRA</h2>
            <span className='text-7xl tracking-tight'>construcciones</span>
          </div>

        </div>
      </section>
    )
}