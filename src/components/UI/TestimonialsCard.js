import { IoMdStar } from "react-icons/io";
import { IconContext } from "react-icons";
import { IoMdStarHalf } from "react-icons/io";

function TestimonalsCard({name, review, srcPicture}) {
    return(
        <div className="bg-primary-green col-span-1 rounded-xl row-span-2 flex flex-col justify-center items-center">
                    <div className='flex flex-col w-full justify-center items-center transform -translate-y-10'>
                        <img src={srcPicture} alt="user testimonial" className='rounded-full w-24 h-24 object-cover'></img>
                        <h2 className='text-white text-lg mt-4'>{name}</h2>
                        <IconContext.Provider value={{ color: "yellow"}}>
                            <div className='flex mt-1'>
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStarHalf />
                            </div>
                        </IconContext.Provider>
                    </div>
                    <div className='flex justify-center items-center mx-10 transform -translate-y-4'>
                        <p className='text-white text-center'>{review}</p>
                    </div>
        </div>
    )
}

export default TestimonalsCard