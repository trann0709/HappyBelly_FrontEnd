import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components';
import { addToList } from '../features/shoppingList/shoppingListSlice';
import Wrapper from '../wrappers/RecipeInfo';
import FavoriteButton from './FavoriteButton';

const RecipeInfo = () => {
  const { isLoading, recipeDetails } = useSelector(
    (store) => store.singleRecipe
  );
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading />;
  }

  const { id, area, category, instructions, name, image, ingredientList } =
    recipeDetails;

  return (
    <Wrapper>
      <div className="recipe-info">
        <h2>{name}</h2>
        {area && <p>{area}</p>}
        {category && <p>{category}</p>}
        <FavoriteButton id={id} category={category} image={image} name={name} />
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
            <button
              type="button"
              className="btn list-btn"
              onClick={() => dispatch(addToList({ id, name, ingredientList }))}
            >
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
