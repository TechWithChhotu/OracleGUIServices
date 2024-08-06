import React, { useState } from "react";
import axios from "axios";

const initialColumn = {
  name: "",
  type: "",
  length: "", // Added length field
  notNull: false,
  unique: false,
  primaryKey: false,
  check: "",
  defaultValue: "",
};

const dataTypes = [
  "NUMBER",
  "VARCHAR2",
  "DATE",
  "CLOB",
  "BLOB",
  "CHAR",
  "NCHAR",
  "NVARCHAR2",
  // Add more data types as needed
];

function CreateTableForm() {
  const [tableName, setTableName] = useState("");
  const [columns, setColumns] = useState([initialColumn]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [targetColumn, setTargetColumn] = useState(0);

  const handleTableNameChange = (e) => {
    setTableName(e.target.value);
  };

  const handleEditColumn = (index) => {
    console.log("editable index ===> ", index);
    setTargetColumn(index);
    // setCurrentColumn(columns[index]);
    // setIsEditing(true);
    // setEditIndex(index);
  };

  const handleColumnChange = (index, field, value) => {
    const newColumns = columns.map((col, i) =>
      i === index ? { ...col, [field]: value } : col
    );
    setColumns(newColumns);
  };

  const handleAddColumn = () => {
    setTargetColumn(columns.length);
    setColumns([...columns, initialColumn]);
  };

  const handleRemoveColumn = (index) => {
    setColumns(columns.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const columnDefinitions = columns
      .map((col) => {
        const constraints = [];
        if (col.notNull) constraints.push("NOT NULL");
        if (col.unique) constraints.push("UNIQUE");
        if (col.primaryKey) constraints.push("PRIMARY KEY");
        if (col.check) constraints.push(`CHECK (${col.check})`);
        if (col.defaultValue) constraints.push(`DEFAULT '${col.defaultValue}'`);

        // Add length conditionally for string types
        const typeWithLength =
          col.type === "VARCHAR2" || col.type === "CHAR"
            ? `${col.type}(${col.length})`
            : col.type;

        return `${col.name} ${typeWithLength} ${constraints.join(" ")}`.trim();
      })
      .join(", ");

    const createTableQuery = `CREATE TABLE ${tableName} (${columnDefinitions})`;

    console.log("createTableQuery ===> ");
    console.log(createTableQuery);

    const response = await axios.post(
      "http://localhost:3000/create-table",
      { query: createTableQuery },
      { withCredentials: true }
    );
    console.log(response.data);
  };

  return (
    <div
      className={`min-h-[80%] fixed inset-0 z-50 ${
        isModalOpen ? "" : "hidden"
      } overflow-scroll`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex items-center justify-center min-h-screen px-4 py-6">
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 mx-4 md:mx-0 bg-opacity-80 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Create Table
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-lg font-medium mb-2"
                htmlFor="tableName"
              >
                Table Name
              </label>
              <input
                id="tableName"
                type="text"
                value={tableName}
                onChange={handleTableNameChange}
                className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Columns
            </h3>

            {columns.map((col, index) => (
              <div key={index} className="mb-4 border p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="font-bold">
                      {col.name} ({col.type})
                    </p>
                    <p className="text-gray-600 text-sm">
                      {col.length} {col.notNull ? "NOT NULL" : ""}{" "}
                      {col.unique ? "UNIQUE" : ""}{" "}
                      {col.primaryKey ? "PRIMARY KEY" : ""} {col.check}{" "}
                      {col.defaultValue}
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleEditColumn(index)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveColumn(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  {col.foreignKey
                    ? `FOREIGN KEY REFERENCES ${col.foreignKey}`
                    : ""}
                </p>
              </div>
            ))}
            {/* {alert(columns.length)} */}

            {/* <div className="mb-6 border border-gray-300 rounded-lg p-6 bg-gray-50 shadow-sm">
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Column Name
                </label>
                <input
                  type="text"
                  value={columns[targetColumn].name}
                  onChange={(e) =>
                    handleColumnChange(targetColumn, "name", e.target.value)
                  }
                  className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div> */}

            {/*============================================down in test ========================*/}

            <div className="mb-6 border border-gray-300 rounded-lg p-6 bg-gray-50 shadow-sm">
              <div className="mb-6 border border-gray-300 rounded-lg p-6 bg-gray-50 shadow-sm">
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-medium mb-2">
                    Column Name
                  </label>
                  <input
                    type="text"
                    value={columns[targetColumn].name}
                    onChange={(e) =>
                      handleColumnChange(targetColumn, "name", e.target.value)
                    }
                    className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-medium mb-2">
                  Data Type
                </label>
                <select
                  value={columns[targetColumn].type}
                  onChange={(e) =>
                    handleColumnChange(targetColumn, "type", e.target.value)
                  }
                  className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>
                    Select data type
                  </option>
                  {dataTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              {(columns[targetColumn].type === "VARCHAR2" ||
                columns[targetColumn].type === "CHAR") && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-medium mb-2">
                    Length
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={columns[targetColumn].length}
                    onChange={(e) =>
                      handleColumnChange(targetColumn, "length", e.target.value)
                    }
                    className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div className="mb-4">
                <span className="block text-gray-700 text-lg font-medium mb-2">
                  Constraints
                </span>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={columns[targetColumn].notNull}
                    onChange={(e) =>
                      handleColumnChange(
                        targetColumn,
                        "notNull",
                        e.target.value
                      )
                    }
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">NOT NULL</span>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={columns[targetColumn].unique}
                    onChange={(e) =>
                      handleColumnChange(targetColumn, "unique", e.target.value)
                    }
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">UNIQUE</span>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={columns[targetColumn].primaryKey}
                    onChange={(e) =>
                      handleColumnChange(
                        targetColumn,
                        "primaryKey",
                        e.target.value
                      )
                    }
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">PRIMARY KEY</span>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-medium mb-2">
                    Check Constraint
                  </label>
                  <input
                    type="text"
                    value={columns[targetColumn].check}
                    onChange={(e) =>
                      handleColumnChange(targetColumn, "check", e.target.value)
                    }
                    className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-medium mb-2">
                    Default Value
                  </label>
                  <input
                    type="text"
                    value={columns[targetColumn].defaultValue}
                    onChange={(e) =>
                      handleColumnChange(
                        targetColumn,
                        "defaultValue",
                        e.target.value
                      )
                    }
                    className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {targetColumn > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveColumn(targetColumn)}
                  className="text-red-600 hover:text-red-700"
                >
                  Remove Column
                </button>
              )}
            </div>

            {/*============================================Upper in test ========================*/}
            <button
              type="button"
              onClick={handleAddColumn}
              className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Column
            </button>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Create Table
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTableForm;
