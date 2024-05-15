import React, { useState } from "react";

function FilterInputs({
  applyFilters,
  resetTableData,
  uniqueCompanyLocations,
  uniqueCompanyOccupations,
  uniqueCities,
}) {
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyOccupation, setCompanyOccupation] = useState("");
  const [city, setCity] = useState("");

  const handleApplyFilters = () => {
    applyFilters({ companyLocation, companyOccupation, city });
  };

  const resetFilters = () => {
    setCompanyLocation("");
    setCompanyOccupation("");
    setCity("");
    resetTableData();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "lightskyblue",
        padding: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <div>You can filter by:</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Location :</label>
          <select
            value={companyLocation}
            onChange={(e) => setCompanyLocation(e.target.value)}
          >
            <option value="">Select location</option>
            {uniqueCompanyLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>City :</label>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Select city</option>
            {uniqueCities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Occupation :</label>
          <select
            value={companyOccupation}
            onChange={(e) => setCompanyOccupation(e.target.value)}
          >
            <option value="">Select occupation</option>
            {uniqueCompanyOccupations.map((occupation, index) => (
              <option key={index} value={occupation}>
                {occupation}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            width: "150px",
            textAlign: "center",
            marginLeft: "1vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              border: "1px solid green",
              backgroundColor: "lightgreen",
              borderRadius: "5px",
              padding: "0 20px",
            }}
            onClick={handleApplyFilters}
          >
            Filter
          </button>
          <button
            style={{
              border: "1px solid #E32636",
              backgroundColor: "lightred",
              borderRadius: "5px",
              padding: "0 20px",
              marginLeft: "5px",
            }}
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterInputs;
