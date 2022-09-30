import { useDispatch, useSelector } from 'react-redux';
import { FormRowSelect, Loading, SingleRecipe } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/RecipesContainer';
import PageBtnContainer from '../components/PageBtnContainer';
import {
  changePage,
  fetchFavorite,
  handleSort,
} from '../features/favoriteList/favoriteListSlice';
import { useEffect } from 'react';

const Favorites = () => {
  const {
    isLoading,
    favoriteList,
    totalRecipes,
    page,
    numOfPages,
    sort,
    sortOptions,
  } = useSelector((store) => store.favoriteList);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchFavorite({ sort, page }));
      return;
    }
  }, [sort, page]);

  const handleChange = (e) => {
    if (isLoading) {
      return;
    }
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleSort({ name, value }));
  };

  return (
    <Wrapper className="section-center">
      <div className="user">
        {user ? (
          <div className="filter">
            <h3>
              {totalRecipes} {totalRecipes > 1 ? 'Recipes' : 'Recipe'} saved
            </h3>
            <FormRowSelect
              name="sort"
              value={sort}
              list={sortOptions}
              handleChange={handleChange}
            />
          </div>
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
