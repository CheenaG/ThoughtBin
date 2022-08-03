import React from "react";
import "./socialpost.css";

const SocialPostTwo = () => {
  return (
    <div className="container-fluid home_container_socialpost">
      <div className="social_div">
        <div className="cross_div">
          <button className="btn_cross">
            <img src="/images/pic18.png" />
          </button>
        </div>
        <div className="main_post_div">
          <div className="social_text">
            <div
              className="social _service_text"
              style={{
                textDecoration: "underline",
                fontSize: "14px",
                padding: "12px",
                textAlign: "center",
              }}
            >
              Social Service
            </div>
            <div className="grp_images">
              <img src="/images/3hearts.png" />
              <img src="/images/sunglasses.png" />
              <img src="/images/vomit.png" />
              <img src="/images/Face With Open Mouth.png" />
              <img src="/images/tears.png" />

              <img src="/images/mouth.png" />

              <img src="/images/bigeyes.png" />
              <img src="/images/Red Heart.png" />
              <img src="/images/horns.png" />
              <img src="/images/Crying Face.png" />
              <img src="/images/coldface.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialPostTwo;
