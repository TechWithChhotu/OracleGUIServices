import oracledb from "oracledb";
import { config } from "dotenv";
config();
console.log("process.env.ORACLE_USERNAME==>", process.env.ORACLE_USERNAME);
console.log(" process.env.ORACLE_PASSWORD==>", process.env.ORACLE_PASSWORD);

async function oracleDBConfig(dbUsername, dbPassword) {
  try {
    const poolConfig = {
      user: dbUsername, //Email-chhotustudymail@gmail.com
      password: dbPassword, //password- Chhotu@*#123// MskrckshK@123
      connectString: process.env.ORACLE_CONNECTION_STRING, //localhost/XEPDB1
      poolMin: 10,
      poolMax: 10,
      poolIncrement: 0,
    };

    await oracledb.createPool(poolConfig);

    console.log("Oracle, Connection successful");
    res
      .status(200)
      .json({ success: true, msg: "Connection stablished successfully" });
  } catch (err) {
    console.error("Error starting connection pool:", err);
    throw err;
  }
}

async function closePool() {
  try {
    await oracledb.getPool().close(0);
    console.log("Connection pool closed");
  } catch (err) {
    console.error("Error closing connection pool:", err);
  }
}
export { oracleDBConfig, closePool };
