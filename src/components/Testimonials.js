import TestimonalsCard from './UI/TestimonialsCard';
import user from '../assets/user.avif'
import user2 from '../assets/user2.avif'
import user3 from '../assets/user3.avif'
import lemonYellow from '../assets/lemonYellow.webp'

function Testimonials() {
    const testimonials = [
        {
            name: "Jane Doe",
            review: "This is the best Mediterranean food that I've ever had!",
            srcPicture: user
        },
        {
            name: "John Smith",
            review: "A delightful experience from start to finish. Highly recommended!",
            srcPicture: user2
        },
        {
            name: "Alice Johnson",
            review: "The flavors were out of this world, and the service was impeccable.",
            srcPicture: user3
        }
    ];

    return(
        <section id='testimonials' className='overflow-hidden px-6 2xl:px-56 mt-36 2xl:mt-52 w-full sm:px-12 flex flex-col justify-center items-center sm:mt-40 relative'>
            <h1 className="text-primary-green text-3xl sm:text-4xl font-bold">Testimonials</h1>
            <h2 className='text-primary-orange text-lg sm:text-2xl mt-4'>Read what others have to say about us</h2>
            <div className="grid lg:grid-cols-3 2xl:grid-cols-3 sm:grid-cols-1 w-full lg:gap-16 gap-40 lg:mt-20 mt-28">
                {testimonials.map((testimonial, index) => (
                    <TestimonalsCard key={index} name={testimonial.name} review={testimonial.review} srcPicture={testimonial.srcPicture}/>
                ))}
            </div>
            <img loading="lazy" data-aos="fade-up-right" className='absolute 2xl:h-[16em]  h-32 lg:h-36 bottom-0 start-0 lg:start-0 2xl:start-8 2xl:bottom-0 sm:h-52 transform sm:bottom-20 sm:start-10' alt='lemon background' src={lemonYellow}></img>
            <img loading="lazy" data-aos="fade-down-left" className='absolute 2xl:h-[16em] lg:h-36 z-10 h-32 end-4 top-32 lg:end-0 2xl:end-12 2xl:top-4 sm:h-52 transform sm:top-32 sm:end-12 sm:z-10' alt='lemon background' src={lemonYellow}></img>
        </section>
    )
}

export default Testimonials