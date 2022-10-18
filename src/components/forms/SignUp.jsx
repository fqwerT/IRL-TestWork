import { Forms } from "./Forms";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useStore } from "context";

export const SignUp = () => {
  const navigate = useNavigate();
  const {
    state: { setAuthUser },
    dispatch,
  } = useStore();

  const auth = getAuth();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      })
      .catch(console.error);
  };

  return <Forms title={"register"} handleClick={handleRegister} />;
};
