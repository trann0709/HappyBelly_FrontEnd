import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/SingleRecipe';
import { useDispatch } from 'react-redux';
import { fetchSingleRecipe } from '../features/singleRecipe/singleRecipeSlice';
import FavoriteButton from './FavoriteButton';

const SingleRecipe = ({ id, category, image, name }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <img src={image} alt="food" className="photo" />
      <div className="recipe-info">
        <h1>{name}</h1>
        <p>{category}</p>
      </div>
      <footer>
        <Link
          to={`/main/recipes/${id}`}
          className="btn read-more"
          onClick={() => dispatch(fetchSingleRecipe(id))}
        >
          Check out
        </Link>
        <FavoriteButton id={id} category={category} image={image} name={name} />
      </footer>
    </Wrapper>
  );
};

export default SingleRecipe;
