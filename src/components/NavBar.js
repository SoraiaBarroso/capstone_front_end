import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      // React fragment
      <>
        <nav className='flex justify-between items-center 2xl:px-48 sm:px-12 h-20'>
            <img className='sm:w-20 2xl:w-48 md:w-40' src={logo} alt="Logo"/>
            <ul className='flex justify-between items-center sm:font-semibold sm:text-text-black 2xl:text-lg sm:text-sm md:w-3/5 sm:w-4/5 2xl:w-3/5'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
      </>
    );
}

export default NavBar;