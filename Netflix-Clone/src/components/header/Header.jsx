import React from "react";
import "./header.css";  
import logo from "../../assets/netfli_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li className="logo">
              <img src={logo} />
            </li>
            <li>Home</li>
            <li>TvShows</li>
            <li>movies</li>
            <li>latest</li>
            <li>Mylist</li>
            <li>Browse by language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
