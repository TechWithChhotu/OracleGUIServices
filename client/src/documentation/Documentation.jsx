import React, { useState } from "react";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import "../App.css";

import CreateTableDocumentation from "../documentation/CreateTableDoc";
import CreateUserDocumentation from "../documentation/CreateUserDocumentation";
import InsertIntoTableDocumentation from "../documentation/InsertIntoTableDocumentation";
import SelectFromTableDocumentation from "../documentation/SelectFromTableDocumentation ";
import UpdateTableDataDocumentation from "../documentation/UpdateTableDataDocumentation ";
import DeleteFromTableDocumentation from "../documentation/DeleteFromTableDocumentation";
import TruncateTableDocumentation from "../documentation/TruncateTableDocumentation";
import DropTableDocumentation from "../documentation/DropTableDocumentation";
import AlterTableDocumentation from "../documentation/AlterTableDocumentation";
import TableSchemaViewerDocumentation from "../documentation/TableSchemaViewerDocumentation";
import GrantPermissionDocumentation from "../documentation/GrantPermissionDocumentation";

const DocumentationPage = () => {
  const [selected, setSelected] = useState("introduction");
  const location = useLocation();

  const operations = [
    {
      name: "Introduction",
      route: "introduction",
      component: <CreateTableDocumentation />,
    },
    {
      name: "Create Table",
      route: "create-table",
      component: <CreateTableDocumentation />,
    },
    {
      name: "Insert Data",
      route: "insert-into-table",
      component: <InsertIntoTableDocumentation />,
    },
    {
      name: "View Data",
      route: "select-from-table",
      component: <SelectFromTableDocumentation />,
    },
    {
      name: "Update Table Record",
      route: "update-table-data",
      component: <UpdateTableDataDocumentation />,
    },
    {
      name: "Delete From Table",
      route: "delete-from-table",
      component: <DeleteFromTableDocumentation />,
    },
    {
      name: "Truncate Table",
      route: "truncate-table",
      component: <TruncateTableDocumentation />,
    },
    {
      name: "Drop Table",
      route: "drop-table",
      component: <DropTableDocumentation />,
    },
    {
      name: "Alter Table",
      route: "alter-table",
      component: <AlterTableDocumentation />,
    },
    {
      name: "View Table Schema",
      route: "table-schema-viewer",
      component: <TableSchemaViewerDocumentation />,
    },
    {
      name: "Create User",
      route: "create-user",
      component: <CreateUserDocumentation />,
    },
    {
      name: "Grant Permission",
      route: "grant-permission",
      component: <GrantPermissionDocumentation />,
    },
  ];

  return (
    <div className="max-h-[90%] flex bg-gray-100">
      <div className="w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Learn SQL</h2>
        <ul className="overflow-y-scroll scroll-container  h-[90%]">
          {operations.map((operation, index) => (
            <li key={index} className="mb-2">
              <Link
                to={`${operation.route}`}
                className={`block p-2 rounded-lg hover:bg-gray-200 ${
                  selected === operation.route ? "bg-gray-200" : ""
                }`}
                onClick={() => setSelected(operation.route)}
              >
                {operation.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 pb-2 px-6 scroll-container overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default DocumentationPage;
