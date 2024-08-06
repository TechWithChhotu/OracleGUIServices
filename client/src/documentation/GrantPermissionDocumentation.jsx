import React from "react";

const GrantPermissionDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Grant Permissions</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The GRANT statement is used to give specific privileges to a user or
          role in the database. These privileges can include permissions to
          perform certain operations like SELECT, INSERT, UPDATE, DELETE, etc.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
GRANT privilege_type ON object_name TO user_or_role;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
GRANT SELECT, INSERT, UPDATE ON Employees TO new_user;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          In this example:
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>GRANT SELECT, INSERT, UPDATE:</strong> These are the
              privileges being granted. <code>SELECT</code> allows reading data,{" "}
              <code>INSERT</code> allows adding new data, and{" "}
              <code>UPDATE</code> allows modifying existing data.
            </li>
            <li>
              <strong>ON Employees:</strong> Specifies the table on which these
              privileges are granted. Here, it’s the <code>Employees</code>{" "}
              table.
            </li>
            <li>
              <strong>TO new_user:</strong> Specifies the user or role receiving
              the privileges. In this case, the user <code>new_user</code> is
              granted the specified permissions.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-6">
          When granting permissions:
          <ul className="list-disc list-inside mb-6">
            <li>
              Ensure that you are granting permissions only to users who need
              them, following the principle of least privilege.
            </li>
            <li>
              Review and audit permissions regularly to ensure they are still
              appropriate.
            </li>
            <li>
              Consider using roles to manage permissions more efficiently,
              especially in larger environments with many users.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default GrantPermissionDocumentation;
