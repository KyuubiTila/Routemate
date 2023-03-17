import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Routename logo" />
        <span>RouteMate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/products" className="link">
          Product
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact
        </NavLink>
        <NavLink to="/admin" className="link">
          Admin
        </NavLink>
      </nav>
    </header>
  );
};
