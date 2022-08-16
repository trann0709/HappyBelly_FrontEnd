import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 800px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    z-index: -1;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
  }
  .show-sidebar {
    z-index: 2;
    opacity: 1;
  }
  .content {
    position: relative;
    height: 95vh;
    width: 80vw;
    background: var(--white);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
  }

  .user-info {
    display: grid;
    place-items: center;
    .underline {
      width: 10vw;
      height: 0.15rem;
      background: var(--primary-200);
    }
  }

  .links {
    height: calc(100vh - 15rem);
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 4rem;
    text-transform: capitalize;
    .nav-links {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      row-gap: 4rem;
    }

    .nav-link {
      color: var(--grey-500);
      font-size: 1.5rem;
      letter-spacing: var(--spacing);
      text-align: center;
      transition: var(--transition);
      &:hover {
        color: var(--grey-100);
        font-size: 1.75rem;
      }
    }
    .active {
      color: var(--grey-400);
      font-weight: 700;
    }
  }

  .close-btn {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    border: transparent;
    font-size: 1.5rem;
    color: var(--primary-200);
    cursor: pointer;
    transform: translate(50%, 50%);
  }
  .toggle-user {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;
    background: transparent;
    box-shadow: none;
    border: none;
    border-top: 2px solid var(--grey-100);
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    color: var(--grey-100);
    cursor: pointer;
    transition: all 0.1s linear;
    &:hover {
      background: var(--primary-500);
      font-weight: 700;
    }
  }
`;

export default Wrapper;
