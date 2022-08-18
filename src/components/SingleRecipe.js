import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import Wrapper from '../wrappers/SingleRecipe';
import { useDispatch } from 'react-redux';
import { fetchSingleRecipe } from '../features/singleRecipe/singleRecipe';

const SingleRecipe = ({ id, category, image, name }) => {
  const dispatch = useDispatch();
  const [favorite, setFavotie] = useState(false);
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
        <button
          type="button"
          onClick={() => setFavotie(!favorite)}
          className="favorite-btn"
        >
          {favorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </footer>
    </Wrapper>
  );
};

export default SingleRecipe;
