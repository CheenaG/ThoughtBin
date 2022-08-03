import React from "react";
import "./iphone.css";
import { useNavigate } from "react-router-dom";
const Iphone = () => {
  const navigation = useNavigate();
  const goNext = () => {
    navigation("/iphone2");
  };
  return (
    <div className="container-fluid home_container4">
      <div className="row">
        <div className="col-lg-12">
          <div className="promise_section">
            <div className="hands_logo">
              {" "}
              <img
                src="/images/pic6.png"
                className="mt-5 img6"
                style={{ width: "280px", paddingBottom: "23px" }}
              />
            </div>

            <div className="iphone_div">
              <p>
                There are people who want to listen to your story. We
                <br />
                @ThoughtBin bridge this gap.
                <br /> You can use this app for personal diary writing.
              </p>
            </div>
            <div className="dots_div">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="text_next_iphone" onClick={() => goNext()}>
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Iphone;
