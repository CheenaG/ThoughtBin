import React, { useEffect } from "react";
import "./splashscreen.css";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigation = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      navigation("/breath");
    }, 2000);
    return () => clearInterval(interval);
  }, [1]);
  return (
    <div className="container-fluid home_container">
      <div className="row">
        <div className="col-lg-12">
          <div className="body_color">
            <div className="center_div">
              <div>
                <div className="img1">
                  <img src="/images/pic2.png" className="pic1" />
                </div>
                <div className="img2">
                  <img src="/images/pic1.png" className="pic2" />
                </div>
              </div>
              <div className="tb_text">Thought Bin</div>
              <img src="/images/hearts.png" className="img3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Splash;
