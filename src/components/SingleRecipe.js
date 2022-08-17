import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import Wrapper from '../wrappers/SingleRecipe';

const SingleRecipe = ({ id, category, image, name }) => {
  const [favorite, setFavotie] = useState(false);
  return (
    <Wrapper>
      <img src={image} alt="food" className="photo" />
      <div className="recipe-info">
        <h1>{name}</h1>
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
