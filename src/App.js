import "./App.css";
import { Header } from "components/headerComponents/header";
import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "layouts/mainPage/RegisterPage/RegisterPage";
import { LoginPage } from "layouts/mainPage/LoginPage/LoginPage";
import { CurrentCard } from "layouts/cardPage/CurrentCard";
import { AuthHomePage } from "layouts/mainPage/HomePage";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/HomePage" element={<AuthHomePage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/CurrentCard/:id" element={<CurrentCard />} />
      </Routes>
    </div>
  );
}

export default App ;
