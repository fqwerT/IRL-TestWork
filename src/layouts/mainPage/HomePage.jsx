import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { removeUser } from "store/slices/userSlice";
import { Items } from "components/items/Items";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();


  return isAuth ? (
    <div>
      <Items/>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <div>
      <h1>Home</h1>
      <Navigate to="/loginPage" />
    </div>
  );
};
