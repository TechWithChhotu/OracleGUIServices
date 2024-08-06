import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const TableDataViewer = () => {
  const [tableName, setTableName] = useState("");
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [rowCount, setRowCount] = useState(0);
  const [selectedTable, setSelectedTable] = useState("");
  const [tables, setTables] = useState([]);

  const handleTableChange = async (e) => {
    setTableName(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get-tables");
        setTables(response.data.tables);
      } catch (error) {
        console.error("Error fetching table schema or data:", error);
      }
    };
    fetchData();
  });

  const handleGetTableData = async () => {
    // ========Get table columns =============
    try {
      const res = await axios.post(
        "http://localhost:3000/get-table-columns",
        { tableName },
        { withCredentials: true }
      );
      setColumns(res.data.columns);
    } catch (error) {
      console.error("Error fetching table schema:", error);
    }

    try {
      const query = `SELECT * FROM ${tableName}`;
      console.log("QUERY ==> ", query);

      const res = await axios.post(
        "http://localhost:3000/get-table-data",
        { query },
        {
          withCredentials: true,
        }
      );
      console.log(res.data.data);
      setData(res.data.data);
      console.log(data);
    } catch (err) {}
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md min-h-[80%]">
      <h2 className="text-2xl font-bold mb-4">View Table Data</h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="table"
        >
          Enter Table Name
        </label>
        <div className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin">
          <input
            id="table"
            value={tableName}
            onChange={handleTableChange}
            className="w-full outline-none"
            type="text"
            placeholder="Enter table name"
          />
          <div className=" ">
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

      {/* ==========TEST =================== */}
      {columns.length > 0 && (
        <>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.name}
                    className="py-2 px-4 border-b border-gray-200 bg-gray-100  text-sm font-medium text-gray-700 text-center"
                  >
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {columns.map((col) => (
                    <td
                      key={col.name}
                      className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700"
                    >
                      {row[col.name]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <p className="text-gray-700">Number of rows: {data.length}</p>
          </div>
        </>
      )}
      {/* ==============TEst Upper============ */}
    </div>
  );
};

export default TableDataViewer;
