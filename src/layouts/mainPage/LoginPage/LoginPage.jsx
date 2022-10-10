import { Link } from "react-router-dom";
import { Login } from "components/forms/Login";
import style from './login.module.scss'

export const LoginPage = () => {
  return (
    <div className={style.login}>
      <h1 className={style.login__heading}>Login</h1>
        <Login/>
      <p className={style.login__paragraph}>
        or <Link className={style.login__link} to="/registerPage"> register</Link>
      </p>
    </div>
  );
};
