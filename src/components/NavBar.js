import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      // React fragment
      <>
        <nav className='flex justify-between items-center 2xl:px-56 sm:px-12 h-20'>
            <Link to="/">
              <img className='sm:w-20 2xl:w-48 md:w-40' src={logo} alt="Logo"/>
            </Link>
            <ul className='flex justify-between items-center sm:font-semibold sm:text-text-black 2xl:text-lg sm:text-sm md:w-3/5 sm:w-4/5 2xl:w-3/5'>
                <li><Link to="/" className='hover:text-primary-green'>Home</Link></li>
                <li><Link to="/about" className='hover:text-primary-green'>About</Link></li>
                <li><Link to="/menu" className='hover:text-primary-green'>Menu</Link></li>
                <li><Link to="/reservations" className='hover:text-primary-green'>Reservations</Link></li>
                <li><Link to="/order-online" className='hover:text-primary-green'>Order Online</Link></li>
                <li><Link to="/login" className='hover:text-primary-green'>Login</Link></li>
            </ul>
        </nav>
      </>
    );
}

export default NavBar;