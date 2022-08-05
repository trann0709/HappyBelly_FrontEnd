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
  }
`;

export default Wrapper;
