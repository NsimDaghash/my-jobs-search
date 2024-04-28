import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import ExcelTable from "./ExcelTable";
import Platforms from "./Platforms";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2vh",
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
          <h1
            style={{ color: "green", lineHeight: "5vh", textAlign: "center" }}
          >
            Nasim Dagash Hi-tech jobs search site
          </h1>
        </div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/jobs" element={<ExcelTable />} />
        <Route path="/Platforms" element={<Platforms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            border: "2px solid green",
            borderRadius: "10px",
            width: "80%",
            textAlign: "center",
          }}
        >
          All rights reserved - NASIM DAGHASH 2024
        </div>
      </div>
    </div>
  );
}

export default App;
