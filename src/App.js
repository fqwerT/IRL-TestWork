import "./App.css";
import { Header } from "components/headerComponents/header";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "layouts/mainPage/HomePage";
import { RegisterPage } from "layouts/mainPage/RegisterPage/RegisterPage";
import { LoginPage } from "layouts/mainPage/LoginPage/LoginPage";
import { CurrentCard } from "layouts/cardPage/CurrentCard";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/HomePage" element={<HomePage />}></Route>
        <Route path="/registerPage" element={<RegisterPage />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/CurrentCard/:id" element={<CurrentCard/>} />
      </Routes>
    </div>
  );
}

export default App;
