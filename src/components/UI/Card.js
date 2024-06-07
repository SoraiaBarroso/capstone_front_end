import { PiPersonSimpleBike } from "react-icons/pi";

function Card({imgSrc, dishName, price, description}) {
    return (
        <div className="flex flex-col place-self-center sm:place-self-center w-4/5 sm:w-80 lg:w-72 2xl:w-80 col-span-1 2xl:row-span-4"  data-aos="fade-in">
            <img loading="lazy" className="h-44 w-full 2xl:h-[16em] sm:h-48 rounded-t-md object-cover cursor-pointer" src={imgSrc} alt='greek salad'></img>
                <div className="w-full flex flex-col px-5 sm:px-8 bg-gray-100 justify-around h-64 sm:h-[18em]">
                    <div className='flex w-full justify-between h-auto mt-2'>
                        <h2 className='text-xl font-semibold text-text-black'>{dishName}</h2>
                        <p className='text-xl text-orange-500 font-medium'>{price}</p>
                    </div>
                    <div className='w-full h-32'>
                        <p className="text-md text-text-black">{description}</p>
                    </div>
                    <div className="flex justify-between items-center h-10">
                        <h2 className='font-semibold text-lg pr-4 text-text-black opacity-90'>Order for delivery</h2>
                        <PiPersonSimpleBike size="1.8em" className="cursor-pointer transition opacity-90 hover:text-primary-orange"/>
                    </div>
                </div>
        </div>
    )
}

export default Card