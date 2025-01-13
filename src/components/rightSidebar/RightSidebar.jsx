import React from "react";
import "./RightSidebar.css";
import assets from "../../assets/assets";

const RightSidebar = () => {
  return (
    <div className="right_sidebar">
      <div className="right_sidebar_profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Miron Hasan <img src={assets.green_dot} className="dot" alt="" />
        </h3>
        <p>hey i am miron hasan</p>
      </div>
      <hr />
      <div className="right_sidebar_media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />

        </div>
      </div>
      <button>
        Logout
      </button>
    </div>
  );
};

export default RightSidebar;
