import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/logo.svg';
import { FaBars, FaCaretDown, FaUserCircle } from 'react-icons/fa';
import Wrapper from '../wrappers/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, toggleSidebar } from '../features/user/userSlice';
import NavLinks from './NavLinks';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const toggleUser = () => {
    setShowLogout(!showLogout);
    if (!user) {
      navigate('/register');
    } else {
      dispatch(logoutUser());
      toast.success('Logging out');
    }
  };

  return (
    <Wrapper>
      <div className="section-center nav-center">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaBars />
          </button>
        </div>
        <NavLinks />
        <div className="btn-container">
          <button
            type="button"
            className="user-toggle"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            {user && (
              <Link
                to="/main/profile"
                className="settings"
                onClick={() => setShowLogout(!showLogout)}
              >
                Settings
              </Link>
            )}
            <button className="dropdown-btn" type="button" onClick={toggleUser}>
              {user ? 'logout' : 'login'}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
