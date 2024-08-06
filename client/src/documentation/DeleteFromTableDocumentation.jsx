import React from "react";

const DeleteFromTableDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Delete From Table</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The DELETE statement is used to delete existing records in a table.
          You can delete one or more rows based on a condition specified in the
          WHERE clause.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
DELETE FROM table_name
WHERE condition;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
DELETE FROM Employees
WHERE EmployeeID = 1;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          This example deletes the row from the <code>Employees</code> table
          where the <code>EmployeeID</code> is 1. The <code>WHERE</code> clause
          specifies which records should be deleted. If you omit the{" "}
          <code>WHERE</code> clause, all records in the table will be deleted.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-6">
          The <code>DELETE</code> statement can also be used to delete multiple
          rows at once. Here are some additional examples:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Deleting multiple rows:</li>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
            {`
DELETE FROM Employees
WHERE LastName = 'Doe';
            `}
          </pre>
        </ul>
      </div>
    </div>
  );
};

export default DeleteFromTableDocumentation;
