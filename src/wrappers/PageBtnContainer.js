import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  align-items: center;
  padding-right: 2rem;
  column-gap: 0.75rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  .prev-btn,
  .next-btn {
    border: none;
    background: transparent;
    color: var(--primary-100);
    transition: var(--transition);
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      color: var(--primary-400);
    }
  }
  .num-page {
    border: none;
    font-size: 1.5rem;
    background: transparent;
    cursor: pointer;
  }
  .active {
    background: var(--primary-500);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
`;

export default Wrapper;
