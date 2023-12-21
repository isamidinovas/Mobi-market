import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SighUp from "./pages/signUp/SighUp";
import SighUpPass from "./pages/sighUpPass/SighUpPass";
import Reset from "./pages/reset/Reset";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sighUp" element={<SighUp />} />
        <Route path="/sighUpPass" element={<SighUpPass />} />
        {/* <Route path="/passwordReset" element={<Reset />} /> */}
      </Routes>
    </div>
  );
}

export default App;
