import { links } from '../utils/constants';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ toggle }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <NavLink
            key={id}
            to={url}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            onClick={toggle}
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
