import React from "react";
import { Link } from "react-router-dom";

const DocumentationPage = () => {
  const operations = [
    { name: "Create Table", route: "create-table" },
    { name: "Insert Data", route: "insert-into-table" },
    { name: "View Data", route: "select-from-table" },
    { name: "Update Table Record", route: "update-table-data" },
    { name: "Delete From Table", route: "delete-table-data" },
    { name: "Truncate Table", route: "truncate-table" },
    { name: "Drop Table", route: "drop-table" },
    { name: "Alter Table", route: "alter-table" },
    { name: "View Table Schema", route: "table-schema" },
    { name: "Create User", route: "create-user" },
    { name: "Grant Permission", route: "grant-permission" },

    { name: "Login", route: "/login" },
    { name: "Services", route: "/services" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
    { name: "Team Members", route: "/team-member" },
    { name: "Set Workspace", route: "/set-workspace" },
    { name: "Sign Up", route: "/sign-up" },
    { name: "SQL Terminal", route: "/sql-terminal" },
    { name: "Test", route: "/test" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Oracle Operations Documentation
      </h1>
      <div className="flex justify-center">
        <ul className="w-full max-w-4xl">
          {operations.map((operation, index) => (
            <li key={index} className="bg-white shadow-lg rounded-lg mb-6 p-6">
              <h2 className="text-2xl font-semibold mb-4">{operation.name}</h2>
              <Link
                to={operation.route}
                className="text-blue-500 hover:underline"
              >
                Go to {operation.name} Page
              </Link>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Description</h3>
                <p className="text-gray-700">
                  {operation.name} allows you to {operation.description}. For
                  more details and examples, click the link above.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocumentationPage;
