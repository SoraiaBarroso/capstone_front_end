import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from 'react';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
   };

    return (
        <nav className='overflow-hidden flex justify-between items-center px-6 lg:px-20 2xl:px-56 sm:px-8 lg:h-20 h-24 border-b-2 border-primary-green'>
            <Link to="/">
              <img className='sm:w-[12em] w-[11em] 2xl:w-48 md:w-[12em]' src={logo} alt="Logo"/>
            </Link>
            <div className='flex justify-center items-center lg:hidden 2xl:hidden cursor-pointer group' onClick={handleMenuToggle}>
              <RxHamburgerMenu size="2em"/>
            </div>
            <ul className={`fixed w-1/2 z-40 top-0 left-0 h-full bg-white flex flex-col transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} [&>*]:mt-10 text-lg lg:static lg:flex-row lg:transform-none lg:translate-x-0 lg:bg-transparent lg:w-3/5 lg:h-full lg:[&>*]:m-0 lg:flex lg:justify-between lg:items-center items-center sm:font-semibold sm:text-text-black sm:text-lg md:w-[18em] justify-start sm:justify-start sm:w-[18em] 2xl:w-3/5`}>
                <li><Link  to="/"  onClick={handleMenuToggle} className='hover:text-primary-green'>Home</Link></li>
                <li><a href='/#about' onClick={handleMenuToggle} className='hover:text-primary-green'>About</a></li>
                <li><a href='/#menu' onClick={handleMenuToggle} className='hover:text-primary-green'>Menu</a></li>
                <li><Link to="/reservation" onClick={handleMenuToggle} className='hover:text-primary-green focus:bg-primary-green focus:text-white rounded-md focus:p-2'>Reservations</Link></li>
                <li><a href='/#testimonials' onClick={handleMenuToggle} className='hover:text-primary-green'>Testimonials</a></li>
                <li><Link to="/" onClick={handleMenuToggle} className='hover:text-primary-green'>Login</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;