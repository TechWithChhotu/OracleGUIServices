import express from "express";
import createTable from "../controllers/createTable.js";
import insertTableData from "../controllers/insertTableData.js";
import getTableData from "../controllers/getTableData.js";
import createUser, { getPermission } from "../controllers/createUser.js";
import { getTableColumns, getTables } from "../controllers/getAllTables.js";
import updateRecord from "../controllers/updateRecord.js";
import deleteRecord from "../controllers/deleteRecord.js";
import truncateTable from "../controllers/TruncateTable.js";
import dropTable from "../controllers/DropTable.js";
import alterTable from "../controllers/alterTable.js";
import getTableSchema from "../controllers/getTableSchema.js";
import signUp from "../controllers/signup.js";
import login, { logout, setWorkSpace } from "../controllers/login.js";
import getUserInfo from "../controllers/getUserInfo.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
import getDbUser from "../controllers/getDbUser.js";
import executeTerminalQuery from "../controllers/executeTerminalQuery.js";

const userRoute = express.Router();
/*---------------------->>All custom imports<<----------------------*/

userRoute.get("/ping", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Pong",
  });
});

userRoute.post("/create-table", createTable);
userRoute.post("/get-table-data", getTableData);
userRoute.post("/insert-table-data", insertTableData);
userRoute.get("/get-tables", getTables);
userRoute.post("/get-table-columns", getTableColumns);
userRoute.post("/update-table-record", updateRecord);
userRoute.post("/delete-table-record", deleteRecord);
userRoute.post("/truncate-table", truncateTable);
userRoute.post("/drop-table", dropTable);
userRoute.post("/alter-table", alterTable);
userRoute.post("/get-table-schema", getTableSchema);

userRoute.post("/create-user", createUser);
userRoute.post("/get-permission", getPermission);
userRoute.post("/sign-up", signUp);
userRoute.post("/login", login);
userRoute.post("/set-workspace", setWorkSpace);
userRoute.get("/get-userinfo", isLoggedIn, getUserInfo);
userRoute.get("/logout", logout);
userRoute.get("/get-db-user", getDbUser);
userRoute.post("/execute-terminal-query", executeTerminalQuery);

export default userRoute;
