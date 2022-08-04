import styled from 'styled-components';

const Navbar = styled.nav`
  height: 6rem;
  background: var(--white);

  box-shadow: var(--shadow-2);
  line-height: 1;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    .logo-container {
      height: auto;
      width: 150px;
      transform: translateY(-5%);
    }
    img {
      width: 100%;
      display: block;
    }
    .nav-toggle {
      font-size: 1.5rem;
      border: transparent;
      background: transparent;
      color: var(--grey-500);
      transition: var(--transition);
      cursor: pointer;
    }
    .nav-toggle:hover {
      transform: scale(1.3);
    }
  }
  .nav-links,
  .user-toggle {
    display: none;
  }

  @media (min-width: 800px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: end;
      margin: 0 1rem;
      a {
        color: var(--grey-500);
        text-transform: capitalize;
        padding: 0.5rem;
        &:hover {
          background: var(--primary-600);
          border-radius: var(--radius);
        }
      }
    }
    .user-toggle {
      display: grid;
      background: transparent;
      border: transparent;
      color: var(--primary-400);
      svg {
        font-size: 1.75rem;
      }
      &:hover {
        color: var(--primary-600);
      }
    }
  }
`;

export default Navbar;
