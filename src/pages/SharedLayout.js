import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar, Sidebar } from '../components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Navbar />
      <div className="full-page">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default SharedLayout;

const Wrapper = styled.main`
  .full-page {
    min-height: calc(100vh - 6rem);
  }
`;
