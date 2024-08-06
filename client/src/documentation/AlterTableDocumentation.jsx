import React from "react";

const AlterTableDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Alter Table</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The ALTER TABLE statement is used to modify the structure of an
          existing table. You can use it to add, delete, or modify columns in a
          table, as well as to add or drop table constraints.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
-- Add a new column
ALTER TABLE table_name
ADD column_name datatype;

-- Drop an existing column
ALTER TABLE table_name
DROP COLUMN column_name;

-- Modify an existing column
ALTER TABLE table_name
ALTER COLUMN column_name datatype;

-- Add a new constraint
ALTER TABLE table_name
ADD CONSTRAINT constraint_name constraint_definition;

-- Drop a constraint
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
-- Add a new column 'Email' to the 'Employees' table
ALTER TABLE Employees
ADD Email varchar(255);

-- Drop the 'Email' column from the 'Employees' table
ALTER TABLE Employees
DROP COLUMN Email;

-- Modify the 'LastName' column to allow NULL values
ALTER TABLE Employees
ALTER COLUMN LastName varchar(255) NULL;

-- Add a new primary key constraint
ALTER TABLE Employees
ADD CONSTRAINT pk_employee PRIMARY KEY (EmployeeID);

-- Drop the primary key constraint
ALTER TABLE Employees
DROP CONSTRAINT pk_employee;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          This documentation covers several operations you can perform using the{" "}
          <code>ALTER TABLE</code> statement:
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Add a new column:</strong> Adds a new column to the
              existing table.
            </li>
            <li>
              <strong>Drop an existing column:</strong> Removes a column from
              the table.
            </li>
            <li>
              <strong>Modify an existing column:</strong> Changes the datatype
              or other properties of an existing column.
            </li>
            <li>
              <strong>Add a new constraint:</strong> Adds a constraint such as a
              primary key or unique constraint.
            </li>
            <li>
              <strong>Drop a constraint:</strong> Removes an existing constraint
              from the table.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-6">
          When using the <code>ALTER TABLE</code> statement, be cautious of the
          impact on existing data and relationships:
          <ul className="list-disc list-inside mb-6">
            <li>
              Removing a column will permanently delete the data in that column.
            </li>
            <li>
              Modifying column types may require data conversion and can affect
              existing records.
            </li>
            <li>
              Adding constraints can affect existing records if they do not meet
              the new constraint criteria.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default AlterTableDocumentation;
