import React from "react";
import "./styles.css";

function Pagination({
  currentPage,
  totalPages,
  prevPage,
  nextPage,
  filteredData,
}) {
  return (
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
        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ marginRight: "1vh" }}>
            {filteredData.length} companies
          </div>
          {filteredData.length ? (
            <div>
              Page {currentPage} of {totalPages}
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          style={{
            border: "1px solid green",
            backgroundColor: "lightgreen",
            borderRadius: "5px",
          }}
          onClick={nextPage}
          disabled={currentPage === totalPages || filteredData.length === 0}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Pagination;
