import React from "react";
import "./Pagination.css";

function Pagination({
  currentPage,
  totalPages,
  prevPage,
  nextPage,
  filteredData,
}) {
  return (
    <div className="pagination-container">
      <div className="pagination-buttons">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous Page
        </button>
        <div className="pagination-info">
          <div>{filteredData.length} companies</div>
          {filteredData.length ? (
            <div>
              Page {currentPage} of {totalPages}
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages || filteredData.length === 0}
          className="pagination-button"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Pagination;
