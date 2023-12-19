import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SighUp from "./pages/signUp/SighUp";
import SighUpPass from "./pages/sighUpPass/SighUpPass";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sighUp" element={<SighUp />} />
        <Route path="/sighUpPass" element={<SighUpPass />} />
      </Routes>
    </div>
  );
}

export default App;
