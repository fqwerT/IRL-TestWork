import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Forms } from "./Forms";
import { useStore } from "context";
import { setAuthUser } from "context";

export const Login = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    state = {
      email: " ",
      token: " ",
      id: " ",
    },
  } = useStore();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setAuthUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/HomePage");
        window.localStorage.setItem("EMAIL", user.email);
      })
      .catch(() => alert("Invalid user!"));
  };
  return <Forms title={"sign in"} handleClick={handleLogin} />;
};
