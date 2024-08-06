import React, { useState, useEffect } from "react";
import axios from "axios";

const TruncateTable = () => {
  const [tableName, setTableName] = useState("");
  const [tables, setTables] = useState([]);

  const handleTableChange = (e) => {
    setTableName(e.target.value);
  };

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

  const handleTruncateTable = async () => {
    if (!tableName) {
      alert("Please select a table to truncate.");
      return;
    }
    try {
      const query = `TRUNCATE TABLE ${tableName}`;
      const response = await axios.post(
        "http://localhost:3000/truncate-table",
        { query },
        { withCredentials: true }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error truncating table:", error);
      alert("Error truncating table");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md min-h-[80%]">
      <h2 className="text-2xl font-bold mb-4">Truncate Table</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="table"
        >
          Select Table to Truncate
        </label>
        <div className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <select
            id="table"
            value={tableName}
            onChange={handleTableChange}
            className="w-full outline-none"
          >
            <option value="" disabled>
              Select a table
            </option>
            {tables.map((table) => (
              <option key={table} value={table}>
                {table}
              </option>
            ))}
          </select>
        </div>
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleTruncateTable}
        >
          Truncate Table
        </button>
      </div>
    </div>
  );
};

export default TruncateTable;
