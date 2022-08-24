import { useDispatch, useSelector } from 'react-redux';
import { Loading, SingleRecipe } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/RecipesContainer';
import PageBtnContainer from '../components/PageBtnContainer';
import {
  changePage,
  fetchFavorite,
} from '../features/favoriteList/favoriteListSlice';
import { useEffect } from 'react';

const Favorites = () => {
  const { isLoading, favoriteList, totalRecipes, page, numOfPages, sort } =
    useSelector((store) => store.favoriteList);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchFavorite({ sort, page }));
      return;
    }
  }, [sort, page]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className="section-center">
      <div className="user">
        {user ? (
          <h3>
            {totalRecipes} {totalRecipes > 1 ? 'Recipes' : 'Recipe'} saved
          </h3>
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
      <section className="recipes-container">
        {user &&
          favoriteList.map((recipe) => {
            return <SingleRecipe key={recipe.id} {...recipe} />;
          })}
      </section>
      {totalRecipes > 6 && (
        <PageBtnContainer
          page={page}
          numOfPages={numOfPages}
          changePage={changePage}
        />
      )}
      <Link to="/main/recipes" className="btn btn-back">
        back to search
      </Link>
    </Wrapper>
  );
};

export default Favorites;
