import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { sentOtpFunction } from "../services/Apis";
import Spinner from "react-bootstrap/Spinner";
import "../styles/mix.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [spiner, setSpiner] = useState(false);

  const navigate = useNavigate();

  // sendotp
  const sendOtp = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Enter Your Email !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    } else {
      setSpiner(true);
      const data = {
        email: email,
      };

      const response = await sentOtpFunction(data);

      if (response.status === 200) {
        setSpiner(false);
        navigate("/user/otp", { state: email });
      } else {
        toast.error(response.response.data.error);
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, login here !</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
              />
            </div>
            <button className="btn" onClick={sendOtp}>
              Login
              {spiner ? (
                <span>
                  <Spinner animation="border" />
                </span>
              ) : (
                ""
              )}
            </button>
            <p style={{ color: "black", fontWeight: "bold" }}>
              Don't have and account <NavLink to="/register"> Sign up</NavLink>{" "}
            </p>
            <p style={{ color: "black", fontWeight: "bold" }}>
              Forgot Password{" "}
              <NavLink to="/password-reset"> Click Here to Reset</NavLink>{" "}
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
