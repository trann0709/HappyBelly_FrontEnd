import styled from 'styled-components';

const SingleRecipe = ({
  idMeal: id,
  strCategory: category,
  strMealThumb: image,
  strMeal: title,
}) => {
  return (
    <Wrapper>
      <img src={image} alt="food" className="photo" />
      <div className="recipe-info">
        <h1>{title}</h1>
        <p>{category}</p>
      </div>
    </Wrapper>
  );
};

export default SingleRecipe;

const Wrapper = styled.article`
  margin-bottom: 3rem;
  height: 27rem;
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-4);
  }

  .photo {
    height: 20rem;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }

  .recipe-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.2rem 1rem;
    align-items: center;
    h1 {
      font-size: 1.25rem;
      justify-self: start;
      margin: 0;
      font-weight: 700;
    }
    p {
      justify-self: end;
      background: var(--primary-700);
      padding: 0.25rem 0.75rem;
      border-radius: var(--radius);
    }
  }
`;
