import React from "react";
import { Link } from "react-router-dom";
import style from './header.module.scss'


 
export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__box}>
      <Link className={style.header__item} to="HomePage">Home</Link>
      <Link className={style.header__item} to="loginPage">Login</Link>
      <Link className={style.header__item} to="registerPage">Register</Link>
      </div>
    </div>
  );
};
