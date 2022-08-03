import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "./createaccount.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateAccount = () => {
  const navigation = useNavigate();
  const LogIn = () => {
    navigation("/sign");
  };
  const [check, setCheck] = useState(false);
  const [userdata, setUserData] = useState({
    email: { value: "", message: "please enter valid email", display: false },
    password: {
      value: "",
      message: "please enter  password",
      display: false,
    },
    confirmpassword: {
      value: "",
      message: "password and confirm password should be same",
      display: false,
    },
  });
  const HandleUserData = (e, input) => {
    console.log(e, input);
    const newdata = { ...userdata };
    newdata[input].value = e.target.value;
    setUserData(newdata);
  };

  const saveUserData = () => {
    var url = "http://localhost:2222/userlist";
    var newuserdata = {
      email: userdata.email.value,
      password: userdata.password.value,
      confirmpassword: userdata.confirmpassword.value,
    };
    // axios.post(url, newuserdata).then((response) => {
    //   alert(response);
    // });
    if (check) {
      console.log(newuserdata);
      alert("Form submitted successfully");
    }
  };
  const handledata = () => {
    const data = { ...userdata };

    if (data.email.value == "") {
      data.email.display = true;
      setUserData(data);
    } else if (data.password.value == "") {
      data.password.display = true;
      setUserData(data);
    } else if (data.confirmpassword.value !== data.password.value) {
      data.confirmpassword.display = true;
      setUserData(data);
    } else {
      saveUserData(data);
    }
  };

  return (
    <div className="container-fluid home_container3">
      <div className="row">
        <div className="col-lg-12">
          <div className="center_div_sign">
            <form onSubmit={handledata}>
              <div className="sign_text mb-5">
                Create <br />
                New Account
              </div>
              <div>
                <input
                  type="email"
                  className="form-control p-2"
                  placeholder="Phone number or Email"
                  onChange={(e) => HandleUserData(e, "email")}
                  value={userdata.email.value}
                />
                {userdata.email.display ? (
                  <div
                    style={{
                      color: "red",
                      textAlign: "right",
                      fontSize: "10px",
                      padding: "2px",
                    }}
                  >
                    {userdata.email.message}
                  </div>
                ) : null}

                <input
                  type="password"
                  className="form-control p-2"
                  placeholder="Password"
                  onChange={(obj) => HandleUserData(obj, "password")}
                  value={userdata.password.value}
                />
                {userdata.password.display ? (
                  <div
                    style={{
                      color: "red",
                      textAlign: "right",
                      fontSize: "10px",
                      padding: "2px",
                    }}
                  >
                    {userdata.password.message}
                  </div>
                ) : null}
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Confirm Password"
                  onChange={(obj) => HandleUserData(obj, "confirmpassword")}
                  value={userdata.confirmpassword.value}
                />
                {userdata.confirmpassword.display ? (
                  <div
                    style={{
                      color: "red",
                      textAlign: "right",
                      fontSize: "10px",
                      padding: "2px",
                    }}
                  >
                    {userdata.confirmpassword.message}
                  </div>
                ) : null}
                <input
                  type="checkbox"
                  value={check}
                  onChange={() => setCheck(!check)}
                />
                <span className="check">I agree with terms & conditions</span>
                <div className="btn_sign">
                  <button
                    className="sign_in_btn"
                    onClick={() => saveUserData()}
                  >
                    Create Account
                  </button>
                </div>
                <div className="pass_text">Forgot Password?</div>
                <div className="line_center">
                  <span style={{ color: "lightgrey", fontSize: "10px" }}>
                    Or
                  </span>
                </div>
                <div className="btn-grp-1">
                  <button className="btn_google2">
                    <span className="icon_div">
                      <FcGoogle />
                    </span>
                    <span className="google_text">Continue with Google</span>
                  </button>
                </div>
                <div className="btn-grp-1">
                  <button className="btn_google2">
                    <span className="icon_div">
                      <FaFacebook />
                    </span>
                    <span className="google_text">Continue with Google</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="account_text">
              Already Have an account ?{" "}
              <span
                style={{ color: "lightgreen", fontSize: "10px" }}
                onClick={() => LogIn()}
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAccount;
