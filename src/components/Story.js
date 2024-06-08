import cookers1 from '../assets/cookers1.webp'
import cookers2 from '../assets/cookers2.webp'

function Story() {
    return(
        <section className="px-6 pb-16 flex-col lg:mb-10 2xl:px-56 2xl:mt-80 mt-36 lg:mt-56 sm:mt-40 flex lg:flex-row lg:h-[30em] 2xl:h-[38em] sm:flex-col sm:justify-center sm:items-center" id='about'>
            <div className="flex flex-col 2xl:h-full lg:h-full lg:w-2/5 2xl:w-1/2 sm:w-3/5">
                <h1 className="text-primary-green text-3xl sm:text-4xl font-bold text-center sm:text-left">Our Story</h1>
                <p className="mt-8 text-center sm:text-left 2xl:text-2xl font-medium 2xl:w-9/12 lg:text-lg">
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
                </p>
                <p className="mt-8 text-center sm:text-left 2xl:text-2xl font-medium 2xl:w-9/12 lg:text-lg">
                    To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and 
                    led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
            </div>
            <div className="w-full mt-16 h-72 mb-10 sm:mb-0 2xl:w-1/2 2xl:h-full lg:w-2/5 sm:flex relative sm:h-[34em] sm:mt-16 sm:w-3/5">
                <img loading="lazy" src={cookers1} data-aos="fade-right" alt='founders' className='w-64 2xl:w-1/2 2xl:h-96 lg:w-[14em] lg:h-80 sm:w-[21em] object-cover absolute end-0 lg:start-20 2xl:start-0 sm:end-0 rounded-xl z-20'></img>
                <img loading="lazy" src={cookers2} data-aos="fade-left" alt='founders' className='w-64 2xl:w-1/2 2xl:h-96 lg:w-[14em] lg:h-80 sm:w-[21em] object-cover absolute bottom-0 2xl:start-48 lg:start-48 lg:bottom-20 2xl:bottom-0 sm:start-0 sm:bottom-40 rounded-xl'></img>
            </div>
        </section>
    )
}

export default Story