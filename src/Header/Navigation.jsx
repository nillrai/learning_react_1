import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { RiMessengerLine, RiSettings5Line } from "react-icons/ri";
import { MdExplore } from "react-icons/md";
import { BsHeart, BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiRefresh } from "react-icons/bi";

export default function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const handleLoveClick = () => {
     
  }

  return (
    <div className="navigation">
      <div className="home">
        <AiFillHome />
      </div>
      <div className="messanger">
        <RiMessengerLine />
      </div>
      <div className="explore">
        <MdExplore />
      </div>
      <div className="love love-red" onClick={handleLoveClick}>
        <BsHeart />
      </div>
      <div className="profile" onClick={handleShowDropdown}>
        <CgProfile />
        {showDropdown && (
          <ul class="menu-list">
            <li>
              <a href="">
                <CgProfile />
                Profile
              </a>
            </li>
            <li>
              <a href="">
                <BsBookmark />
                Saved
              </a>
            </li>
            <li>
              <a href="">
                <RiSettings5Line />
                Setting
              </a>
            </li>
            <li>
              <a href="">
                <BiRefresh />
                Switch Account
              </a>
            </li>
            <li class="logout">
              <a href="">Log Out</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
