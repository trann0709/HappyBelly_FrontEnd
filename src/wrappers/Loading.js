import styled from 'styled-components';
import background from '../images/loading.jpg';

const Wrapper = styled.section`
  height: 100%;
  min-height: calc(100vh - 6rem);
  display: grid;
  place-items: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${background}) center/cover;
  div {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    border: 4px solid;
    border-bottom-color: var(--primary-300);
    animation: move 1s linear infinite;

    @keyframes move {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export default Wrapper;
