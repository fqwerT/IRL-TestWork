import { Link } from "react-router-dom";
import { SignUp } from "components/forms/SignUp";
import style from "./register.module.scss";

export const RegisterPage = () => {
  return (
    <div className={style.register}>
      <h1 className={style.register__heading}>Register</h1>
      <SignUp />
      <p className={style.register__paragraph}>
        Alredy have an account? <Link className={style.register__link} to="/loginPage">Login</Link>
      </p>
    </div>
  );
};
