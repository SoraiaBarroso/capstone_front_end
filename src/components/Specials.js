import lemon_dessert from '../assets/lemon-dessert.jpeg'
import Card from '../components/UI/Card'

function Specials() {
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
        <section className='2xl:px-56 sm:px-12 flex flex-col mt-36'>
            <div className="flex justify-between items-center">
                <h1 className='text-text-black md:font-bold mt-10 2xl:text-5xl md:text-4xl sm:text-2xl'>This week's specials!</h1>
                <button className='transition duration-300 text-lg hover:bg-transparent hover:text-primary-green hover:border-primary-green hover:border-2 ease-in-out transform 2xl:w-60 md:w-44 2xl:h-12 sm:h-8 font-bold md:mt-12 sm:w-1/4 bg-primary-yellow rounded-2xl text-text-black mt-8 cursor-pointer'>Online Menu</button>
            </div>
            <div className="grid grid-cols-3 w-full mt-20 gap-40">
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