import React from "react";
import "./socialpost.css";
import SocialModal from "../modal/modal2";

const SocialPost = () => {
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
            <p>
              All citizens should realize their duty towards society and should
              try to inculcate the spirited of social service among children.
              Red-cross, scouting, N.C.C. and A.C.C. should be encouraged in
              educational institutions. There are only a few nice things that I
              want to say to you. Although I hate when you are here, it makes me
              appreciate when you’re gone. When you leave, I appreciate the
              little things that I can’t do when you’re around. It makes me find
              strength and confidence in myself in a whole new way. I also want
              to thank you, because of the way you and your buddy depression
              made me feel, I talk about you a lot. So much that I have made
              friends and have helped people through tough times when you two
              wouldn’t leave them alone either. I have people and a support
              system who make sure I’m okay when you come to visit on your own
              time.
            </p>
          </div>
        </div>
        <div className="div_swipe">
          <div className="btn-swipe">
            {" "}
            <img src="/images/pic17.png" />
          </div>
          <p>Swipe Down</p>
        </div>
        <SocialModal />
      </div>
    </div>
  );
};
export default SocialPost;
