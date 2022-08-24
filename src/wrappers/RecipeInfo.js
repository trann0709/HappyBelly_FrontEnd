import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 2rem;

  .recipe-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 0.75rem;
    column-gap: 1rem;
    letter-spacing: var(--spacing);
    line-height: 1.3;
    margin-bottom: 1rem;
    h2 {
      margin-bottom: 0;
    }
    p {
      background: var(--primary-600);
      padding: 0.15rem 0.875rem;
      border-radius: var(--radius);
    }
  }
  .photo-container {
    height: 30rem;
    width: 80vw;
    max-width: 500px;
    background: blue;
    border-radius: var(--radius);
    box-shadow: var(--shadow-3);
    margin: 0 auto;
    .photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius);
    }
  }
  .recipe-content {
    .instructions,
    .ingredients {
      margin-top: 4rem;
    }
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
    }
    h3 {
      margin-bottom: 0.5rem;
      background: var(--grey-100);
      color: var(--grey-900);
      text-align: center;
      padding: 0.35rem 0.5rem;
    }

    .ingredients {
      margin-bottom: 1.5rem;

      h3 {
        margin-bottom: 0;
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
      }
      .items {
        border: 2px solid var(--grey-100);
        border-bottom-left-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        padding: 0.75rem 1rem;
        position: relative;
        p {
          text-transform: capitalize;
        }
        .list-btn {
          position: absolute;
          bottom: -1.75rem;
          right: -0.55%;
          width: 10rem;
        }
      }
    }

    .instructions {
      h3 {
        border-radius: var(--radius);
      }
      ul {
        padding: 0.75rem 0;
        list-style-type: circle;
        padding-left: 2rem;
      }
    }

    @media (max-width: 992px) {
      .items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        column-gap: 0.75rem;
        .list-btn {
          bottom: -1rem;
        }
      }
    }
  }
`;

export default Wrapper;
