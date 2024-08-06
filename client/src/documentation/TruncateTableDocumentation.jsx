import React from "react";

const TruncateTableDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Truncate Table</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The TRUNCATE TABLE statement is used to delete all rows from a table
          in a database, without logging the individual row deletions. It is
          faster than the DELETE statement because it does not generate
          individual row delete statements.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
TRUNCATE TABLE table_name;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
TRUNCATE TABLE Employees;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          This example removes all rows from the <code>Employees</code> table.
          Unlike the <code>DELETE</code> statement, <code>TRUNCATE</code> does
          not log individual row deletions, making it faster for large tables.
          However, <code>TRUNCATE</code> cannot be used when a table is
          referenced by a foreign key constraint.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-6">
          The <code>TRUNCATE</code> statement resets any AUTO_INCREMENT counters
          on the table, which means that any new rows added after the truncation
          will have IDs starting from the initial value.
        </p>
      </div>
    </div>
  );
};

export default TruncateTableDocumentation;
