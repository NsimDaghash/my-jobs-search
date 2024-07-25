import React from "react";
import "./DataTable.css";

function DataTable({ currentRows, darkMode }) {
  const tableCellClass = darkMode ? "table-cell-dark" : "table-cell";
  const tableHeaderClass = darkMode ? "table-header-dark" : "table-header";
  const dataTable = darkMode ? "table-dark" : "table-light";
  return (
    <table className={dataTable}>
      <thead>
        <tr>
          <th className={tableHeaderClass}>S.N</th>
          <th className={tableHeaderClass}>Company Name</th>
          <th className={tableHeaderClass}>Site</th>
          <th className={tableHeaderClass}>LinkedIn</th>
        </tr>
      </thead>
      <tbody>
        {currentRows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`table-row ${darkMode ? "dark-mode" : "light-mode"}`}
          >
            {row.map((cell, cellIndex) => {
              if (cellIndex === 2) {
                return (
                  <td key={cellIndex} className={tableCellClass}>
                    {row[2] === "No jobs Founded" ? (
                      <> No jobs at company site !</>
                    ) : (
                      <a
                        href={cell}
                        target="_blank"
                        rel="noopener noreferrer"
                        decoration="none"
                        style={{
                          color: darkMode ? "yellow" : "inherit",
                        }}
                      >
                        Company Site Careers
                      </a>
                    )}
                  </td>
                );
              }
              if (cellIndex === 3) {
                return (
                  <td key={cellIndex} className={tableCellClass}>
                    <a
                      href={cell}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: darkMode ? "yellow" : "inherit" }}
                      decoration="none"
                    >
                      Company LinkedIn Careers
                    </a>
                  </td>
                );
              } else {
                return cellIndex === 1 ? (
                  <td key={cellIndex} className={tableCellClass}>
                    {cell}
                  </td>
                ) : (
                  <td key={cellIndex} className={tableCellClass}>
                    {cell}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
