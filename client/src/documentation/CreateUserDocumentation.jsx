import React from "react";

const CreateUserDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Create User</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          The CREATE USER statement is used to create a new user in the
          database. This user can then be granted permissions to perform various
          operations on the database.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Syntax</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
CREATE USER username IDENTIFIED BY password;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-6">
          {`
CREATE USER new_user IDENTIFIED BY SecurePass123;
          `}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-gray-700 mb-6">
          In this example:
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>CREATE USER new_user:</strong> This command creates a new
              user with the username <code>new_user</code>.
            </li>
            <li>
              <strong>IDENTIFIED BY SecurePass123:</strong> This specifies the
              password for the new user. Ensure the password complies with your
              database's security requirements.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-6">
          When creating a new user:
          <ul className="list-disc list-inside mb-6">
            <li>Ensure that the username is unique within the database.</li>
            <li>
              Consider implementing a strong password policy to enhance
              security.
            </li>
            <li>
              After creating the user, assign appropriate roles and permissions
              based on their needs.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default CreateUserDocumentation;
