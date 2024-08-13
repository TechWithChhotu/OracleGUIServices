import React, { useState, useEffect } from "react";
import axios from "axios";

const InsertDataForm = () => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [columns, setColumns] = useState([]);
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get-tables");
        console.log("InsertDataForm Called");

        setTables(response.data.tables);
      } catch (error) {
        console.error("Error fetching tables:", error);
      }
    };

    fetchTables();
  }, []);

  const handleTableChange = async (e) => {
    const tableName = e.target.value;
    setSelectedTable(tableName);
    setFormData({});
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3000/get-table-columns",
        { tableName },
        { withCredentials: true }
      );
      setColumns(response.data.columns);
    } catch (error) {
      console.error("Error fetching table schema:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the SQL INSERT query
    const columnsNames = columns.map((col) => col.name).join(", ");
    const values = columns
      .map((col) => `'${formData[col.name] || ""}'`)
      .join(", ");
    const query = `INSERT INTO ${selectedTable} (${columnsNames}) VALUES (${values})`;
    console.log("query =====> ", query);
    try {
      const res = await axios.post(`http://localhost:3000/insert-table-data`, {
        tableName: selectedTable,
        query,
      });
      console.log("res ------------> ", res);
      setFormData({});
    } catch (error) {
      setErrorMessage("Error inserting data: " + error.message);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md min-h-[80%]">
      <h2 className="text-2xl font-bold mb-4">Insert Data into Table</h2>

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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" disabled>
            Select a table
          </option>
          {tables.map((table, inde) => (
            <option key={inde} value={table}>
              {table}
            </option>
          ))}
        </select>
      </div>

      {columns.length > 0 && (
        <form onSubmit={handleSubmit}>
          {columns.map((col, index) => (
            <div key={index} className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={col.name}
              >
                {col.name}
              </label>
              <input
                type={col.type === "NUMBER" ? "number" : "text"}
                id={col.name}
                name={col.name}
                value={formData[col.name] || ""}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Insert Data
          </button>

          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </form>
      )}
    </div>
  );
};

export default InsertDataForm;
