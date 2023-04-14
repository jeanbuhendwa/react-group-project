import { NavLink } from 'react-router-dom';
import logo from '../img/planet.png';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: 'mission', text: 'Missions' },
    { path: 'profile', text: 'My Profile' },
  ];
  return (
    <nav>
      <a href="/" className="logoContainer">
        <img src={logo} alt="planet" />
        <span className="logoTitle">Space Travellers&apos; Hub</span>
      </a>
      <ul className="navMenu">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} className="navLink">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
