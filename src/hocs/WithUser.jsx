import { useAuth } from "hooks/useAuth";
import React from "react";
import { useNavigate } from 'react-router-dom';

export const WithAuthUser = (Component) => {
  const MyComponent = (props) => {
    const { isAuth } = useAuth();
    const authUser = window.localStorage.getItem('EMAIL')
    console.log(authUser)
    const navigate = useNavigate();
    return authUser  ? <Component props={{props}} /> : navigate('/loginPage')
  };

  return MyComponent;
};
