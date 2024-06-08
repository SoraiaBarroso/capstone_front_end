import logoFooter from '../assets/logo-footer.webp'
import FooterSection from './UI/FooterSection'
import { Link } from 'react-router-dom';

function Footer() {
    const footerData = [
        {
            title: "Contact",
            list: [
                "+1(123)456-7890",
                "info@littlelemon.com",
                "123 Ford Blvd, Chicago, IL, 60618"
            ]
        },
        {
            title: "Availability",
            list: [
                "Tues-Thurs: 12pm-10pm",
                "Fri-Sun: 12pm-10pm",
                "Mon: Closed"
            ]
        },
        {
            title: "Socials",
            list: [
                "Instagram",
                "Facebook",
                "Twitter"
            ]
        }
    ];

    return(
        <div className="h-32  border-t-2 2xl:px-56">
            <div className='flex justify-between items-center flex-col md:flex-row sm:flex-col sm:items-center w-full mt-10 mb-10 gap-20'>
                <Link to="/">
                    <img loading="lazy" src={logoFooter} alt='logo footer' className='h-44 md:h-28 md:ml-10 lg:h-36 lg:pl-32 2xl:pl-20 2xl:pr-40'></img>
                </Link>
                {footerData.map((section, index) => (
                    <FooterSection key={index} title={section.title} list={section.list} />
                ))}
            </div>
        </div>
    )
}

export default Footer