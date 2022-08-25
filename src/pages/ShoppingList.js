import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/ShoppingList';
import { ToastContainer } from 'react-toastify';
import {
  deleteFromList,
  deleteList,
  fetchList,
} from '../features/shoppingList/shoppingListSlice';
import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

// import { useEffect } from 'react';

const ShoppingList = () => {
  const { user } = useSelector((store) => store.user);
  const { isLoading, shoppingList } = useSelector(
    (store) => store.shoppingList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchList());
      return;
    }
  }, []);

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
          {shoppingList.length > 0 && (
            <div className="list-container">
              {shoppingList.map((item, index) => {
                const { id, name, ingredient } = item;
                return (
                  <article className="grocery-item">
                    <p key={index}>{ingredient}</p>
                    <button
                      type="button"
                      className="delete-btn"
                      disabled={isLoading}
                      // onClick={() =>
                      //   dispatch(deleteFromList({ id, name, ingredient }))
                      // }
                    >
                      <FaTrash />
                    </button>
                  </article>
                );
              })}
            </div>
          )}
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
