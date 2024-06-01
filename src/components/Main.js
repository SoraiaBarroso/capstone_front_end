import dish from '../assets/restauranfood.jpg';

function Main(){
    return (
        <>
            <section className='flex 2xl:px-48 sm:px-12 h-96 text-white bg-primary-green'>
                <div className="h-full m-0 w-1/2">
                    <h1 className='text-primary-yellow md:font-bold mt-10 2xl:text-5xl md:text-4xl sm:text-2xl'>Little Lemon</h1>
                    <h3 className='mt-2 2xl:text-2xl sm:text-lg font-medium'>Chicago</h3>
                    <p className='2xl:w-3/4 2xl:text-lg sm:w-fullfont-medium 2xl:text-md sm:text-sm mt-6'>
                        Lorem Ipsum es simplemente el texto de relleno de las  imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500,
                        texto de relleno  estándar de las industrias desde el año 1500. estándar de las industrias desde el año 1500.
                    </p>
                    <button className='2xl:w-1/4 md:w-44 2xl:h-10 sm:h-8 font-bold md:mt-12 2xl:mt-8 sm:w-3/4 bg-primary-yellow rounded-2xl text-text-black mt-8 cursor-pointer'>Reserve a table</button>
                </div>
                <div className="w-1/2 m-0 h-full flex justify-end items-center">
                    <img className="2xl:mt-32 sm:mt-28 h-full 2xl:w-2/2 md:w-96 sm:w-52 object-cover rounded-lg" src={dish} alt="main"/>
                </div>
            </section>
        </>
    );
}

export default Main;