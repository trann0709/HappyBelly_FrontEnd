import { useSelector } from 'react-redux';
import SingleRecipe from './SingleRecipe';
import Loading from './Loading';
import Wrapper from '../wrappers/RecipesContainer';
import PageBtnContainer from './PageBtnContainer';
import { changePage } from '../features/allRecipes/allRecipesSlice';

const RecipesContainer = () => {
  const { allFetchedRecipes, totalRecipes, isLoading, page, numOfPages } =
    useSelector((store) => store.allRecipes);

  if (isLoading) {
    return <Loading />;
  }

  if (totalRecipes === 0) {
    return (
      <Wrapper className="section-center">
        <h4>no recipes matched your search criteria</h4>
        <h5>please try search for a different recipe</h5>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="section-center">
      <h3>
        {totalRecipes} {totalRecipes > 1 ? 'Recipes' : 'Recipe'} found
      </h3>
      <section className="recipes-container">
        {allFetchedRecipes.map((recipe) => {
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
    </Wrapper>
  );
};

export default RecipesContainer;
