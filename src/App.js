import { Landing, RecipeSearch, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="search" element={<RecipeSearch />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
