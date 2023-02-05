import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import { actionChangeField, actionCheckLogin, actionLogout } from '../../actions/user';

function AppHeader() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const logged = useSelector((state) => state.user.logged);
  const message = useSelector((state) => state.user.message);

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <div>
        <LoginForm
          email={email}
          password={password}
          changeField={(newValue, inputName) => {
            dispatch(actionChangeField(newValue, inputName));
          }}
          handleLogin={() => {
            dispatch(actionCheckLogin());
          }}
          handleLogout={() => {
            dispatch(actionLogout());
          }}
          isLogged={logged}
          loggedMessage={message}
        />

        {!logged && <div className="loginError">{message}</div> }
      </div>

      {logged && <Link to="/favorites">&hearts;</Link>}
    </header>
  );
}

export default AppHeader;
