import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  
   
  .non-user {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    .link {
      color: var(--primary-200);
      &:hover {
        color: var(--primary-400);
      }
    }
  }
  
  .form {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    padding: 2rem 3rem;
    box-shadow: var(--shadow-3);
    .clear-btn {
      margin-bottom: 2rem;
      margin-top: 0.5rem;
      width: 100%;
    }
    h3 {
    text-align: center;
    font-size: 2rem;
    letter-spacing: var(--spacing);
    padding-top: 2rem;
    }
    .form-control {
      display: grid;
      grid-template-columns: 1fr auto;
      margin-bottom: 1rem;
      .custom {
        padding: 0.35rem;
        padding-left: 1rem;
        font-size: 1.05rem;
        border: 2px solid var(--grey-200);
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
        border-right: transparent;
      }
      .submit-btn {
        border-radius: 0;
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        border: 2px solid var(--grey-200);
        border-left: transparent;
        background-color: var(--primary-800);
        color: var(--grey-100);
        box-shadow: none;
        &:hover{
          background-color: var(--primary-600);
        }
      }
    }
    .list-container {
      h4 {
        text-align: left;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        background: var(--grey-900);
        color: var(--grey-100);
        padding: 0.35rem 1rem;
      }
      .grocery-item {
      padding: 0.25rem 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      transition: var(--transition);
      &:hover {
        background-color: var(--primary-800);
        border-radius: var(--radius);
      }
        .delete-btn {
          border: none;
          background: transparent;
          color: var(--grey-200);
          font-size: 1rem;
          cursor: pointer;
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
