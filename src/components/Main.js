import dish from '../assets/restauranfood.jpg';

function Main(){
    return (
            <section className='px-6 flex lg:px-20 2xl:px-56 2xl:h-[25em] sm:px-8 h-96 text-white bg-primary-green' id='home'>
                <div className="h-full flex flex-col items-center sm:items-start w-full m-0 md:w-1/2 sm:w-1/2 lg:w-1/2 2xl:w-1/2">
                    <h1 className='text-primary-yellow text-3xl text-center sm:text-left font-serif md:font-bold mt-10 2xl:text-5xl md:text-4xl sm:text-4xl'>Little Lemon</h1>
                    <h2 className='mt-2 text-center sm:text-left 2xl:text-2xl text-lg sm:text-lg font-medium'>Chicago</h2>
                    <p className='2xl:w-3/4 text-md text-center sm:text-left lg:text-lg md:text-base 2xl:text-lg sm:w-full 2xl:text-md sm:text-sm mt-6'>
                        Welcome to our family-owned Mediterranean restaurant, where tradition meets innovation.
                        Nestled in the heart of the city, our cozy and inviting atmosphere is perfect for any occasion,
                        from a casual lunch to a special dinner with loved ones.
                    </p>
                    <button className='text-sm px-3 py-1 transition duration-300 sm:text-sm lg:text-lg lg:h-10 hover:bg-transparent hover:text-primary-yellow hover:border-2 hover:border-primary-yellow 2xl:w-1/4 md:w-44 2xl:h-12 sm:h-8 2xl:font-extrabold font-bold 2xl:text-lg md:mt-12 2xl:mt-10 sm:w-[10em] bg-primary-yellow rounded-2xl text-text-black mt-8 cursor-pointer'>Reserve a table</button>
                </div>
                <div className="w-1/2 hidden m-0 h-full sm:flex justify-end items-center">
                    <img loading='eager' className="2xl:mt-24 lg:mt-24 lg:h-full 2xl:h-full sm:w-3/4 sm:h-3/4 2xl:w-3/4 md:w-[20em] object-cover rounded-lg" src={dish} alt="main"/>
                </div>
            </section>
    );
}

export default Main;