import React from "react";

const SelectFromTableDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Select Data from Table
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The SELECT statement is used to query data from a database. It allows
          you to retrieve specific data by specifying columns and conditions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
SELECT column1, column2, ...
FROM table_name
WHERE condition;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
SELECT FirstName, LastName, BirthDate
FROM Employees
WHERE EmployeeID = 1;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          This example retrieves the <code>FirstName</code>,{" "}
          <code>LastName</code>, and <code>BirthDate</code> columns from the{" "}
          <code>Employees</code> table where the <code>EmployeeID</code> is 1.
          The <code>WHERE</code> clause is used to filter records.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-6">
          The <code>SELECT</code> statement can be used with various clauses to
          perform more complex queries:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <code>ORDER BY</code> - to sort the result set.
          </li>
          <li>
            <code>GROUP BY</code> - to group rows that have the same values.
          </li>
          <li>
            <code>HAVING</code> - to filter groups based on conditions.
          </li>
          <li>
            <code>JOIN</code> - to combine rows from two or more tables.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectFromTableDocumentation;
