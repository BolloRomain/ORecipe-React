import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';
import Loading from 'src/components/App/Loading';

import './style.scss';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchRecipes } from '../../actions/recipes';

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.recipes.isLoading);

  useEffect(() => {
    dispatch(actionFetchRecipes());
  }, []);

  return (
    <div className="app">
      <Menu />

      {isLoading ? <Loading /> : (
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/recipe/:slug" element=<Recipe /> />
          <Route path="/favorites" element=<Home /> />
          <Route path="*" element=<Error /> />
        </Routes>
      )}
    </div>
  );
}

export default App;
