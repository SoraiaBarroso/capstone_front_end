import cookers1 from '../assets/cookers1.jpg'
import cookers2 from '../assets/cookers2.jpg'

function Story() {
    return(
        <section className="2xl:px-56 mt-72 flex h-[35em]" id="story">
            <div className="flex flex-col w-1/2">
                <h1 className="text-primary-green text-4xl font-bold">Our Story</h1>
                <p className="mt-8 text-xl font-medium w-8/12">
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
                </p>
                <p className="mt-8 text-xl font-medium w-8/12">
                    To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and 
                    led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
            </div>
            <div className="w-1/2 flex relative">
                <img src={cookers1} className='w-1/2 h-96 object-cover absolute start-24 rounded-xl z-20'></img>
                <img src={cookers2} className='w-1/2 h-96 object-cover absolute end-0 bottom-0 rounded-xl'></img>
            </div>
        </section>
    )
}

export default Story