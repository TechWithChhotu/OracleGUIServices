import React, { useState, useEffect } from "react";
import axios from "axios";

const TableDataDeleter = () => {
  const [tableName, setTableName] = useState("");
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
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

  const handleGetTableData = async () => {
    try {
      const columnsRes = await axios.post(
        "http://localhost:3000/get-table-columns",
        { tableName },
        { withCredentials: true }
      );
      setColumns(columnsRes.data.columns);

      const dataRes = await axios.post(
        "http://localhost:3000/get-table-data",
        { query: `SELECT * FROM ${tableName}` },
        { withCredentials: true }
      );
      setData(dataRes.data.data);
      setOriginalData(dataRes.data.data.map((row) => ({ ...row }))); // Deep copy original data
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };

  const handleDeleteData = async (rowIndex) => {
    try {
      const condition = Object.keys(originalData[rowIndex])
        .map((col) => `${col} = '${originalData[rowIndex][col]}'`)
        .join(" AND ");

      const query = `DELETE FROM ${tableName} WHERE ${condition}`;
      const response = await axios.post(
        "http://localhost:3000/delete-table-record",
        { query },
        { withCredentials: true }
      );

      if (response.data.success) {
        alert("Record deleted successfully");
        handleGetTableData(); // Refresh the data
      } else {
        alert("Error deleting record");
      }
    } catch (error) {
      console.error("Error deleting table data:", error);
      alert("Error deleting record");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md min-h-[80%]">
      <h2 className="text-2xl font-bold mb-4">Delete Table Data</h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="table"
        >
          Enter Table Name
        </label>
        <div className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <input
            id="table"
            value={tableName}
            onChange={handleTableChange}
            className="w-full outline-none"
            type="text"
            placeholder="Enter table name"
          />
          <div className="ml-2">
            <select
              id="table"
              value={tableName}
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
          </div>
        </div>

        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleGetTableData}
        >
          Fetch Data
        </button>
      </div>

      {columns.length > 0 && (
        <>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.name}
                    className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-sm font-medium text-gray-700 text-center"
                  >
                    {col.name}
                  </th>
                ))}
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-sm font-medium text-gray-700 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((col) => (
                    <td
                      key={col.name}
                      className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700"
                    >
                      {row[col.name]}
                    </td>
                  ))}
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                    <button
                      onClick={() => handleDeleteData(rowIndex)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TableDataDeleter;
