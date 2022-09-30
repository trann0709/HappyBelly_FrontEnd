import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/ShoppingList';
import {
  addToList,
  deleteFromList,
  deleteList,
  fetchList,
} from '../features/shoppingList/shoppingListSlice';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const ShoppingList = () => {
  const { user } = useSelector((store) => store.user);
  const { isLoading, shoppingList, names } = useSelector(
    (store) => store.shoppingList
  );
  const dispatch = useDispatch();

  const [custom, setCustom] = useState({
    id: 'custom',
    name: 'custom',
    ingredientList: [],
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCustom({ ...custom, ingredientList: [value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToList(custom));
    setCustom({ ...custom, ingredientList: [] });
  };

  useEffect(() => {
    if (user) {
      dispatch(fetchList());
      return;
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className="section-center">
      {!user ? (
        <h3 className="non-user">
          Please{' '}
          <Link to="/register" className="link">
            Login
          </Link>{' '}
          To continue
        </h3>
      ) : (
        <section className="form">
          <h3>Grocery List</h3>
          <form>
            <div className="form-control">
              <input
                type="text"
                name="custom"
                value={custom.ingredientList}
                onChange={handleChange}
                className="custom"
                placeholder="e.g: eggs"
              />
              <button
                type="submit"
                className="btn submit-btn"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                add
              </button>
            </div>
          </form>
          {names.length > 0 &&
            names.map((recipeName, index) => {
              return (
                <div key={index} className="list-container">
                  <h4>{recipeName}</h4>
                  {shoppingList.map((item, index) => {
                    const { id, name, ingredient } = item;
                    return (
                      name === recipeName && (
                        <article key={index} className="grocery-item">
                          <p>{ingredient}</p>
                          <button
                            type="button"
                            className="delete-btn"
                            disabled={isLoading}
                            onClick={() =>
                              dispatch(deleteFromList({ id, ingredient }))
                            }
                          >
                            <FaTrash />
                          </button>
                        </article>
                      )
                    );
                  })}
                </div>
              );
            })}
          <button
            type="button"
            className="btn clear-btn"
            disabled={isLoading}
            onClick={() => dispatch(deleteList())}
          >
            clear list
          </button>
        </section>
      )}

      <Link to="/main/recipes" className="btn btn-back">
        back to search
      </Link>
    </Wrapper>
  );
};

export default ShoppingList;
