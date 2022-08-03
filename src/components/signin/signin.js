import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import "./signin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigation = useNavigate();
  const goNext = () => {
    navigation("/create");
  };
  const [check, setCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [signindata, setsignInData] = useState({
    email: { value: "", message: "please write your email", display: false },
    password: {
      value: "",
      message: "please enter correct password",
      display: false,
    },
  });

  const SaveuserSignIn = (e, value) => {
    console.log(e, "hello");
    const data = { ...signindata };
    data[value].value = e.target.value;
    setsignInData(data);
  };
  const onChangeCheck = () => {
    setCheck(!check);
    if (check) {
      setIsChecked(true);
    }
  };

  const validateUserdata = () => {
    const userNewData = { ...signindata };
    if (userNewData.email.value == "") {
      userNewData.email.display = true;
      setsignInData(userNewData);
    } else if (userNewData.password.value == "") {
      userNewData.password.display = true;
      setsignInData(userNewData);
    } else {
      setsignInData(userNewData);
    }
    if (check) {
      console.log(signindata);
      alert("Form submitted successfully");
    } else {
      setIsChecked(true);
    }
  };

  return (
    <div className="container-fluid home_container3">
      <div className="row">
        <div className="col-lg-12">
          <div className="center_div_sign">
            <form onSubmit={validateUserdata}>
              <div className="sign_text mb-5">Sign In</div>
              <div>
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Phone number or E-mail"
                  onChange={(e) => SaveuserSignIn(e, "email")}
                  value={signindata.email.value}
                />
                {signindata.email.display ? (
                  <div
                    style={{
                      color: "red",
                      textAlign: "right",
                      fontSize: "10px",
                      padding: "2px",
                    }}
                  >
                    {signindata.email.message}
                  </div>
                ) : null}
                <input
                  type="password"
                  className="form-control p-3"
                  placeholder="Password"
                  onChange={(e) => SaveuserSignIn(e, "password")}
                  value={signindata.password.value}
                />
                {signindata.password.display ? (
                  <div
                    style={{
                      color: "red",
                      textAlign: "right",
                      fontSize: "10px",
                      padding: "2px",
                    }}
                  >
                    {signindata.password.message}
                  </div>
                ) : null}
                <input
                  type="checkbox"
                  value={check}
                  onChange={() => onChangeCheck()}
                />
                <span
                  className="check"
                  style={{ color: isChecked ? "red" : "black" }}
                >
                  Remember Me
                </span>
                <div className="btn_sign">
                  <button type="submit" className="sign_in_btn">
                    Sign In
                  </button>
                </div>
                <div className="pass_text">Forgot Password?</div>
                <div className="line_center">
                  <span style={{ color: "lightgrey", fontSize: "10px" }}>
                    Or
                  </span>
                </div>
                <div className="btn-grp-1">
                  <button className="btn_google">
                    <span className="icon_div">
                      <FcGoogle />
                    </span>
                    <span className="google_text">Continue with Google</span>
                  </button>
                </div>
                <div className="btn-grp-1">
                  <button className="btn_google">
                    <span className="icon_div">
                      <FaFacebook />
                    </span>
                    <span className="google_text">Continue with Google</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="sign_up_text">
              Don't Have an account ?{" "}
              <span className="sign_text2" onClick={() => goNext()}>
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
