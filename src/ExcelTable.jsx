import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import DataTable from "./DataTable";
import Pagination from "./Pagination";
import FilterInputs from "./FilterInputs";

const ExcelTable = ({ darkMode }) => {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(20);
  const [uniqueCompanyLocations, setUniqueCompanyLocations] = useState([]);
  const [uniqueCompanyOccupations, setUniqueCompanyOccupations] = useState([]);
  const [uniqueCities, setUniqueCities] = useState([]);
  const [companyName, setCompanyName] = useState("");

  const fetchData = async () => {
    const response = await fetch(process.env.PUBLIC_URL + "/data.xlsx");
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    const companyLocations = Array.from(new Set(jsonData.map((row) => row[5])));
    const companyOccupations = Array.from(
      new Set(jsonData.map((row) => row[4]))
    );
    const cities = Array.from(new Set(jsonData.map((row) => row[6])));

    setUniqueCompanyLocations(companyLocations.filter(Boolean));
    setUniqueCompanyOccupations(companyOccupations.filter(Boolean));
    setUniqueCities(cities.filter(Boolean));

    setTableData(jsonData);
    setFilteredData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData
    .slice(indexOfFirstRow, indexOfLastRow)
    .map((row) => row.slice(0, 4));

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const applyFilters = (filters) => {
    const { companyLocation, companyOccupation, city, companyName } = filters;

    let filtered = tableData;

    if (companyLocation) {
      filtered = filtered.filter(
        (row) =>
          row[5] && row[5].toLowerCase().includes(companyLocation.toLowerCase())
      );
    }

    if (companyOccupation) {
      filtered = filtered.filter(
        (row) =>
          row[4] &&
          row[4].toLowerCase().includes(companyOccupation.toLowerCase())
      );
    }

    if (city) {
      filtered = filtered.filter(
        (row) => row[6] && row[6].toLowerCase().includes(city.toLowerCase())
      );
    }

    if (companyName) {
      filtered = filtered.filter(
        (row) =>
          row[1] && row[1].toLowerCase().includes(companyName.toLowerCase())
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const resetTableData = () => {
    setCompanyName("");
    fetchData();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="jobs-table" style={{ margin: "0 auto" }}>
        <FilterInputs
          applyFilters={applyFilters}
          resetTableData={resetTableData}
          uniqueCompanyLocations={uniqueCompanyLocations}
          uniqueCompanyOccupations={uniqueCompanyOccupations}
          uniqueCities={uniqueCities}
        />
        <DataTable currentRows={currentRows} darkMode={darkMode} />
        <Pagination
          filteredData={filteredData}
          currentPage={currentPage}
          totalPages={totalPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
};

export default ExcelTable;
