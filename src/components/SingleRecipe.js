import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

const SingleRecipe = ({
  idMeal: id,
  strCategory: category,
  strMealThumb: image,
  strMeal: title,
}) => {
  const [favorite, setFavotie] = useState(false);
  return (
    <Wrapper>
      <img src={image} alt="food" className="photo" />
      <div className="recipe-info">
        <h1>{title}</h1>
        <p>{category}</p>
      </div>
      <footer>
        <Link to={`/recipes/${id}`} className="btn read-more">
          Check out
        </Link>
        <button type="button" onClick={() => setFavotie(!favorite)}>
          {favorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </footer>
    </Wrapper>
  );
};

export default SingleRecipe;

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
      background: transparent;
      border: transparent;
      color: #e84e58;
      svg {
        font-size: 1.5rem;
      }
      &:hover {
        transform: scale(1.2);
      }
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
