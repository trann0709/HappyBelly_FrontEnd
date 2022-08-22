import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FormRow } from '../components';
import { toast } from 'react-toastify';
import {
  updateUser,
  resetPassword,
  deleteUser,
} from '../features/user/userSlice';
import Wrapper from '../wrappers/ProfilePage';

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    username: user?.username || '',
    password: '',
  });

  const { name, lastName, username, password } = userData;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username) {
      toast.error('please fill out all the form');
      return;
    }
    dispatch(updateUser(userData));
  };

  const resetPass = (e) => {
    e.preventDefault();
    if (!password) {
      toast.error('please enter the new password');
      return;
    }
    dispatch(resetPassword({ password }));
  };

  const deleteAccount = () => {
    dispatch(deleteUser());
  };

  return (
    <Wrapper className="section-center">
      <h3>profile settings</h3>
      <form className="form" onSubmit={handleSubmit}>
        <FormRow
          type="text"
          name="name"
          value={name}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          labelText="Last Name"
          name="lastName"
          value={lastName}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="username"
          value={username}
          handleChange={handleChange}
        />
        <button type="submit" className="btn update-btn" disabled={isLoading}>
          update change
        </button>
      </form>
      <form className="form" onSubmit={resetPass}>
        <FormRow
          labelText="new password"
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn update-btn" disabled={isLoading}>
          reset password
        </button>
      </form>
      <button
        type="submit"
        className="btn delete-btn"
        disabled={isLoading}
        onClick={deleteAccount}
      >
        delete account
      </button>
    </Wrapper>
  );
};

export default Profile;
