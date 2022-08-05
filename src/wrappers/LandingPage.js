import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 2rem 0;
  nav {
    width: 90vw;
    max-width: var(--max-width);
    height: 5rem;
    display: flex;
    margin: 0 auto;
    padding-left: 2rem;
  }
  .img-container {
    display: none;
  }
  .page {
    min-height: calc(100vh - 9rem);
    display: grid;
    place-items: center;
  }
  .info {
    text-align: center;
  }
  h1 {
    font-weight: 700;
  }
  p {
    margin-bottom: 2rem;
    color: var(--grey-600);
    width: 85vw;
    max-width: 40rem;
  }
  .main-btn {
    padding: 0.875rem 1.75rem;
  }
  @media (min-width: 1170px) {
    .page {
      grid-template-columns: 1fr 1fr;
      align-content: center;
    }
    .info {
      text-align: left;
    }
    p {
      width: 30rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      position: absolute;
      top: -5%;
      right: 3%;
      width: 180px;
    }
    .accent-img {
      position: relative;
      height: 350px;
    }
    .img-container::before {
      content: '';
      position: absolute;
      background: var(--grey-300);
      width: 100%;
      height: 100%;
      clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 53% 52%, 0% 0%);
      opacity: 0.7;
      right: -5%;
      top: 10%;
    }
  }
`;

export default Wrapper;
