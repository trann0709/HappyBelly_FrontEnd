import { useDispatch, useSelector } from 'react-redux';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { changePage } from '../features/allRecipes/allRecipesSlice';
import Wrapper from '../wrappers/PageBtnContainer';

const PageBtnContainer = () => {
  const { page, numOfPages } = useSelector((store) => store.allRecipes);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper className="section-center">
      <button type="button" className="prev-btn" onClick={prevPage}>
        <FaChevronLeft />
      </button>
      {pages.map((pageNumber) => {
        return (
          <button
            type="button"
            className={pageNumber === page ? 'active num-page' : 'num-page'}
            key={pageNumber}
            onClick={() => dispatch(changePage(pageNumber))}
          >
            {pageNumber}
          </button>
        );
      })}
      <button type="button" className="next-btn" onClick={nextPage}>
        <FaChevronRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
