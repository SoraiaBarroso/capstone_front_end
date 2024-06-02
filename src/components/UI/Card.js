import { PiPersonSimpleBike  } from "react-icons/pi";

function Card({imgSrc, dishName, price, description}) {
    return (
        <div className="flex flex-col col-span-1 row-span-5 cursor-pointer">
            <img className="w-full h-2/5 rounded-t-md" src={imgSrc} alt='greek salad'></img>
                <div className="w-full flex flex-col h-2/5 rounded-b-md px-8 bg-gray-200">
                    <div className='flex w-full justify-between mt-8'>
                        <h2 className='text-xl font-semibold'>{dishName}</h2>
                        <p className='text-xl text-primary-orange'>{price}</p>
                    </div>
                    <div className='w-full h-30 mt-6'>
                        <p className="text-md">{description}</p>
                    </div>
                    <div className="mt-6 flex cursor-pointer">
                        <h2 className='font-semibold text-lg pr-4'>Order a delivery</h2>
                        <PiPersonSimpleBike size="2em"/>
                    </div>
                </div>
        </div>
    )
}

export default Card