import React from "react";
import "./breathin.css";
import { useNavigate } from "react-router-dom";

const Breath = () => {
  const navigation = useNavigate();
  const getNext = () => {
    navigation("/iphone");
  };
  return (
    <div className="container-fluid home_container2">
      <div className="row">
        <div className="col-lg-12">
          <div className="body_color_linear">
            <div>
              <div>
                <img src="/images/pic3.png" style={{ width: "250px" }} />
              </div>
              <div className="next_text">
                <div onClick={() => getNext()}>Next</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Breath;
