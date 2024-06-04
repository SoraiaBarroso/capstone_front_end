function FooterSection({title, list}) {
    return(
        <div className='w-1/3'>
            <h3 className='font-semibold sm:text-center 2xl:text-left'>
                {title}
            </h3>
            <ul className='mt-2 [&>*]:opacity-70 [&>*]:leading-8 [&>*]:cursor-pointer 2xl:[&>*]:text-left sm:[&>*]:text-center'>
                {list.map((item, index) => (
                    <li className="hover:text-primary-green" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default FooterSection