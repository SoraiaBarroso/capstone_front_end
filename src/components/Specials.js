function Specials() {
    return (
      // React fragment
      <>
        <section className='2xl:px-48 sm:px-12 flex flex-col'>
            <div className="flex justify-between items-center mt-20 ">
                <h1 className='text-text-black md:font-bold mt-10 2xl:text-4xl md:text-4xl sm:text-2xl'>This week's specials!</h1>
                <button className='2xl:w-60 md:w-44 2xl:h-10 sm:h-8 font-bold md:mt-12 sm:w-1/4 bg-primary-yellow rounded-2xl text-text-black mt-8 cursor-pointer'>Online Menu</button>
            </div>
            <div>
                <div>
                    card
                </div>
            </div>
        </section>
      </>
    );
}

export default Specials;