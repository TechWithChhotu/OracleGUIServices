import React, { useEffect } from "react";
import "./App.css";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import CommanLayout from "../layout/CommanLayout";
import Home from "./components/home/Home";
import InsertDataForm from "./components/InsertDataForm";
import Temp from "./components/Temp";
import CreateTableForm from "./components/CreateTable";
import TableDataViewer from "./components/TableDataViewer";
import TableDataUpdater from "./components/TableDataUpdater";
import TableDataDeleter from "./components/TableDataDeleter";
import TruncateTable from "./components/TruncateTable";
import DropTable from "./components/DropTable";
import AlterTable from "./components/AlterTable";
import TableSchemaViewer from "./components/TableSchemaViewer";
import Login from "./components/login/Login";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import TeamMembers from "./components/TeamMember";
import SetWorkspace from "./components/SetWorkspace";
import SignUp from "./components/login/SignUp";
import SqlTerminal from "./components/SQLTerminal";
import CreateTableDoc from "./documentation/CreateTableDoc";
import DocumentationPage from "./documentation/Documentation";
import InsertIntoTableDocumentation from "./documentation/InsertIntoTableDocumentation";
import SelectFromTableDocumentation from "./documentation/SelectFromTableDocumentation ";
import UpdateTableDataDocumentation from "./documentation/UpdateTableDataDocumentation ";
import DeleteFromTableDocumentation from "./documentation/DeleteFromTableDocumentation";
import TruncateTableDocumentation from "./documentation/TruncateTableDocumentation";
import DropTableDocumentation from "./documentation/DropTableDocumentation";
import AlterTableDocumentation from "./documentation/AlterTableDocumentation";
import CreateUserDocumentation from "./documentation/CreateUserDocumentation";
import GrantPermissionDocumentation from "./documentation/GrantPermissionDocumentation";
import TableSchemaViewerDocumentation from "./documentation/TableSchemaViewerDocumentation";
import SQLAndOracleDocumentation from "./documentation/SQLAndOracleDocumentation";
import axios from "axios";
import { setAuth } from "./store/user.slice";
import { useDispatch } from "react-redux";
import GrantPermissionForm from "./components/GrantPermission";
import CreateDbUserForm from "./components/CreateUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route path="" element={<CommanLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/create-table" element={<CreateTableForm />} />
        <Route path="/insert-into-table" element={<InsertDataForm />} />
        <Route path="/view-data" element={<TableDataViewer />} />
        <Route path="/update-table-record" element={<TableDataUpdater />} />
        <Route path="/delete-from-table" element={<TableDataDeleter />} />
        <Route path="/truncate-table" element={<TruncateTable />} />
        <Route path="/drop-table" element={<DropTable />} />
        <Route path="/alter-table" element={<AlterTable />} />
        <Route path="/alter-table" element={<AlterTable />} />
        <Route path="/table-schema-viewer" element={<TableSchemaViewer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team-member" element={<TeamMembers />} />
        <Route path="/set-workspace" element={<SetWorkspace />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sql-terminal" element={<SqlTerminal />} />
        <Route path="/create-db-user" element={<CreateDbUserForm />} />
        <Route path="/grant-permission" element={<GrantPermissionForm />} />

        <Route path="/learn" element={<DocumentationPage />}>
          <Route path="introduction" element={<SQLAndOracleDocumentation />} />
          <Route path="" element={<SQLAndOracleDocumentation />} />

          <Route path="create-table" element={<CreateTableDoc />} />
          <Route
            path="insert-into-table"
            element={<InsertIntoTableDocumentation />}
          />
          <Route
            path="select-from-table"
            element={<SelectFromTableDocumentation />}
          />
          <Route
            path="update-table-data"
            element={<UpdateTableDataDocumentation />}
          />

          <Route
            path="delete-table-data"
            element={<DeleteFromTableDocumentation />}
          />
          <Route
            path="truncate-table"
            element={<TruncateTableDocumentation />}
          />

          <Route path="drop-table" element={<DropTableDocumentation />} />
          <Route path="alter-table" element={<AlterTableDocumentation />} />
          <Route
            path="table-schema"
            element={<TableSchemaViewerDocumentation />}
          />
          <Route path="create-user" element={<CreateUserDocumentation />} />
          <Route
            path="grant-permission"
            element={<GrantPermissionDocumentation />}
          />
        </Route>

        <Route path="/test" element={<Temp />} />
      </Route>
    </Route>
  )
);
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("USE-EFFECT called");

    const fetchData = async () => {
      console.log("fetch data");

      try {
        const response = await axios.get("http://localhost:3000/get-userinfo", {
          withCredentials: true,
        });
        console.log(response.data);
        if (response) {
          dispatch(setAuth(response.data));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
