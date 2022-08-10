import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  h3 {
    text-align: center;
  }
  .form {
    max-width: 400px;
    padding: 2rem 2.5rem;
    transition: var(--transition);

    &:hover {
      box-shadow: var(--shadow-4);
    }
  }
  .logo-container {
    width: 10rem;
    margin: 2rem auto;
  }
  .logo {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .btn-block {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
    box-shadow: none;
    font-size: 1.05rem;
  }
  p {
    font-size: 0.975rem;
    text-align: center;
  }
  .member-btn {
    border: transparent;
    background: transparent;
    color: var(--primary-100);
    cursor: pointer;
    letter-spacing: 1.5px;
  }
`;

export default Wrapper;
