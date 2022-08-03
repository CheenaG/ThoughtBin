import React, { useEffect, useState } from "react";
import "./post.css";
import CareerModal from "../modal/modal";

const Post = () => {
  return (
    <div className="container-fluid home_container_post">
      <div className="post_div">
        <div className="cross_div">
          <button className="btn_cross">
            <img src="/images/pic18.png" />
          </button>
        </div>
        <div className="main_post_div">
          <div className="post_text">
            <div className="career_text">Career</div>I am considering a career
            as a software engineer. The current trends show that software
            engineers are in high demand because everything is being
            digitalized, right from grocery shopping to travel, and even
            healthcare. Therefore, I will work towards becoming a software
            engineer. I intend to accomplish my goal by first scoring good marks
            in the board exams and then applying to reputed colleges. I will get
            my bachelor's and master's degrees in computer science.
            Simultaneously, I will also enroll myself in an internship programme
            in reputed companies so that I can learn the ropes of the trade. And
            then I will be all set to build my career, one step at a time.
            <hr className="break" />
            <img src="/images/pic9.png" />
            <img src="/images/pic10.png" />
            <img src="/images/pic11.png" />
            <img src="/images/pic12.png" />
            <img src="/images/pic13.png" />
            <img src="/images/pic14.png" />
            <img src="/images/pic15.png" />
            <img src="/images/pic16.png" className="img_16" />
          </div>
        </div>
        <div className="div_swipe">
          <div className="btn-swipe">
            {" "}
            <img src="/images/pic17.png" />
          </div>
          <p>Swipe Down</p>

          <CareerModal />
        </div>
      </div>
    </div>
  );
};
export default Post;
