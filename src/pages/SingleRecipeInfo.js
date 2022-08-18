import { Link } from 'react-router-dom';
import RecipeInfo from '../components/RecipeInfo';
import Wrapper from '../wrappers/SingleRecipePage';

const SingleRecipeInfo = () => {
  return (
    <Wrapper className="section-center">
      <RecipeInfo />
      <Link to="../recipes" className="btn recipe-btn">
        back to search
      </Link>
    </Wrapper>
  );
};

export default SingleRecipeInfo;
