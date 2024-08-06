import React from "react";

const DropTableDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Drop Table</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The DROP TABLE statement is used to remove an existing table from the
          database. When a table is dropped, all the data, indexes, triggers,
          constraints, and permission specifications for that table are also
          removed.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
DROP TABLE table_name;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
DROP TABLE Employees;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          This example removes the table named <code>Employees</code> from the
          database. The <code>DROP TABLE</code> statement permanently deletes
          the table and its data. It is not recoverable, so it should be used
          with caution.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-6">
          If the table being dropped is referenced by a foreign key constraint
          of another table, the <code>DROP TABLE</code> statement will fail
          unless the foreign key constraint is removed first. Additionally, any
          dependent views or stored procedures that reference the table must be
          handled appropriately.
        </p>
      </div>
    </div>
  );
};

export default DropTableDocumentation;
