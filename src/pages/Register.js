import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Wrapper from '../wrappers/Register';
import logo from '../images/logo.svg';
import { FormRow } from '../components';
import { registerUser, loginUser } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const initialState = {
  username: '',
  password: '',
  name: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { username, password, isMember, name } = values;
  const { isLoading, user, registered } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    setValues({ ...values, isMember: !values.isMember });
  }, [registered]);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/main/recipes');
      }, 2000);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || (!isMember && !name)) {
      toast.error('Please fill out all the fields');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ username, password }));
      return;
    }
    dispatch(registerUser({ username, password, name }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <h3>{isMember ? 'Login' : 'Register'}</h3>
        {!isMember && (
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="text"
          name="username"
          value={username}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isMember ? 'Login' : 'Register'}
        </button>
        <p>
          {isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
