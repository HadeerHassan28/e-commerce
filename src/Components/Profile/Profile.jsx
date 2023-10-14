import React from "react";

import styles from "./Profile.module.css";

const Profile = ({ userData }) => {
  // console.log(userData);
  return (
    <>
      <div className="bg-main-light p-5 my-4 border-main ">
        <h3>User Info</h3>
        <div>
          <p>
            <b>{`Name: ${userData?.name}`}</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
