import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import Wrapper from '../wrappers/SingleRecipe';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleRecipe } from '../features/singleRecipe/singleRecipeSlice';
import {
  addFavorite,
  removeFavorite,
} from '../features/favoriteList/favoriteListSlice';
import { toast } from 'react-toastify';

const SingleRecipe = ({ id, category, image, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const { isLoading } = useSelector((store) => store.favoriteList);

  // get the favoritelist and check if the recipe is marked, update properly.
  const [favorite, setFavorite] = useState(false);
  const toggleFavorite = () => {
    if (!user) {
      toast.warning('please log in to continue');
      navigate('/register');
    } else {
      setFavorite(!favorite);
    }
    if (!favorite) {
      dispatch(addFavorite({ id, category, image, name }));
      return;
    } else {
      dispatch(removeFavorite({ id }));
      return;
    }
  };
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
          onClick={toggleFavorite}
          className="favorite-btn"
          disabled={isLoading}
        >
          {favorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </footer>
    </Wrapper>
  );
};

export default SingleRecipe;
