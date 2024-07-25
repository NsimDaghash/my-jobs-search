import React, { useState } from "react";
import "./FilterInputs.css";

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
  const [companyName, setCompanyName] = useState("");

  const handleApplyFilters = () => {
    applyFilters({ companyLocation, companyOccupation, city, companyName });
  };

  const resetFilters = () => {
    setCompanyLocation("");
    setCompanyOccupation("");
    setCity("");
    setCompanyName("");
    resetTableData();
  };

  return (
    <div className="filter-inputs-container">
      <div className="filter-header">You can filter by:</div>
      <div className="filter-options">
        <div className="filter-option">
          <label className="filter-label">Location :</label>
          <select
            value={companyLocation}
            onChange={(e) => setCompanyLocation(e.target.value)}
            className="filter-select"
          >
            <option value="">Select location</option>
            {uniqueCompanyLocations
              .sort((a, b) => a.localeCompare(b))
              .map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
          </select>
        </div>
        <div className="filter-option">
          <label className="filter-label">City :</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="filter-select"
          >
            <option value="">Select city</option>
            {uniqueCities
              .sort((a, b) => a.localeCompare(b))
              .map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
        <div className="filter-option">
          <label className="filter-label">Occupation :</label>
          <select
            value={companyOccupation}
            onChange={(e) => setCompanyOccupation(e.target.value)}
            className="filter-select occupation-bar"
          >
            <option value="">Select occupation</option>
            {uniqueCompanyOccupations
              .sort((a, b) => a.localeCompare(b))
              .map((occupation, index) => (
                <option key={index} value={occupation}>
                  {occupation}
                </option>
              ))}
          </select>
        </div>
        <div className="filter-option">
          <label className="filter-label">Company Name :</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Search by company name"
            className="filter-input"
          />
        </div>
        <div className="filter-buttons">
          <button
            onClick={handleApplyFilters}
            className="filter-button apply-button"
          >
            Filter
          </button>
          <button onClick={resetFilters} className="filter-button reset-button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterInputs;
