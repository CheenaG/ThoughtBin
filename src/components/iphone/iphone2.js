import React from "react";
import "./iphone.css";
import { useNavigate } from "react-router-dom";
const Iphone2 = () => {
  const navigation = useNavigate();
  const gonext = () => {
    navigation("/sign");
  };

  return (
    <div className="container-fluid home_container4">
      <div className="row">
        <div className="col-lg-12">
          <div className="promise_section">
            <div className="hands_logo">
              {" "}
              <img
                src="/images/pic7.png"
                className="mt-5 img6"
                style={{ width: "250px", paddingBottom: "23px" }}
              />
            </div>
            <div className="text_promise">The Promise</div>
            <div className="iphone_div">
              <p>
                “I promise that I will be sympathetic and <br />
                supportive towards the community.
              </p>
            </div>
            <div className="dots_div">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="text_next_iphone" onClick={() => gonext()}>
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Iphone2;
