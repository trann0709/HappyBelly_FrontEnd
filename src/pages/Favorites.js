import { useSelector } from 'react-redux';
import { Loading, SingleRecipe } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/RecipesContainer';

const Favorites = () => {
  const { isLoading, favoriteList, totalRecipes } = useSelector(
    (store) => store.favoriteList
  );
  const { user } = useSelector((store) => store.user);

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
      <Link to="/main/recipes" className="btn btn-back">
        back to search
      </Link>
    </Wrapper>
  );
};

export default Favorites;
