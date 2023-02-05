import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import { getTitle } from '../../selectors/recipes';

function Home() {
  const isLogged = useSelector((state) => state.user.logged);
  const recipes = useSelector((state) => state.recipes.list);
  const favRecipes = useSelector((state) => state.user.favRecipes);
  const title = useSelector((state) => getTitle(state.recipes.list));
  const favTitle = useSelector((state) => getTitle(state.user.favRecipes));
  const { pathname } = useLocation();

  if (pathname === '/favorites' && !isLogged) {
    return <Navigate to="/" />;
  }
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text={pathname === '/favorites' ? favTitle : title}
        recipes={pathname === '/favorites' ? favRecipes : recipes}
      />
    </Page>
  );
}

export default Home;
