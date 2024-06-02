import greek_salad from '../assets/greek_salad.jpg'
import bruschettas from '../assets/bruschettas.webp'
import lemon_dessert from '../assets/lemon-dessert.jpeg'
import Card from '../components/UI/Card'

function Specials() {
    const dishes = [
        {
            imgSrc: greek_salad,
            dishName: 'Greek Salad',
            price: '$19.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
        },
        {
            imgSrc: bruschettas,
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
      // React fragment
      <>
        <section className='2xl:px-48 sm:px-12 flex flex-col'>
            <div className="flex justify-between items-center mt-20 ">
                <h1 className='text-text-black md:font-bold mt-10 2xl:text-4xl md:text-4xl sm:text-2xl'>This week's specials!</h1>
                <button className='hover:opacity-85 2xl:w-60 md:w-44 2xl:h-12 sm:h-8 font-bold md:mt-12 sm:w-1/4 bg-primary-yellow rounded-2xl text-text-black mt-8 cursor-pointer'>Online Menu</button>
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
      </>
    );
}

export default Specials;