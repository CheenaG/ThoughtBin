import React from "react";
import "./profile.css";
const Profile = () => {
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
          <button className="btn-1">My Drafts</button>
          <button className="btn-2">My Posts</button>
          <button className="btn-1">My Saved Posts</button>
        </div>
        <div className="search-div">
          <img src="/images/pic8.png" />
          SearchKeypad
        </div>
        <div className="social_service_div">
          <div className="div_ss">
            Social Service
            <img src="/images/dustbin.png" className="db_img" />
          </div>
          <p>
            All citizens should realize their duty towards society and should
            try to inculcate the spirited of social service among children.
            Red-cross, scouting, N.C.C. and A.C.C. should be encouraged in
            educational institutions.{" "}
            <span className="read_text"> Read More....</span>
          </p>
        </div>
        <div className="social_service_div">
          <div className="div_ss">
            Fun Life
            <img src="/images/dustbin.png" className="db_img" />
          </div>
          <p>
            I went to an exhibition with my friends recently, and was very
            impressed with it. It was held in the musical grounds of our town,
            and was titled ‘The Arts and Crafts Exhibition’. It was a big
            exhibition, though not as big as the international.
            <span className="read_text"> Read More....</span>
          </p>
        </div>
        <div className="social_service_div">
          <div className="div_ss">
            Horrible
            <img src="/images/dustbin.png" className="db_img" />
          </div>
          <p>
            It was a cold and foggy day. There wasn’t much traffic on the road.
            I was standing in the balcony of my house when, suddenly, I heard a
            loud noise. The driver of a car had lost control at a turning and
            had
            <span className="read_text"> Read More....</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
