import styled from 'styled-components';

const Wrapper = styled.section`
  h3 {
    margin-top: 2rem;
  }
  .form {
    padding: 2rem 3rem;
  }
  .update-btn {
    margin-top: 2rem;
    width: 100%;
  }
  .delete-btn {
    width: 15rem;
    height: 3rem;
    display: block;
    margin: 4rem auto;
    border: 2px solid var(--grey-100);
    color: var(--grey-400);
    background: transparent;
    &:hover {
      background: var(--primary-600);
      color: var(--grey-100);
    }
  }
`;

export default Wrapper;
