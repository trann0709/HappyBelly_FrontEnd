import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { links } from '../utils/constants';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import Wrapper from '../wrappers/Navbar';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="section-center nav-center">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <button type="button" className="user-toggle">
          <FaUserCircle />
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
