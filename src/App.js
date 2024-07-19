import Header from "./components/headers";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";
import Passwordreset from "./components/Passwordreset";
import ForgotPassword from "./components/ForgotPassword";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/contextprovider/context";

function App() {
  const [data, setData] = useState(false);

  const { setLoginData } = useContext(LoginContext);

  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();

    if (data.status === 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data);
      history("/dash");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true);
    }, 2000);
  }, []);

  return (
    <>
      {data ? (
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dashboard" element={< Dashboard />} />
            <Route path="/password-reset" element={<Passwordreset />} />
            <Route
              path="/forgotpassword/:id/:token"
              element={<ForgotPassword />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default App;
