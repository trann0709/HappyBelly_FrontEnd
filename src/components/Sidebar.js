import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { logoutUser, toggleSidebar } from '../features/user/userSlice';
import NavLinks from './NavLinks';
import { NavLink, useNavigate } from 'react-router-dom';
import Wrapper from '../wrappers/Sidebar';

const Sidebar = () => {
  const { isSidebarOpen, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleUser = () => {
    if (!user) {
      navigate('/register');
    } else {
      dispatch(logoutUser('Logging Out...'));
    }
  };
  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <div className="user-info">
            <h4>hello {user?.name || 'there'}</h4>
            <div className="underline"></div>
          </div>

          <div className="links">
            <NavLinks className="nav-links" toggle={toggle} />
            {user && (
              <NavLink
                to="profile"
                className={({ isActive }) => {
                  return isActive ? 'nav-link active' : 'nav-link';
                }}
                onClick={toggle}
              >
                user settings
              </NavLink>
            )}
          </div>
          <button className="toggle-user" onClick={toggleUser}>
            {user ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
