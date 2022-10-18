import { useSelector } from "react-redux";
import { useStore } from "context";

export function useAuth() {
  const { state } = useStore();

  const { email, token, id } = state;

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
