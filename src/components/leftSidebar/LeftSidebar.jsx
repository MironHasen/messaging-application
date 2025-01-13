import React from "react";
import "./LeftSidebar.css";
import assets from "../../assets/assets";

const LeftSidebar = () => {
  return (
    <div className="left_sidebar">
      <div className="left_sidebar_top">
        <div className="left_sidebar_nav">
          <img src={assets.logo} className="logo" alt="" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="left_sidebar_search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search here" />
        </div>
      </div>
      
      <div className="left_sidebar_list">
        {Array(12).fill("").map((item, index) => (
           <div key={index} className="friends">
           <img src={assets.profile_img} alt="" />
           <div>
             <p>Miron Hasan</p>
             <span>Hello, how are you ?</span>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
