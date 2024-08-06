import React from "react";

const InsertIntoTableDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Insert Data into Table
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The INSERT INTO statement is used to add new rows of data to a table
          in the database. You can specify which columns to insert data into, or
          you can insert data into all columns.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
          `}
        </pre>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate)
VALUES (1, 'Doe', 'John', '1990-01-01');
          `}
        </pre>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
INSERT INTO Employees
VALUES (2, 'Smith', 'Jane', '1985-05-12');
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          In the first example, we specify the columns (<code>EmployeeID</code>,{" "}
          <code>LastName</code>, <code>FirstName</code>, <code>BirthDate</code>)
          and insert values into them. In the second example, we insert values
          into all columns of the <code>Employees</code> table without
          specifying the column names.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-6">
          The <code>INSERT INTO</code> statement can be used in several ways:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            You can insert multiple rows by repeating the <code>VALUES</code>{" "}
            clause:
          </li>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
            {`
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate)
VALUES (3, 'Brown', 'Charlie', '1978-09-23'),
       (4, 'Wilson', 'Emma', '1983-11-11');
            `}
          </pre>
          <li>
            You can also use a subquery to insert data from another table:
          </li>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
            {`
INSERT INTO NewEmployees (EmployeeID, LastName, FirstName, BirthDate)
SELECT EmployeeID, LastName, FirstName, BirthDate
FROM Employees
WHERE BirthDate > '1980-01-01';
            `}
          </pre>
        </ul>
      </div>
    </div>
  );
};

export default InsertIntoTableDocumentation;
