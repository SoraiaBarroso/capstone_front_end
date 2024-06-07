import lemon_dessert from '../assets/lemon-dessert.jpeg'
import Card from '../components/UI/Card'
import React, {useEffect} from "react"

import AOS from 'aos';
import 'aos/dist/aos.css';

function Specials() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            mirror: true,
        });
    }, [])

    const dishes = [
        {
            imgSrc: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80',
            dishName: 'Greek Salad',
            price: '$19.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80',
            dishName: 'Bruschettas',
            price: '$12.99',
            description: 'Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.'
        },
        {
            imgSrc: lemon_dessert,
            dishName: 'Lemon Dessert',
            price: '$5.99',
            description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. '
        }
    ];

    return (
        <section className='px-6 2xl:px-56 lg:px-20 sm:px-12 flex flex-col lg:mt-24 2xl:mt-40 sm:mt-10' id='menu'>
            <div className="flex lg:flex-row justify-between items-center flex-col">
                <h1 className='text-text-black text-2xl font-bold md:font-bold mt-10 2xl:text-5xl md:text-4xl sm:font-extrabold sm:text-4xl'>
                    This week's specials!
                </h1>
                <button className='px-2 py-1 text-sm transition duration-300 lg:text-lg sm:text-sm hover:bg-transparent hover:text-primary-green hover:border-primary-green hover:border-2 ease-in-out transform 2xl:w-60 md:w-44 2xl:h-12 lg:h-10 sm:h-8 font-bold md:mt-12 sm:w-1/4 bg-primary-yellow rounded-2xl text-text-black mt-8 cursor-pointer'>
                    Online Menu
                </button>
            </div>
            <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 w-full place-self-center sm:w-full mt-20 gap-20 sm:gap-20 2xl:gap-40">
                {dishes.map((dish, index) => (
                    <Card
                        key={index}
                        imgSrc={dish.imgSrc}
                        dishName={dish.dishName}
                        price={dish.price}
                        description={dish.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Specials;