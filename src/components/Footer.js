import logoFooter from '../assets/logo-footer.png'
import FooterSection from './UI/FooterSection'

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
        <div className="h-32 border-t-2 2xl:mt-36 2xl:px-56">
            <div className='flex justify-between 2xl:flex-row sm:flex-col sm:items-center w-full mt-10 mb-10 gap-20'>
                <img src={logoFooter} alt='logo footer' className='h-44 2xl:pl-20 2xl:pr-40'></img>
                {footerData.map((section, index) => (
                    <FooterSection key={index} title={section.title} list={section.list} />
                ))}
            </div>
        </div>
    )
}

export default Footer