function FooterSection({title, list}) {
    return(
        <div className='w-1/3'>
            <h3 className='font-semibold'>
                {title}
            </h3>
            <ul className='mt-2 [&>*]:opacity-70 [&>*]:leading-8 [&>*]:cursor-pointer'>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default FooterSection