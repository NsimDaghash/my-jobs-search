import React from "react";

function DataTable({ currentRows }) {
  return (
    <table
      style={{
        border: "3px solid lightblue",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        padding: "5px",
        width: "100%",
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
  );
}

export default DataTable;
