import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import DataTable from "./DataTable";
import Pagination from "./Pagination";

import FilterInputs from "./FilterInputs";

function ExcelTable() {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(20); // Number of rows per page

  const fetchData = async () => {
    const response = await fetch(process.env.PUBLIC_URL + "/data.xlsx");
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    setTableData(jsonData);
    setFilteredData(jsonData); // Initially set filtered data to all data
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData
    .slice(indexOfFirstRow, indexOfLastRow)
    .map((row) => row.slice(0, 4)); // Only the first four columns

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const applyFilters = (filters) => {
    const { companyLocation, companyOccupation, city } = filters;

    let filtered = tableData;

    // Apply filters based on companyLocation
    if (companyLocation) {
      filtered = filtered.filter(
        (row) =>
          row[5] && row[5].toLowerCase().includes(companyLocation.toLowerCase())
      );
    }

    // Apply filters based on companyOccupation
    if (companyOccupation) {
      filtered = filtered.filter(
        (row) =>
          row[4] &&
          row[4].toLowerCase().includes(companyOccupation.toLowerCase())
      );
    }

    // Apply filters based on city
    if (city) {
      filtered = filtered.filter(
        (row) =>
          row[5] && // Assuming city is at index 6 in the row
          row[5].toLowerCase().includes(city.toLowerCase())
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "0 10%" }}>
          <FilterInputs
            applyFilters={applyFilters}
            resetTableData={fetchData}
          />

          <DataTable currentRows={currentRows} />
        </div>
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
}

export default ExcelTable;
