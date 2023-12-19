import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SighUp from "./pages/signUp/SighUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sighUp" element={<SighUp />} />
      </Routes>
    </div>
  );
}

export default App;
