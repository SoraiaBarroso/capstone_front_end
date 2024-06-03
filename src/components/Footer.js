import logoFooter from '../assets/logo-footer.png'

function Footer() {
    return(
        <div className="h-32 border-t-2 mt-36 2xl:px-56">
            <div className='flex justify-between w-full mt-10 mb-10 gap-20'>
                <img src={logoFooter} alt='logo footer' className='h-44 pl-20 pr-40'></img>
                <div className='w-1/3'>
                    <h3 className='font-semibold'>
                        Contact
                    </h3>
                    <ul className='mt-2 [&>*]:opacity-70 [&>*]:leading-8 [&>*]:cursor-pointer'>
                        <li>+1(123)456-7890</li>
                        <li>info@littlelemon.com</li>
                        <li>123 Ford Blvd, Chicago, IL, 60618</li>
                    </ul>
                </div>
                <div className='w-1/3'>
                    <h3 className='font-semibold'>
                        Availitbity
                    </h3>
                    <ul className='mt-2 [&>*]:opacity-70 [&>*]:leading-8 [&>*]:cursor-pointer'>
                        <li>Tues-Thurs: 12pm-10pm</li>
                        <li>Fri-Sun: 12pm-10pm</li>
                        <li>Mon: Closed</li>
                    </ul>
                </div>
                <div className='w-1/3'>
                    <h3 className='font-semibold'>
                        Socials
                    </h3>
                    <ul className='mt-2 [&>*]:opacity-70 [&>*]:leading-8 [&>*]:cursor-pointer'>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer