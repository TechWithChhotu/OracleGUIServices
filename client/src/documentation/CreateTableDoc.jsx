import React from "react";

const CreateTableDoc = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Create Table</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The CREATE TABLE statement is used to create a new table in the
          database. A table consists of columns and each column has a datatype.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
CREATE TABLE table_name (
  column1 datatype constraint,
  column2 datatype constraint,
  ...
);
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
CREATE TABLE Employees (
  EmployeeID int NOT NULL,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  BirthDate date,
  PRIMARY KEY (EmployeeID)
);
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          This example creates a table named <code>Employees</code> with four
          columns: <code>EmployeeID</code>, <code>LastName</code>,{" "}
          <code>FirstName</code>, and <code>BirthDate</code>. The{" "}
          <code>EmployeeID</code> column is set as the primary key and cannot
          contain NULL values.
        </p>
      </div>
    </div>
  );
};

export default CreateTableDoc;
