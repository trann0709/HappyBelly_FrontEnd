import styled from 'styled-components';

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  margin-bottom: 3rem;
  row-gap: 0.75rem;
  padding-bottom: 2rem;
  /* height: 27rem; */
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-4);
  }

  .photo {
    height: 22rem;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }

  .recipe-info {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 1rem;
    padding: 0.2rem 1rem;
    align-items: center;
    h1 {
      font-size: 1.25rem;
      text-align: left;
      margin: 0;
      font-weight: 700;
      letter-spacing: 1.6px;
    }
    p {
      justify-self: end;
      font-size: 1rem;
      background: var(--primary-700);
      padding: 0.25rem 0.75rem;
      border-radius: var(--radius);
    }
  }
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 1rem;
    button {
      justify-self: end;
    }
    .read-more {
      background: transparent;
      box-shadow: none;
      border: 2px solid var(--grey-100);
      color: var(--grey-100);
      transition: all 0.1s linear;
      max-width: 250px;
      &:hover {
        background: var(--primary-500);
        font-weight: 700;
      }
    }
  }
`;

export default Wrapper;
