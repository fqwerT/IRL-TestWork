import { useAuth } from "hooks/useAuth";
import React from "react";
import { useNavigate } from 'react-router-dom';

export const WithAuthUser = (Component) => {
  const MyComponent = (props) => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    return isAuth ? <Component props={{props}} /> : navigate('/loginPage')
  };

  return MyComponent;
};
