import './NavBar.css';
import { ReactComponent as MyIcon } from '../assets/Logo.svg';

function NavBar() {
    return (
      // React fragment
      <>
        <nav>
          <MyIcon />
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/menu">Reservations</a></li>
            <li><a href="/menu">Order Online</a></li>
            <li><a href="/menu">Login</a></li>
          </ul>
        </nav>
      </>
    );
}

export default NavBar;