import { AuthUserItems } from "components/items/Items";
import { WithAuthUser } from "hocs/WithUser";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const HandleLogOut = () => {
    window.localStorage.clear("EMAIL");
    navigate("/loginPage");
  };

  return (
    <div>
      <AuthUserItems />
      <button onClick={HandleLogOut}>Log out</button>
    </div>
  );
};

export const AuthHomePage = WithAuthUser(HomePage);
