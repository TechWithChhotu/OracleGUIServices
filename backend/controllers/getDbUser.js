// SELECT username FROM dba_users;
import OracleDB from "oracledb";

const getDbUser = async (req, res) => {
  let connection;
  try {
    // Connect to the CDB as SYSDBA
    connection = await OracleDB.getConnection({
      user: "sys",
      password: "123", // SYS password
      connectString: "localhost/XEPDB1",
      privilege: OracleDB.SYSDBA, // Set privilege to SYSDBA
    });

    // Create the common user
    const response = await connection.execute(`SELECT username FROM dba_users`);
    console.log(response.rows);

    res.status(200).json({
      success: true,
      msg: "User fetched successfully",
      data: response.rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getDbUser;
