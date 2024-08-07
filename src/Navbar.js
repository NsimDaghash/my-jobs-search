import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ darkMode }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const getLinkClass = (itemName) => {
    let linkClass = "navbar-link";
    if (activeItem === itemName) {
      linkClass += ` navbar-link-active-${darkMode ? "dark" : "light"}`;
    } else {
      linkClass += ` navbar-link-background navbar-link-${
        darkMode ? "dark" : "light"
      }`;
    }
    return linkClass;
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            width: "100%",
          }}
        >
          <Link
            to="/"
            className={getLinkClass("about")}
            onClick={() => handleItemClick("about")}
          >
            <b>About</b>
          </Link>
          <Link
            to="/jobs"
            className={getLinkClass("jobs")}
            onClick={() => handleItemClick("jobs")}
          >
            <b>Companies</b>
          </Link>
          <Link
            to="/platforms"
            className={getLinkClass("platforms")}
            onClick={() => handleItemClick("platforms")}
          >
            <b>Platforms</b>
          </Link>
          <Link
            to="/contact"
            className={getLinkClass("contact")}
            onClick={() => handleItemClick("contact")}
          >
            <b>Contact</b>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
