import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Wrapper from '../wrappers/Register';
import logo from '../images/logo.svg';
import { FormRow } from '../components';

const initialState = {
  username: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { username, password, isMember } = values;
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error('Please fill in all the fields');
      return;
    }
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
        <FormRow
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          {isMember ? 'Login' : 'Register'}
        </button>
        <p>
          {isMember ? 'Not a member yet?' : 'Already a member?'}{' '}
          <button type="button" onClick={toggleMember} className="member-btn">
            {isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
