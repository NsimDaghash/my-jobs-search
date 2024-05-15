import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "left",
            width: "100%",
          }}
        >
          <Link
            to="/"
            style={{
              margin: "0 10px",
              textDecoration: "none",
              background: activeItem === "about" ? "lightcyan" : "transparent",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
            onClick={() => handleItemClick("about")}
          >
            <b>About</b>
          </Link>
          <Link
            to="/jobs"
            style={{
              margin: "0 10px",
              textDecoration: "none",
              background: activeItem === "jobs" ? "lightcyan" : "transparent",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
            onClick={() => handleItemClick("jobs")}
          >
            <b>Jobs</b>
          </Link>
          <Link
            to="/platforms"
            style={{
              margin: "0 10px",
              textDecoration: "none",
              background:
                activeItem === "platforms" ? "lightcyan" : "transparent",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
            onClick={() => handleItemClick("platforms")}
          >
            <b>Bonus</b>
          </Link>
          <Link
            to="/contact"
            style={{
              margin: "0 10px",
              textDecoration: "none",
              background:
                activeItem === "contact" ? "lightcyan" : "transparent",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
            onClick={() => handleItemClick("contact")}
          >
            <b>Contact</b>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
