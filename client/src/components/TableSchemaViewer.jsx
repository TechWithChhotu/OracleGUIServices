import React, { useState, useEffect } from "react";
import axios from "axios";

const TableSchemaViewer = () => {
  const [tables, setTables] = useState([]);
  const [tableName, setTableName] = useState("");
  const [schema, setSchema] = useState([]);

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

  const handleTableChange = async (e) => {
    const selectedTable = e.target.value;
    setTableName(selectedTable);

    try {
      const response = await axios.post(
        "http://localhost:3000/get-table-schema",
        { tableName: selectedTable }
      );
      setSchema(response.data.schema);
    } catch (error) {
      console.error("Error fetching table schema:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md min-h-[80%]">
      <h2 className="text-2xl font-bold mb-4">Table Schema Viewer</h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="table"
        >
          Select Table
        </label>
        <select
          id="table"
          value={tableName}
          onChange={handleTableChange}
          className="w-full outline-none border"
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

      {schema.length > 0 && (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-sm font-medium text-gray-700 text-center">
                Column Name
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-sm font-medium text-gray-700 text-center">
                Data Type
              </th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-sm font-medium text-gray-700 text-center">
                Length
              </th>
            </tr>
          </thead>
          <tbody>
            {schema.map((col, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                  {col.columnName}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                  {col.dataType}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                  {col.length || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableSchemaViewer;
