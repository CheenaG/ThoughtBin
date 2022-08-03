import React from "react";
import "./profile.css";
const ProfileOne = () => {
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
          <button className="btn-2">My Drafts</button>
          <button className="btn-1">My Posts</button>
          <button className="btn-1">My Saved Posts</button>
        </div>
        <div className="search-div">
          <img src="/images/pic8.png" />
          SearchKeypad
        </div>
        <div className="social_service_div">
          <div className="div_ss">
            Compassion
            <img src="/images/dustbin.png" className="db_img" />
          </div>
          <p>
            Every noble action in the world has been stimulated by compassion.
            The worst enemy touched by its divine rays is transformed into a
            brother of your blood. The thunder’s might can destroy, but cannot
            sustain.
            <span className="read_text"> Read More....</span>
          </p>
        </div>
        <div className="social_service_div">
          <div className="div_ss">
            Overthinking
            <img src="/images/dustbin.png" className="db_img" />
          </div>
          <p>
            My brain constantly races, not necessarily stressfully, but it’s
            like my thoughts never rest. I have been told for years that I
            overthink things. And by things, I mean every meaningful or
            unnecessary thing, even down to which flavour Gatorade.
            <span className="read_text"> Read More....</span>
          </p>
        </div>
        <div className="social_service_div">
          <div className="div_ss">
            Bullying
            <img src="/images/dustbin.png" className="db_img" />
          </div>
          <p>
            It is the duty of the parents to constantly preach their children
            about not bullying anyone and that it is wrong.
            <span className="read_text"> Read More....</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileOne;
