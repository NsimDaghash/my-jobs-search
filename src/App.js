import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import ExcelTable from "./ExcelTable";
import Platforms from "./Platforms";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2vh",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              border: "2px solid green",
              borderRadius: "10px",
              width: "80%",
            }}
          >
            <h1 style={{ color: "green", lineHeight: "5vh" }}>
              Nasim Daghash Hitech Search Jobs
            </h1>
          </div>
        </div>
        <Navbar />
        <Router>
          <Route exact path="/" element={<About />} />
          <Route path="/jobs" element={<ExcelTable />} />
          <Route path="/Platforms" element={<Platforms />} />
          <Route path="/contact" element={<Contact />} />
        </Router>
      </div>
    </Router>
  );
}

export default App;
