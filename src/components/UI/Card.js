import { PiPersonSimpleBike  } from "react-icons/pi";

function Card({imgSrc, dishName, price, description}) {
    return (
        <div className="flex flex-col col-span-1 row-span-5 cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
            <img className="w-full h-2/5 rounded-t-md object-cover" src={imgSrc} alt='greek salad'></img>
                <div className="w-full flex flex-col h-2/5 px-8 bg-gray-100 justify-around">
                    <div className='flex w-full justify-between h-auto mt-2'>
                        <h2 className='text-xl font-semibold text-text-black'>{dishName}</h2>
                        <p className='text-xl text-primary-orange font-semibold'>{price}</p>
                    </div>
                    <div className='w-full h-32'>
                        <p className="text-md text-text-black">{description}</p>
                    </div>
                    <div className="flex cursor-pointer h-10">
                        <h2 className='font-semibold text-lg pr-4 text-text-black'>Order for delivery</h2>
                        <PiPersonSimpleBike size="2em"/>
                    </div>
                </div>
        </div>
    )
}

export default Card