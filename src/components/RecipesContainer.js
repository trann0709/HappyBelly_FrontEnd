import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleRecipe from './SingleRecipe';
import Loading from './Loading';

const RecipesContainer = () => {
  const { allFetchedRecipes, totalRecipes, isLoading } = useSelector(
    (store) => store.allRecipes
  );

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
      <h3>{totalRecipes} recipes found</h3>
      <section className="recipes-container">
        {allFetchedRecipes.map((recipe) => {
          return <SingleRecipe key={recipe.idMeal} {...recipe} />;
        })}
      </section>
    </Wrapper>
  );
};

export default RecipesContainer;

const Wrapper = styled.section`
  text-align: center;
  margin-top: 4rem;
  h3 {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 4rem;
  }
  .recipes-container {
    width: 85vw;
    max-width: 1170px;
    margin: 2rem auto;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
  }
`;
