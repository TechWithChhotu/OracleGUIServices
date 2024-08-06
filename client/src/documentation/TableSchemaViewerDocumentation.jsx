import React from "react";

const TableSchemaViewerDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Table Schema Viewer
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The Table Schema Viewer allows users to inspect the schema of a table
          in the database. This includes information about the table's columns,
          their data types, constraints, and other properties.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
        <p className="text-gray-700 mb-6">
          Viewing a table's schema helps users understand the structure of the
          table and how data is organized. This is useful for both development
          and troubleshooting purposes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
-- SQL query to view schema of a table
DESCRIBE table_name;

-- or using the INFORMATION_SCHEMA in SQL Server
SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE, COLUMN_DEFAULT
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'table_name';
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          In this example:
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>DESCRIBE table_name:</strong> This command shows the
              structure of the table, including column names, data types, and
              constraints.
            </li>
            <li>
              <strong>INFORMATION_SCHEMA.COLUMNS:</strong> This query retrieves
              detailed information about the columns in a specified table, such
              as their names, data types, nullability, and default values.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-6">
          When using the Table Schema Viewer:
          <ul className="list-disc list-inside mb-6">
            <li>
              Ensure you have the necessary permissions to view the schema
              information.
            </li>
            <li>
              For large tables, schema information can be extensive, so consider
              using filtering options to narrow down the view.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default TableSchemaViewerDocumentation;
