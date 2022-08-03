import React from "react";
import "./profile.css";
const ProfileTwo = () => {
  return (
    <div className="container-fluid home_container_profile">
      <div className="section_profile">
        <div className="img_div">
          <img src="/images/tree.png" style={{ width: "300px" }} />
          <img src="/images/girl.png" className="img_girl" />
        </div>
        <div className="edit_div">
          <img src="/images/edit.png" className="img_edit" />
        </div>
        <div className="text_name">
          <div>Radhika Sharma</div>
          <div>This information will not be public on the app.</div>
        </div>
        <div className="btn-div">
          <button className="btn-1">My Posts</button>
          <button className="btn-1">My Drafts </button>
          <button className="btn-2">Saved Drafts</button>
        </div>
        <div className="search-div">
          <img src="/images/pic8.png" />
          SearchKeypad
        </div>
        <div className="social_service_div">
          <div className="div_ss">
            Anxiety
            <img src="/images/tag.png" className="db_img" />
          </div>
          <p>
            There are only a few nice things that I want to say to you. Although
            I hate when you are here, it makes me appreciate when you’re gone.
            When you leave, I appreciate the little things that I can’t do when
            you’re around.
            <span className="read_text"> Read More....</span>
          </p>
        </div>
        <div className="social_service_div">
          <div className="div_ss">
            Failure
            <img src="/images/tag.png" className="db_img" />
          </div>
          <p>
            There is not a single person who has not seen a failure in life. One
            should not feel disheartened at a failure but should try to learn
            from his failures. Failures are the stepping stones towards
            success.So take it to be imp .
            <span className="read_text"> Read More....</span>
          </p>
        </div>
        <div className="social_service_div">
          <div className="div_ss">
            Adulting
            <img src="/images/tag.png" className="db_img" />
          </div>
          <p>
            There are many factors that constitute being an adult. An adult is
            much more than turning the age of 18. The definition in the
            dictionary states an adult means being completely grown.
            <span className="read_text"> Read More....</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileTwo;
