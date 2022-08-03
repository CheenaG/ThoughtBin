import React from "react";
import "./promise.css";

const Ipromise = () => {
  return (
    <div className="container-fluid home_container4">
      <div className="row">
        <div className="col-lg-12">
          <div className="promise_section">
            <div className="hands_logo">
              {" "}
              <img
                src="/images/pic5.png"
                className="mt-5"
                style={{ width: "150px", paddingBottom: "23px" }}
              />
            </div>
            <div className="text">Please Type the following...</div>
            <div className="promise_div">
              <p>
                I promise that I will be sympathetic and
                <br />
                supportive towards the community.
              </p>
            </div>
            <div className="text_next">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ipromise;
