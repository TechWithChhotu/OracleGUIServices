import app from "./app.js";
import { config } from "dotenv";
config();

import { oracleDBConfig } from "./config/Oracle.config.js";

const port = process.env.PORT || 3001;

app.listen(port, async () => {
  // await oracleDBConfig();
  console.log(`App is running on http://localhost:${port}`);
});
