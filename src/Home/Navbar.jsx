import React, { useState } from "react";
import Maincontent from './Maincontent'

import "./Nav.css";
import { IoMdHome, IoMdSearch, IoIosMenu, IoIosSettings, IoIosLogOut } from "react-icons/io";
import { MdOutlineExplore, MdDarkMode } from "react-icons/md";
import { PiMonitorPlayLight } from "react-icons/pi";
import { FaFacebookMessenger, FaRegSquarePlus } from "react-icons/fa6";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { GrFavorite } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { FiActivity } from "react-icons/fi";
import { CiLight } from "react-icons/ci";

const menuItems = [
  { icon: <IoMdHome size={20} />, label: "Home" },
  { icon: <IoMdSearch size={20} />, label: "Search" },
  { icon: <MdOutlineExplore size={20} />, label: "Explore" },
  { icon: <PiMonitorPlayLight size={20} />, label: "Reels" },
  { icon: <FaFacebookMessenger size={20} />, label: "Messages" },
  { icon: <GrFavorite size={20} />, label: "Notification" },
  { icon: <FaRegSquarePlus size={20} />, label: "Create" },
  { icon: <HiOutlineChartSquareBar size={20} />, label: "Dashboard" },
  { icon: <RxAvatar size={20} />, label: "Profile" },
];

const Navbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`app-container ${darkTheme ? "dark-mode" : "light-mode"}`}>
      <div className="">
        <div className="row align-items-start">
          <div className="col-3 border-left-nav">
            <h3 className="text-center">Instagram</h3>
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="sidebar-menu btn btn-outline-secondary d-flex align-items-center"
              >
                {item.icon}
                <h4 className="heading-sidebar ms-2">{item.label}</h4>
              </button>
            ))}
            <button
              className="sidebar-menu btn btn-outline-secondary d-flex align-items-center"
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            >
              <IoIosMenu size={25} />
              <h4 className="heading-sidebar ms-2">Menu</h4>
            </button>
            {isSubmenuOpen && (
              <div className="submenu-popup position-absolute shadow p-3 rounded">
                <button
                  className="sidebar-menu btn btn-outline-secondary d-flex align-items-center"
                  onClick={() => setDarkTheme(!darkTheme)}
                >
                  {darkTheme ? <CiLight size={20} /> : <MdDarkMode size={20} />}
                  <h4 className="heading-sidebar ms-2">
                    {darkTheme ? "Light Mode" : "Dark Mode"}
                  </h4>
                </button>
                <button className="sidebar-menu btn btn-outline-secondary d-flex align-items-center">
                  <IoIosSettings size={20} />
                  <h4 className="heading-sidebar ms-2">Settings</h4>
                </button>
                <button className="sidebar-menu btn btn-outline-secondary d-flex align-items-center">
                  <FiActivity size={20} />
                  <h4 className="heading-sidebar ms-2">Your Activity</h4>
                </button>
                <button className="sidebar-menu btn btn-outline-secondary d-flex align-items-center">
                  <IoIosLogOut size={20} />
                  <h4 className="heading-sidebar ms-2">Logout</h4>
                </button>
              </div>
            )}
          </div>
          <div className="col-7"><Maincontent /> </div>
          <div className="col-2 d-flex">
            <RxAvatar size={25}   />
            <h5>Name</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;