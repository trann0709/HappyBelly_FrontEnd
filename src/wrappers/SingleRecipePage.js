import styled from 'styled-components';

const Wrapper = styled.section`
  .recipe-btn {
    margin: 3rem 0;
    margin-left: 2rem;
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
