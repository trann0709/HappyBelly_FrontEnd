import styled from 'styled-components';

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
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
  .user-toggle,
  .dropdown {
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
      .nav-link {
        color: var(--grey-500);
        text-transform: capitalize;
        padding: 0.5rem;
        &:hover {
          background: var(--primary-600);
          border-radius: var(--radius);
        }
      }
      .active {
        color: var(--grey-400);
        font-weight: 700;
      }
    }
    .btn-container {
      position: relative;
    }
    .user-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 0.25rem;
      position: relative;
      background: transparent;
      border: transparent;
      cursor: pointer;
      transition: var(--transition);
      color: var(--primary-400);
      text-transform: capitalize;
      svg {
        font-size: 1.75rem;
      }
      &:hover {
        color: var(--primary-600);
      }
    }
    .dropdown {
      position: absolute;
      width: 120%;
      left: -15%;
      top: 40px;
      visibility: hidden;
      background: var(--primary-600);
      border-radius: var(--radius);
      text-align: center;
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.2rem;
      box-shadow: var(--shadow-2);
    }
    .show-dropdown {
      visibility: visible;
    }
    .settings {
      color: var(--grey-500);
      text-decoration: none;
      cursor: pointer;
      margin-top: 0.5rem;
    }
    .dropdown-btn {
      margin-top: 0.5rem;
      border: transparent;
      background: transparent;
      text-transform: capitalize;
      color: var(--grey-500);
      cursor: pointer;
      margin-bottom: 0.5rem;
    }
    .dropdown-btn:hover,
    .settings:hover {
      color: var(--grey-200);
      font-weight: 700;
    }
  }
`;

export default Navbar;
