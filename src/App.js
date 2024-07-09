import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Otp from "./pages/otp";
import Error from "./pages/error";
import Passwordreset from "./components/Passwordreset";
import ForgotPassword from "./components/ForgotPassword";
import Headers from "./components/headers";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/passwordreset" element={<Passwordreset />} />
        <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
        <Route path="/user/otp" element={<Otp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
