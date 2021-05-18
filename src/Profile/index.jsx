import React from "react";
import "./profile.scss";
import profilePhoto from "./profile.jpeg";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-contant">
        <div className="profile-user">
          <img width="60" src={profilePhoto} alt="photo" />
          <p>
            nill_rai <br></br>Sunil Rai
          </p>
        </div>
        <div className="switch-contant">Switch</div>
      </div>
    </div>
  );
}

export default Profile;
