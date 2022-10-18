import { Link } from "react-router-dom";
import { Login } from "components/forms/Login";
import style from "./login.module.scss";

import React from "react";

const defaultState = {
  email: null,
  token: null,
  id: null,
};

export const Context = React.createContext(defaultState);

const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return (
        (state.email = action[payload].email),
        (state.token = action[payload].token),
        (state.id = action[payload].id)
      );
    case REMOVE_USER:
      return (state.email = null), (state.token = null), (state.id = null);

    default:
      return state;
  }
};

export const LoginPage = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultState)
  return ( 
    <>
      <Context.Provider value={{state, dispatch}}></Context.Provider>
      <div className={style.login}>
        <h1 className={style.login__heading}>Login</h1>
        <Login />
        <p className={style.login__paragraph}>
          or{" "}
          <Link className={style.login__link} to="/registerPage">
            {" "}
            register
          </Link>
        </p>
      </div>
    </>
  );
};
