import dish from '../assets/restauranfood.jpg';

function Main(){
    return (
            <section className='flex 2xl:px-56 sm:px-12 h-96 text-white bg-primary-green'>
                <div className="h-full m-0 w-1/2">
                    <h1 className='text-primary-yellow md:font-bold mt-10 2xl:text-5xl md:text-4xl sm:text-2xl'>Little Lemon</h1>
                    <h3 className='mt-2 2xl:text-2xl sm:text-lg font-medium'>Chicago</h3>
                    <p className='2xl:w-3/4 2xl:text-lg sm:w-fullfont-medium 2xl:text-md sm:text-sm mt-6'>
                        Welcome to our family-owned Mediterranean restaurant, where tradition meets innovation. Nestled in the heart of the city, our cozy and inviting atmosphere is perfect for any occasion, from a casual lunch to a special dinner with loved ones.
                    </p>
                    <button className='transition duration-300 hover:bg-transparent hover:text-primary-yellow hover:border-2 hover:border-primary-yellow 2xl:w-1/4 md:w-44 2xl:h-12 sm:h-8 font-extrabold text-lg md:mt-12 2xl:mt-8 sm:w-3/4 bg-primary-yellow rounded-2xl text-text-black mt-8 cursor-pointer'>Reserve a table</button>
                </div>
                <div className="w-1/2 m-0 h-full flex justify-end items-center">
                    <img className="2xl:mt-32 sm:mt-28 h-full 2xl:w-2/2 md:w-96 sm:w-52 object-cover rounded-lg" src={dish} alt="main"/>
                </div>
            </section>
    );
}

export default Main;