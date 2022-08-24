import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
  margin-top: 4rem;
  h3 {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 4rem;
  }
  .recipes-container {
    width: 85vw;
    max-width: 1170px;
    margin: 2rem auto;
    display: grid;
    column-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
    margin-bottom: 0;
  }
  .user {
    .non-user {
      text-align: center;
      .link {
      color: var(--primary-200);
      &:hover {
        color: var(--primary-400);
      }
    }
    }
  }
  .btn-back {
    width: 50vw;
    max-width: 250px;
    margin: 1.5rem auto;
    border: 2px solid var(--grey-100);
    color: var(--grey-400);
    background: transparent;
    &:hover {
      background: var(--primary-600);
      color: var(--grey-100);
    }
`;

export default Wrapper;
