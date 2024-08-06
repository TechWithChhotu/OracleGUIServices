import React, { useState, useEffect } from "react";
import axios from "axios";

const AlterTable = () => {
  const [tables, setTables] = useState([]);
  const [tableName, setTableName] = useState("");
  const [columns, setColumns] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [newColumnName, setNewColumnName] = useState("");
  const [dataType, setDataType] = useState("VARCHAR2");
  const [length, setLength] = useState(255);
  const [action, setAction] = useState("add");

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
        "http://localhost:3000/get-table-columns",
        { tableName: selectedTable }
      );
      setColumns(response.data.columns);
    } catch (error) {
      console.error("Error fetching table columns:", error);
    }
  };

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const handleSubmit = async () => {
    let query = "";

    if (action === "add") {
      query = `ALTER TABLE ${tableName} ADD ${newColumnName} ${dataType}(${length})`;
    } else if (action === "drop") {
      query = `ALTER TABLE ${tableName} DROP COLUMN ${selectedColumn}`;
    } else if (action === "modify") {
      query = `ALTER TABLE ${tableName} MODIFY ${selectedColumn} ${dataType}(${length})`;
    } else if (action === "rename") {
      query = `ALTER TABLE ${tableName} RENAME COLUMN ${selectedColumn} TO ${newColumnName}`;
    }

    try {
      const response = await axios.post("http://localhost:3000/alter-table", {
        query,
      });
      alert(response.data.message || "Action executed successfully");
    } catch (error) {
      console.error("Error executing query:", error);
      alert("Error executing action");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md min-h-[80%]">
      <h2 className="text-2xl font-bold mb-4">Alter Table</h2>

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

      {tableName && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="action"
          >
            Select Action
          </label>
          <select
            id="action"
            value={action}
            onChange={handleActionChange}
            className="w-full outline-none border"
          >
            <option value="add">Add Column</option>
            <option value="drop">Drop Column</option>
            <option value="modify">Modify Column</option>
            <option value="rename">Rename Column</option>
          </select>
        </div>
      )}

      {(action === "add" || action === "modify") && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="columnName"
          >
            Column Name
          </label>
          <input
            id="columnName"
            value={newColumnName}
            onChange={(e) => setNewColumnName(e.target.value)}
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Enter column name"
          />
          <label
            className="block text-gray-700 text-sm font-bold mt-4 mb-2"
            htmlFor="dataType"
          >
            Data Type
          </label>
          <select
            id="dataType"
            value={dataType}
            onChange={(e) => setDataType(e.target.value)}
            className="w-full outline-none border"
          >
            <option value="VARCHAR2">VARCHAR2</option>
            <option value="NUMBER">NUMBER</option>
            <option value="DATE">DATE</option>
            {/* Add more data types if needed */}
          </select>
          {dataType === "VARCHAR2" && (
            <div className="mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="length"
              >
                Length
              </label>
              <input
                id="length"
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full border p-2 rounded"
                placeholder="Enter length"
              />
            </div>
          )}
        </div>
      )}

      {action === "drop" && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dropColumn"
          >
            Select Column to Drop
          </label>
          <select
            id="dropColumn"
            value={selectedColumn}
            onChange={(e) => setSelectedColumn(e.target.value)}
            className="w-full outline-none border"
          >
            <option value="" disabled>
              Select a column
            </option>
            {columns.map((col) => (
              <option key={col.name} value={col.name}>
                {col.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {action === "modify" && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="modifyColumn"
          >
            Select Column to Modify
          </label>
          <select
            id="modifyColumn"
            value={selectedColumn}
            onChange={(e) => setSelectedColumn(e.target.value)}
            className="w-full outline-none border"
          >
            <option value="" disabled>
              Select a column
            </option>
            {columns.map((col) => (
              <option key={col.name} value={col.name}>
                {col.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {action === "rename" && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="renameColumn"
          >
            Select Column to Rename
          </label>
          <select
            id="renameColumn"
            value={selectedColumn}
            onChange={(e) => setSelectedColumn(e.target.value)}
            className="w-full outline-none border"
          >
            <option value="" disabled>
              Select a column
            </option>
            {columns.map((col) => (
              <option key={col.name} value={col.name}>
                {col.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Execute
      </button>
    </div>
  );
};

export default AlterTable;
