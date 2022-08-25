import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../wrappers/SearchContainer';
import {
  fetchRecipes,
  handleChange,
  clearInput,
} from '../features/allRecipes/allRecipesSlice';
import { FiSearch } from 'react-icons/fi';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const SearchContainer = () => {
  const { isLoading, search, page } = useSelector((store) => store.allRecipes);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      toast.error('Please fill out the search field');
      return;
    }
    if (!isLoading) {
      dispatch(fetchRecipes({ search, page }));
    }
  };

  const handleSearchInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    dispatch(fetchRecipes({ search, page }));
  }, [search, page]);

  return (
    <Wrapper className="search-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-search"
          placeholder="what do you feel like cooking?"
          value={search}
          name="search"
          onChange={handleSearchInput}
        />
        <button className="search-icon" disabled={isLoading}>
          <FiSearch />
        </button>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
