import {
  Landing,
  RecipeSearch,
  Error,
  Register,
  Favorites,
  ShoppingList,
  SharedLayout,
} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Landing />} />
        <Route path="recipes" element={<SharedLayout />}>
          <Route index element={<RecipeSearch />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="shoppinglist" element={<ShoppingList />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
