import React from "react";
import "./mainprofile.css";
const MainProfile = () => {
  return (
    <div className="container-fluid home_container_mainprofile">
      <div className="section_mainprofile">
        <div className="row main_profile_div">
          <div className="col-lg-3  btn-cross">
            <img src="/images/pic18.png" />
          </div>

          <div className="col-lg-4"> Profile</div>
          <div className="col-lg-5"></div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-5 girldiv">
              <img src="/images/girl.png" />
            </div>
            <div className="col-lg-4"></div>
            <div className="row mt-2">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="row div-1">
                  <div className="col-lg-10 div-1-text">Radhika Sharma</div>
                  <div className="col-lg-2">
                    {" "}
                    <img src="/images/path.png" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2"></div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="row div-1">
                  <div className="col-lg-10 div-1-text">radhikas@gmail.com</div>
                  <div className="col-lg-2">
                    {" "}
                    <img src="/images/path.png" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2"></div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="row div-1">
                  <div className="col-lg-10 div-1-text">Change Password</div>
                  <div className="col-lg-2">
                    {" "}
                    <img src="/images/path.png" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2"></div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="row div-1">
                  <div className="col-lg-10 div-1-text">+91 9876543210</div>
                  <div className="col-lg-2">
                    {" "}
                    <img src="/images/path.png" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2"></div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="row div-1">
                  <div className="col-lg-10 div-1-text">
                    Add another Account
                  </div>
                  <div className="col-lg-2">
                    {" "}
                    <img src="/images/path.png" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2"></div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="row div-1">
                  <div className="col-lg-10 div-1-text">Delete Account</div>
                  <div className="col-lg-2">
                    {" "}
                    <img src="/images/path.png" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2"></div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="row div-1">
                  <div className="col-lg-10 div-1-text">Language</div>
                  <div className="col-lg-2">
                    {" "}
                    <img src="/images/path.png" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2"></div>
            </div>
            <div className="sign-out-div">
              <button className="sign-out-btn">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainProfile;
