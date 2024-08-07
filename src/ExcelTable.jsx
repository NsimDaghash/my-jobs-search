// import React, { useState, useEffect } from "react";
// import * as XLSX from "xlsx";
// import DataTable from "./DataTable";
// import Pagination from "./Pagination";
// import FilterInputs from "./FilterInputs";

// const ExcelTable = ({ darkMode }) => {
//   const [tableData, setTableData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage] = useState(20);
//   const [uniqueCompanyLocations, setUniqueCompanyLocations] = useState([]);
//   const [uniqueCompanyOccupations, setUniqueCompanyOccupations] = useState([]);
//   const [uniqueCities, setUniqueCities] = useState([]);
//   const [companyName, setCompanyName] = useState("");
//   const [noJobsOnLinkedIn, setNoJobsOnLinkedIn] = useState(false); // New state variable
//   const [selectedCompanyLocation, setSelectedCompanyLocation] = useState("");

//   const fetchData = async () => {
//     const response = await fetch(process.env.PUBLIC_URL + "/data.xlsx");
//     const arrayBuffer = await response.arrayBuffer();
//     const data = new Uint8Array(arrayBuffer);
//     const workbook = XLSX.read(data, { type: "array" });
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//     const companyLocations = Array.from(new Set(jsonData.map((row) => row[5])));
//     const companyOccupations = Array.from(
//       new Set(jsonData.map((row) => row[4]))
//     );
//     const cities = Array.from(new Set(jsonData.map((row) => row[6])));

//     setUniqueCompanyLocations(companyLocations.filter(Boolean));
//     setUniqueCompanyOccupations(companyOccupations.filter(Boolean));
//     setUniqueCities(cities.filter(Boolean));

//     setTableData(jsonData);
//     setFilteredData(jsonData);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Update uniqueCities whenever selectedCompanyLocation changes
//     if (selectedCompanyLocation) {
//       const filtered = tableData.filter(
//         (row) =>
//           row[5] &&
//           row[5].toLowerCase().includes(selectedCompanyLocation.toLowerCase())
//       );
//       const filteredCities = [
//         ...new Set(filtered.map((row) => row[6]).filter(Boolean)),
//       ];
//       setUniqueCities(filteredCities);
//     }
//   }, [selectedCompanyLocation, tableData]);

//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = filteredData
//     .slice(indexOfFirstRow, indexOfLastRow)
//     .map((row) => row.slice(0, 4)); // displaying first 4 columns only

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   const nextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const applyFilters = (filters) => {
//     const {
//       companyLocation,
//       companyOccupation,
//       city,
//       companyName,
//       noJobsOnLinkedIn,
//     } = filters;

//     let filtered = tableData;

//     if (companyOccupation) {
//       filtered = filtered.filter(
//         (row) =>
//           row[4] &&
//           row[4].toLowerCase().includes(companyOccupation.toLowerCase())
//       );
//     }

//     if (companyLocation) {
//       filtered = filtered.filter(
//         (row) =>
//           row[5] && row[5].toLowerCase().includes(companyLocation.toLowerCase())
//       );
//       setSelectedCompanyLocation(companyLocation);
//     }

//     if (city) {
//       filtered = filtered.filter(
//         (row) => row[6] && row[6].toLowerCase().includes(city.toLowerCase())
//       );
//     }

//     if (companyName) {
//       filtered = filtered.filter(
//         (row) =>
//           row[1] && row[1].toLowerCase().includes(companyName.toLowerCase())
//       );
//     }

//     if (noJobsOnLinkedIn) {
//       filtered = filtered.filter((row) => !row[3]);
//     }

//     setFilteredData(filtered);
//     setCurrentPage(1);
//   };

//   const resetTableData = () => {
//     setCompanyName("");
//     setNoJobsOnLinkedIn(false); // Reset the new filter
//     setSelectedCompanyLocation(""); // Reset selected company location
//     fetchData();
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         flexDirection: "column",
//       }}
//     >
//       <div className="jobs-table" style={{ margin: "0 auto" }}>
//         <FilterInputs
//           applyFilters={applyFilters}
//           resetTableData={resetTableData}
//           uniqueCompanyLocations={uniqueCompanyLocations}
//           uniqueCompanyOccupations={uniqueCompanyOccupations}
//           uniqueCities={uniqueCities}
//         />
//         <DataTable currentRows={currentRows} darkMode={darkMode} />
//         <Pagination
//           filteredData={filteredData}
//           currentPage={currentPage}
//           totalPages={totalPages}
//           prevPage={prevPage}
//           nextPage={nextPage}
//         />
//       </div>
//     </div>
//   );
// };

// export default ExcelTable;
/***************************************************************************************************************** */

// import React, { useState, useEffect } from "react";
// import * as XLSX from "xlsx";
// import DataTable from "./DataTable";
// import Pagination from "./Pagination";
// import FilterInputs from "./FilterInputs";

// const ExcelTable = ({ darkMode }) => {
//   const [tableData, setTableData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage] = useState(20);
//   const [uniqueCompanyLocations, setUniqueCompanyLocations] = useState([]);
//   const [uniqueCompanyOccupations, setUniqueCompanyOccupations] = useState([]);
//   const [uniqueCities, setUniqueCities] = useState([]);
//   const [companyName, setCompanyName] = useState("");
//   const [noJobsOnLinkedIn, setNoJobsOnLinkedIn] = useState(false);
//   const [selectedCompanyLocation, setSelectedCompanyLocation] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   const fetchData = async () => {
//     const response = await fetch(process.env.PUBLIC_URL + "/data.xlsx");
//     const arrayBuffer = await response.arrayBuffer();
//     const data = new Uint8Array(arrayBuffer);
//     const workbook = XLSX.read(data, { type: "array" });
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//     const companyLocations = Array.from(new Set(jsonData.map((row) => row[5])));
//     const companyOccupations = Array.from(
//       new Set(jsonData.map((row) => row[4]))
//     );
//     const cities = Array.from(new Set(jsonData.map((row) => row[6])));

//     setUniqueCompanyLocations(companyLocations.filter(Boolean));
//     setUniqueCompanyOccupations(companyOccupations.filter(Boolean));
//     setUniqueCities(cities.filter(Boolean));

//     setTableData(jsonData);
//     setFilteredData(jsonData);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (selectedCompanyLocation) {
//       const filtered = tableData.filter(
//         (row) =>
//           row[5] &&
//           row[5].toLowerCase().includes(selectedCompanyLocation.toLowerCase())
//       );
//       const filteredCities = [
//         ...new Set(filtered.map((row) => row[6]).filter(Boolean)),
//       ];
//       setUniqueCities(filteredCities);

//       const filteredOccupation = [
//         ...new Set(uniqueCities.map((row) => row[4]).filter(Boolean)),
//       ];
//       // const filteredOccupation = [
//       //   ...new Set(
//       //     uniqueCities.filter(
//       //       (row) =>
//       //         row[4] &&
//       //         row[4]
//       //           .toLowerCase()
//       //           .includes(selectedCompanyLocation.toLowerCase())
//       //     )
//       //   ),
//       // ];
//       setUniqueCompanyOccupations(filteredOccupation);
//     }
//   }, [selectedCompanyLocation, tableData]);
//   // useEffect(() => {
//   //   if (selectedCompanyLocation) {
//   //     const filtered = tableData.filter((row) => {
//   //       const locationMatch =
//   //         !selectedCompanyLocation ||
//   //         (row[5] &&
//   //           row[5]
//   //             .toLowerCase()
//   //             .includes(selectedCompanyLocation.toLowerCase()));

//   //       const cityMatch =
//   //         !selectedCity ||
//   //         (row[6] && row[6].toLowerCase().includes(selectedCity.toLowerCase()));

//   //       return locationMatch && cityMatch;
//   //     });

//   //     const filteredOccupations = [
//   //       ...new Set(
//   //         filtered
//   //           .map((row) => row[4]) // Get all company occupations from filtered rows
//   //           .filter(Boolean) // Filter out any falsy values
//   //       ),
//   //     ];

//   //     setUniqueCompanyOccupations(filteredOccupations);
//   //   }
//   // }, [selectedCompanyLocation, selectedCity, tableData]);

//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = filteredData
//     .slice(indexOfFirstRow, indexOfLastRow)
//     .map((row) => row.slice(0, 4));

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   const nextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const applyFilters = (filters) => {
//     const {
//       companyLocation,
//       companyOccupation,
//       city,
//       companyName,
//       noJobsOnLinkedIn,
//     } = filters;

//     let filtered = tableData;

//     if (companyOccupation) {
//       filtered = filtered.filter(
//         (row) =>
//           row[4] &&
//           row[4].toLowerCase().includes(companyOccupation.toLowerCase())
//       );
//     }

//     if (companyLocation) {
//       filtered = filtered.filter(
//         (row) =>
//           row[5] && row[5].toLowerCase().includes(companyLocation.toLowerCase())
//       );
//       setSelectedCompanyLocation(companyLocation);
//     }

//     if (city) {
//       filtered = filtered.filter(
//         (row) => row[6] && row[6].toLowerCase().includes(city.toLowerCase())
//       );
//     }

//     if (companyName) {
//       filtered = filtered.filter(
//         (row) =>
//           row[1] && row[1].toLowerCase().includes(companyName.toLowerCase())
//       );
//     }

//     if (noJobsOnLinkedIn) {
//       filtered = filtered.filter((row) => !row[3]);
//     }

//     setFilteredData(filtered);
//     setCurrentPage(1); // Reset currentPage to 1 after filtering
//   };

//   const resetTableData = () => {
//     setCompanyName("");
//     setNoJobsOnLinkedIn(false);
//     setSelectedCompanyLocation("");
//     fetchData();
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         flexDirection: "column",
//       }}
//     >
//       <div className="jobs-table" style={{ margin: "0 auto" }}>
//         <FilterInputs
//           applyFilters={applyFilters}
//           resetTableData={resetTableData}
//           uniqueCompanyLocations={uniqueCompanyLocations}
//           uniqueCompanyOccupations={uniqueCompanyOccupations}
//           uniqueCities={uniqueCities}
//         />
//         <DataTable currentRows={currentRows} darkMode={darkMode} />
//         <Pagination
//           filteredData={filteredData}
//           currentPage={currentPage}
//           totalPages={totalPages}
//           prevPage={prevPage}
//           nextPage={nextPage}
//         />
//       </div>
//     </div>
//   );
// };

// export default ExcelTable;
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
  const [noJobsOnLinkedIn, setNoJobsOnLinkedIn] = useState(false);
  const [selectedCompanyLocation, setSelectedCompanyLocation] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

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
    setTableData(jsonData);
    setFilteredData(jsonData);

    // Set all cities initially
    setUniqueCities(cities.filter(Boolean));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCompanyLocation) {
      const filtered = tableData.filter(
        (row) =>
          row[5] &&
          row[5].toLowerCase().includes(selectedCompanyLocation.toLowerCase())
      );

      const filteredCities = Array.from(
        new Set(
          filtered.map((row) => row[6]).filter((city) => city) // Filter out empty or falsy values
        )
      );

      setUniqueCities(filteredCities);
      setSelectedCity("");
    } else {
      setUniqueCities([
        ...new Set(tableData.map((row) => row[6]).filter(Boolean)),
      ]);
      setSelectedCity(""); // Reset selected city if no district is selected
    }
  }, [selectedCompanyLocation, tableData]);

  useEffect(() => {
    let filtered = tableData;

    if (selectedCompanyLocation) {
      filtered = filtered.filter((row) =>
        row[5]?.toLowerCase().includes(selectedCompanyLocation.toLowerCase())
      );
    }

    if (selectedCity) {
      filtered = filtered.filter((row) =>
        row[6]?.toLowerCase().includes(selectedCity.toLowerCase())
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1); // Reset currentPage to 1 after filtering
  }, [selectedCompanyLocation, selectedCity, tableData]);

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
    const {
      companyLocation,
      companyOccupation,
      city,
      companyName,
      noJobsOnLinkedIn,
    } = filters;

    let filtered = tableData;

    if (companyOccupation) {
      filtered = filtered.filter(
        (row) =>
          row[4] &&
          row[4].toLowerCase().includes(companyOccupation.toLowerCase())
      );
    }

    if (companyLocation) {
      filtered = filtered.filter(
        (row) =>
          row[5] && row[5].toLowerCase().includes(companyLocation.toLowerCase())
      );
      setSelectedCompanyLocation(companyLocation);
      setSelectedCity(""); // Reset selected city when changing district
    }

    if (city) {
      filtered = filtered.filter(
        (row) => row[6] && row[6].toLowerCase().includes(city.toLowerCase())
      );
      setSelectedCity(city);
    }

    if (companyName) {
      filtered = filtered.filter(
        (row) =>
          row[1] && row[1].toLowerCase().includes(companyName.toLowerCase())
      );
    }

    if (noJobsOnLinkedIn) {
      filtered = filtered.filter((row) => !row[3]);
    }

    setFilteredData(filtered);
    setCurrentPage(1); // Reset currentPage to 1 after filtering
  };

  const resetTableData = () => {
    setCompanyName("");
    setNoJobsOnLinkedIn(false);
    setSelectedCompanyLocation("");
    setSelectedCity("");
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
