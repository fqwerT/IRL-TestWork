import { useSelector } from "react-redux";
import React from "react";

export function useAuth() {
  const { email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
