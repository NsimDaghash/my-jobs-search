import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";

function ExcelTable() {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(20); // Number of rows per page

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.PUBLIC_URL + "/data.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setTableData(jsonData);
    };

    fetchData();
  }, []);

  // Logic to calculate index of the first and last row of the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  // Total number of pages
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  // Function to handle pagination
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
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
          width: "98%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <table
          style={{
            border: "3px solid rgb(0, 0, 0)",
            width: "80%",
            backgroundColor: "white",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "2px solid black" }}>S.N</th>
              <th style={{ border: "2px solid black" }}>Company Name</th>
              <th style={{ border: "2px solid black" }}>Site</th>
              <th style={{ border: "2px solid black" }}>LinkedIn</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, rowIndex) => (
              <tr key={rowIndex} style={{ border: "1px solid black" }}>
                {row.map((cell, cellIndex) => {
                  if (cellIndex === 2) {
                    return (
                      <td
                        key={cellIndex}
                        style={{ width: "25%", border: "1px solid black" }}
                      >
                        {row[2] === "No jobs Founded" ? (
                          <> No jobs at company site !</>
                        ) : (
                          <a href={cell} target="_blank">
                            Company Site Careers
                          </a>
                        )}
                      </td>
                    );
                  }
                  if (cellIndex === 3) {
                    return (
                      <td
                        key={cellIndex}
                        style={{ width: "25%", border: "1px solid black" }}
                      >
                        <a href={cell} target="_blank">
                          Company LinkedIn Careers
                        </a>
                      </td>
                    );
                  } else {
                    return cellIndex === 1 ? (
                      <td
                        key={cellIndex}
                        style={{ width: "25%", border: "1px solid black" }}
                      >
                        {cell}
                      </td>
                    ) : (
                      <td
                        key={cellIndex}
                        style={{ width: "5%", border: "1px solid black" }}
                      >
                        {cell}
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination buttons */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            style={{
              border: "1px solid green",
              backgroundColor: "lightgreen",
              borderRadius: "5px",
            }}
          >
            Previous Page
          </button>
          {/* Page number display */}
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            Page {currentPage} of {totalPages}
          </div>
          <button
            style={{
              border: "1px solid green",
              backgroundColor: "lightgreen",
              borderRadius: "5px",
            }}
            onClick={nextPage}
            disabled={currentPage == totalPages}
          >
            Next Page
          </button>
        </div>
      </div>
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          textAlign: "center",
          marginTop: "2vh",
        }}
      >
        <Link to="/">
          <b>Home</b>
        </Link>
      </div>
    </div>
  );
}

export default ExcelTable;
