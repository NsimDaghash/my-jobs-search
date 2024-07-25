import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import Pagination from "./Pagination";
import "./Platforms.css";
// import "./DataTable.css";

const Platforms = ({ darkMode }) => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(20); // Number of rows per page
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.PUBLIC_URL + "/plats.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setTableData(jsonData);
      setFilteredData(jsonData);
    };

    fetchData();
  }, []);

  const tableContainerClass = darkMode
    ? "table-container-dark"
    : "table-container";
  const tableHeaderClass = darkMode ? "table-header-dark" : "table-header";
  const tableCellClass = darkMode ? "table-cell-dark" : "table-cell";

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="platforms-container">
      <div className="jobs-table">
        <div className="jobs-description">
          Here you can find jobs platforms, HR companies, Hitech industrial
          parks sites, . . .
        </div>
        <table className={tableContainerClass}>
          <thead>
            <tr className={tableHeaderClass}>
              <th className={tableCellClass}>S.N</th>
              <th className={tableCellClass}>Name</th>
              <th className={tableCellClass}>Site</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, rowIndex) => (
              <tr key={rowIndex} className={tableCellClass}>
                {row.map((cell, cellIndex) => {
                  if (cellIndex === 2) {
                    return (
                      <td
                        key={cellIndex}
                        className={`${tableCellClass} job-site-link`}
                      >
                        {row[2] === "No jobs Founded" ? (
                          <> No jobs at company site !</>
                        ) : (
                          // <a href={cell} target="_blank">
                          //   Site
                          // </a>
                          <a
                            href={cell}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: darkMode ? "yellow" : "inherit" }}
                            decoration="none"
                          >
                            Site
                          </a>
                        )}
                      </td>
                    );
                  }

                  return (
                    <td key={cellIndex} className={tableCellClass}>
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

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

export default Platforms;
