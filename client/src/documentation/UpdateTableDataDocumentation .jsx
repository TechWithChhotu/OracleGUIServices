import React from "react";

const UpdateTableDataDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Update Table Data</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The UPDATE statement is used to modify existing records in a table.
          You can update one or more columns for all rows that match a certain
          condition.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
UPDATE Employees
SET LastName = 'Smith', FirstName = 'Jane'
WHERE EmployeeID = 1;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          This example updates the <code>LastName</code> and{" "}
          <code>FirstName</code> columns of the <code>Employees</code> table for
          the row where the <code>EmployeeID</code> is 1. The <code>WHERE</code>{" "}
          clause specifies which records should be updated. If you omit the{" "}
          <code>WHERE</code> clause, all records in the table will be updated.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-6">
          The <code>UPDATE</code> statement can also be used to update multiple
          columns or multiple rows at once. Here are some additional examples:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Updating multiple columns:</li>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
            {`
UPDATE Employees
SET LastName = 'Johnson', BirthDate = '1988-07-01'
WHERE EmployeeID = 2;
            `}
          </pre>
          <li>Updating multiple rows:</li>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
            {`
UPDATE Employees
SET BirthDate = '1990-01-01'
WHERE LastName = 'Doe';
            `}
          </pre>
        </ul>
      </div>
    </div>
  );
};

export default UpdateTableDataDocumentation;
