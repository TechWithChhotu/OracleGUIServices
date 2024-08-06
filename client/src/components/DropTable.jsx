import React, { useState, useEffect } from "react";
import axios from "axios";

const DropTable = () => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get-tables");
        setTables(response.data.tables);
      } catch (error) {
        console.error("Error fetching tables:", error);
      }
    };
    fetchTables();
  }, []);

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  };

  const handleDropTable = async () => {
    if (!selectedTable) {
      alert("Please select a table to drop.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/drop-table",
        {
          tableName: selectedTable,
        },
        { withCredentials: true }
      );
      alert(response.data.message);
      setSelectedTable("");
      // Optionally, refetch tables here to update the list
    } catch (error) {
      console.error("Error dropping table:", error);
      alert("Error dropping table.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md min-h-[80%]">
      <h2 className="text-2xl font-bold mb-4">Drop Table</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="table"
        >
          Select Table
        </label>
        <select
          id="table"
          value={selectedTable}
          onChange={handleTableChange}
          className="outline-none h-full border"
        >
          <option value="" disabled>
            Select from drop-down
          </option>
          {tables.map((table) => (
            <option key={table} value={table}>
              {table}
            </option>
          ))}
        </select>
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleDropTable}
        >
          Drop Table
        </button>
      </div>
    </div>
  );
};

export default DropTable;
