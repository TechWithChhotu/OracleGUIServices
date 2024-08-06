import oracledb from "oracledb";

const createCommonUser = async (req, res) => {
  const { username, password } = req.body;
  let connection;
  try {
    // Connect to the CDB as SYSDBA
    connection = await oracledb.getConnection({
      user: "sys",
      password: "123", // SYS password
      connectString: "localhost/XEPDB1",
      privilege: oracledb.SYSDBA, // Set privilege to SYSDBA
    });

    // Create the common user
    const commonUsername = `${username}`;
    await connection.execute(
      `CREATE USER ${commonUsername} IDENTIFIED BY ${password}`
    );

    // Commit the transaction
    await connection.commit();

    res.status(200).json({
      success: true,
      msg: `Common user ${commonUsername} created`,
    });
  } catch (err) {
    console.error("Error creating common user", err);
    res.status(500).json({
      success: false,
      msg: "Error creating common user",
      error: err.message,
    });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
};

const getPermission = async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({
      success: false,
      msg: "Username is required",
    });
  }

  console.log("Username =>", username);

  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "sys",
      password: "123", // SYS password
      connectString: "localhost/XEPDB1",
      privilege: oracledb.SYSDBA, // Set privilege to SYSDBA
    });

    // Sanitize input
    const dbname = username.replace(/[^a-zA-Z0-9_]/g, "");

    // Grant privileges
    const r1 = await connection.execute(`GRANT CREATE SESSION TO ${dbname}`);
    const r2 = await connection.execute(`GRANT CREATE TABLE TO ${dbname}`);
    const r3 = await connection.execute(
      `ALTER USER ${dbname} QUOTA UNLIMITED ON USERS`
    );

    console.log("Permission Granted");

    res.status(200).json({
      success: true,
      msg: "Permissions granted successfully",
      results: { r1, r2, r3 },
    });
  } catch (err) {
    console.error("Error granting permissions:", err);
    res.status(400).json({
      success: false,
      msg: "Failed to grant permissions",
      error: err.message,
    });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
};

export default createCommonUser;
export { getPermission };
