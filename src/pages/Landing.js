import main1 from '../images/cooking.svg';
import main2 from '../images/shopping.svg';
import Logo from '../components/Logo';
import Wrapper from '../wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="section-center page">
        <div className="info">
          <h1>meal planning app</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            veniam accusantium eligendi fugit corporis numquam inventore
            perferendis saepe laboriosam non!
          </p>
          <Link to="/search" className="btn main-btn">
            Explore Recipes
          </Link>
        </div>
        <div className="img-container">
          <img src={main1} alt="cooking" className="main-img img" />
          <img src={main2} alt="shopping_cart" className="accent-img img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
