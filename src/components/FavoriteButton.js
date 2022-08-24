import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {
  addFavorite,
  removeFavorite,
} from '../features/favoriteList/favoriteListSlice';
const FavoriteButton = ({ id, category, image, name }) => {
  const { user } = useSelector((store) => store.user);
  const { isLoading, idList } = useSelector((store) => store.favoriteList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (idList.includes(id)) {
      setFavorite(true);
    }
  }, [idList]);

  const toggleFavorite = () => {
    if (!user) {
      navigate('/register');
    }
    setFavorite(!favorite);
    if (!favorite) {
      dispatch(addFavorite({ id, category, image, name }));
      return;
    } else {
      dispatch(removeFavorite(id));
      return;
    }
  };

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      className="favorite-btn"
      disabled={isLoading}
    >
      {favorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton;
