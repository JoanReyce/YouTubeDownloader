import React from "react";
import "./Navbar.css";
import BuildIcon from '@material-ui/icons/Build';
const Navbar = () => {
  return (
    <div className="nav">
      <h1 className="logo">
        <YouTubeIcon color="primary" fontSize="large" className="yo" />
        RubenTube
      </h1>
    </div>
  );
};

export default Navbar;
