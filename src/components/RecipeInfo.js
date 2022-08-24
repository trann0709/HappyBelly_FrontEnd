import { useSelector } from 'react-redux';
import { Loading } from '../components';
import Wrapper from '../wrappers/RecipeInfo';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

const RecipeInfo = () => {
  const { isLoading, recipeDetails } = useSelector(
    (store) => store.singleRecipe
  );

  const [favorite, setFavotie] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  const { area, category, instructions, name, image, ingredientList } =
    recipeDetails;

  return (
    <Wrapper>
      <div className="recipe-info">
        <h2>{name}</h2>
        {area && <p>{area}</p>}
        {category && <p>{category}</p>}
        <button
          type="button"
          onClick={() => setFavotie(!favorite)}
          className="favorite-btn"
        >
          {favorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <div className="photo-container">
        <img src={image} alt="dish" className="photo" />
      </div>
      <div className="recipe-content">
        <article className="ingredients">
          <h3>ingredients</h3>
          <div className="items">
            {ingredientList.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
            <button type="button" className="btn list-btn">
              add to list
            </button>
          </div>
        </article>
        <article className="instructions">
          <h3>instructions</h3>
          <ul>
            {instructions.map((step, index) => {
              return <li key={index}>{step}</li>;
            })}
          </ul>
        </article>
      </div>
    </Wrapper>
  );
};

export default RecipeInfo;
