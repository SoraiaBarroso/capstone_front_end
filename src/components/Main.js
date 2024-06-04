import dish from '../assets/restauranfood.jpg';

function Main(){
    return (
            <section className='flex lg:px-20 2xl:px-56 2xl:h-[25em] sm:px-8 h-96 text-white bg-primary-green' id='home'>
                <div className="h-full m-0 w-1/2">
                    <h1 className='text-primary-yellow font-serif md:font-bold mt-10 2xl:text-4xl md:text-4xl sm:text-4xl'>Little Lemon</h1>
                    <h3 className='mt-2 2xl:text-2xl sm:text-lg font-medium'>Chicago</h3>
                    <p className='2xl:w-3/4 lg:text-lg 2xl:text-lg sm:w-full 2xl:text-md sm:text-sm mt-6'>
                        Welcome to our family-owned Mediterranean restaurant, where tradition meets innovation.
                        Nestled in the heart of the city, our cozy and inviting atmosphere is perfect for any occasion,
                        from a casual lunch to a special dinner with loved ones.
                    </p>
                    <button className='transition duration-300 sm:text-sm lg:text-lg lg:h-10 hover:bg-transparent hover:text-primary-yellow hover:border-2 hover:border-primary-yellow 2xl:w-1/4 md:w-44 2xl:h-12 sm:h-8 2xl:font-extrabold font-bold 2xl:text-lg md:mt-12 2xl:mt-10 sm:w-[10em] bg-primary-yellow rounded-2xl text-text-black mt-8 cursor-pointer'>Reserve a table</button>
                </div>
                <div className="w-1/2 m-0 h-full flex justify-end items-center">
                    <img className="2xl:mt-40 lg:mt-24 lg:h-[24em] 2xl:h-[28em] sm:w-[16em] sm:h-[20em] 2xl:w-2/2 md:w-96 object-cover rounded-lg" src={dish} alt="main"/>
                </div>
            </section>
    );
}

export default Main;