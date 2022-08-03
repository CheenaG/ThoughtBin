import React from "react";
import "./post.css";
import CareerModal from "../modal/modal";

const AddPost = () => {
  return (
    <div className="container-fluid home_container_post">
      <div className="post_div">
        <div className="title_addpost">Pour Your Heart Out</div>
        <div className="addpost_text">
          <div className="text_1">Title</div>
          <div className="text_2">Topic Title</div>
          <div className="text_1">Details</div>
          <div className="topic_details_div">
            <p className="topic_text">Topic Details</p>
          </div>
        </div>
        <div className="post_btn">
          <button className="main_post_btn">Posts</button>
        </div>
        <div className="row">
          <div className="col-lg-6 text_3">Save to Drafts</div>

          <div className=" col-lg-6 text_4">
            {" "}
            <img src="/images/checkbox.png" />
            Turn Off Reactions
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
