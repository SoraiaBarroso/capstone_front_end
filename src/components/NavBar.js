import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      // React fragment
      <>
        <nav className='flex justify-between items-center 2xl:px-56 sm:px-8 h-24'>
            <Link to="/">
              <img className='sm:w-[7em] 2xl:w-48 md:w-40' src={logo} alt="Logo"/>
            </Link>
            <ul className='flex justify-between items-center sm:font-semibold sm:text-text-black 2xl:text-lg sm:text-xs md:w-3/5 sm:w-[32em] 2xl:w-3/5'>
                <li><Link to="/"  clLinkssName='hover:text-primary-green'>Home</Link></li>
                <li><a href='#about' className='hover:text-primary-green'>About</a></li>
                <li><a href='#menu' className='hover:text-primary-green'>Menu</a></li>
                <li><Link to="/reservation" className='hover:text-primary-green'>Reservations</Link></li>
                <li><a href='#testimonials' className='hover:text-primary-green'>Testimonials</a></li>
                <li><Link to="/" className='hover:text-primary-green'>Login</Link></li>
            </ul>
        </nav>
      </>
    );
}

export default NavBar;