import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/Error';
import error from '../images/error.svg';
const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={error} alt="error-page" className="img error-photo" />
        <h2>Sorry</h2>
        <h3>page not found</h3>
        <Link to="/search" className="btn">
          back to search
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
