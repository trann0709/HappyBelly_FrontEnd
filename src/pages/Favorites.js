import { useSelector } from 'react-redux';
import { Loading, SingleRecipe } from '../components';
import Wrapper from '../wrappers/RecipesContainer';

const Favorites = () => {
  const { isLoading, favoriteList } = useSelector(
    (store) => store.favoriteList
  );
  const { user } = useSelector((store) => store.user);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className="section-center">
      <section className="recipes-container">
        {user &&
          favoriteList.map((recipe) => {
            return <SingleRecipe key={recipe.id} {...recipe} />;
          })}
      </section>
    </Wrapper>
  );
};

export default Favorites;
