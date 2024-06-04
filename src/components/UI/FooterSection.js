function FooterSection({title, list}) {
    return(
        <div className='w-1/3 lg:w-[12em] md:w-[14em]'>
            <h3 className='font-semibold sm:text-center lg:text-left 2xl:text-left md:text-left'>
                {title}
            </h3>
            <ul className='mt-2 [&>*]:opacity-70 [&>*]:leading-8 [&>*]:cursor-pointer  2xl:[&>*]:text-left lg:[&>*]:text-left md:[&>*]:text-left sm:[&>*]:text-center'>
                {list.map((item, index) => (
                    <li className="hover:text-primary-green lg:text-sm md:text-sm" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default FooterSection