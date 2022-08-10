import styled from 'styled-components';

const Wrapper = styled.section`
  .form {
    padding: 0.75rem 1rem;
    width: 90%;
    max-width: 500px;
    position: relative;
  }
  .form-search {
    height: 35px;
    width: 100%;
    border: transparent;
    border-bottom: 1px solid var(--grey-700);
    ::placeholder {
      text-transform: capitalize;
      color: var(--grey-700);
      padding-left: 1rem;
      font-size: 1.25rem;
    }
  }
  .search-icon {
    position: absolute;
    right: 5%;
    bottom: 22%;
    cursor: pointer;
    border: transparent;
    background: transparent;
    font-size: 1.5rem;
    color: var(--grey-500);
  }
`;

export default Wrapper;
