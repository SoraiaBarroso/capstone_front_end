import TestimonalsCard from './UI/TestimonialsCard';
import user from '../assets/user.avif'
import user2 from '../assets/user2.avif'
import user3 from '../assets/user3.avif'
import lemonYellow from '../assets/lemonYellow.png'

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
        <section id='testimonials' className='2xl:px-56 2xl:mt-52 w-full sm:px-12 flex flex-col justify-center items-center sm:mt-40 relative'>
            <h1 className="text-primary-green text-4xl font-bold">Testimonials</h1>
            <h3 className='text-primary-orange text-2xl mt-4'>Read what others have to say about us</h3>
            <div className="grid 2xl:grid-cols-3 sm:grid-cols-1 w-full gap-40 mt-28">
                {testimonials.map((testimonial, index) => (
                    <TestimonalsCard key={index} name={testimonial.name} review={testimonial.review} srcPicture={testimonial.srcPicture}/>
                ))}
            </div>
            <img data-aos="fade-up-right" className='absolute 2xl:start-10 h-52 transform 2xl:rotate-[38deg] sm:bottom-20 sm:start-10' alt='lemon background' src={lemonYellow}></img>
            <img  data-aos="fade-down-left" className='absolute 2xl:end-12 2xl:top-14 -z-50 h-52 transform sm:top-32 sm:end-12 sm:z-10' alt='lemon background' src={lemonYellow}></img>
        </section>
    )
}

export default Testimonials