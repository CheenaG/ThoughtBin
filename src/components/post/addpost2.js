import React from "react";
import "./post.css";

const AddPostTwo = () => {
  return (
    <div className="container-fluid home_container_post">
      <div className="post_div">
        <div className="title_addpost">Pour Your Heart Out</div>
        <div className="addpost_text">
          <div className="text_1">Title</div>
          <div className="text_2">Compassion</div>
          <div className="text_1">Details</div>
          <div className="topic_details_div">
            <p className="text_addpost2">
              Every noble action in the world has been stimulated by compassion.
              The worst enemy touched by its divine rays is transformed into a
              brother of your blood. The thunder’s might can destroy, but cannot
              sustain.The adamant can break, but cannot unite.
            </p>
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
export default AddPostTwo;
