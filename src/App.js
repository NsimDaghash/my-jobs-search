import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import ExcelTable from "./ExcelTable";
import Platforms from "./Platforms";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-container">
        <div
          className="title-container"
          style={{
            border: darkMode ? "2px solid cyan" : "2px solid green",
            width: "80vw",
          }}
        >
          <h1 className="title" style={{ color: darkMode ? "cyan" : "green" }}>
            Nasim Dagash Hi-tech jobs search site
          </h1>
        </div>
      </div>
      <div className="content-container">
        <Navbar darkMode={darkMode} />
        <div className="switch-mode">
          <button
            onClick={toggleDarkMode}
            style={{
              backgroundColor: darkMode ? "cyan" : "lightgray",
              color: darkMode ? "#fff" : "#222",
            }}
          >
            <b>{darkMode ? "Light Mode" : "Dark Mode"}</b>
          </button>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<About darkMode={darkMode} />} />
          <Route path="/jobs" element={<ExcelTable darkMode={darkMode} />} />
          <Route
            path="/platforms"
            element={<Platforms darkMode={darkMode} />}
          />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </div>
      <div className="footer-container">
        <div
          className="footer"
          style={{
            border: darkMode ? "2px solid cyan" : "2px solid green",
            color: darkMode ? "cyan" : "green",
          }}
        >
          Created by : NASIM DAGHASH - 2024
        </div>
      </div>
    </div>
  );
}

export default App;
