import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from '../components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="full-page">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default SharedLayout;

const Wrapper = styled.main`
  /* .full-page {
    min-height: 100vh;
  } */
`;
