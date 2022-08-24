import { useDispatch, useSelector } from 'react-redux';
import { FormRowSelect, Loading, SingleRecipe } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/RecipesContainer';

// import { useEffect } from 'react';

const ShoppingList = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user) {
  //     dispatch(fetchFavorite({ sort, page }));
  //     return;
  //   }
  // }, [sort, page]);

  return (
    <Wrapper className="section-center">
      <div className="user">
        {user ? (
          <h3>hello</h3>
        ) : (
          <h3 className="non-user">
            Please{' '}
            <Link to="/register" className="link">
              Login
            </Link>{' '}
            To continue
          </h3>
        )}
      </div>

      <Link to="/main/recipes" className="btn btn-back">
        back to search
      </Link>
    </Wrapper>
  );
};

export default ShoppingList;
