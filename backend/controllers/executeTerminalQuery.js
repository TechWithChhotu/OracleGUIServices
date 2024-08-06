import oracle from "oracledb";

const executeTerminalQuery = async (req, res) => {
  const { query, isLogin } = req.body;

  let connection;
  try {
    if (!isLogin) {
      connection = await oracle.getConnection({
        user: process.env.ORACLE_USERNAME,
        password: process.env.ORACLE_PASSWORD, // SYS password
        connectString: process.env.ORACLE_CONNECTION_STRING,
      });
    } else {
      connection = await oracle.getConnection();
    }

    if (!connection) {
      res.status(400).json({
        success: false,
        msg: "Connection denied",
      });
    }

    const response = await connection.execute(query);
    await connection.commit();

    res.status(200).json({
      success: true,
      msg: "Executed successfully",
      data: response,
    });
  } catch (err) {
    if (!isLogin) {
      connection.close();
    }
    // Handle specific Oracle error codes
    let statusCode = 500;
    let errorMsg = "An unexpected error occurred.";

    switch (err.errorNum) {
      case 942: // ORA-00942: table or view does not exist
        statusCode = 942;
        errorMsg = "Table or view does not exist. Please check your query.";
        break;
      case 1017: // ORA-01017: invalid username/password
        statusCode = 1017;
        errorMsg = "Invalid username or password.";
        break;
      case 28000: // ORA-28000: the account is locked
        statusCode = 28000;
        errorMsg = "Account is locked. Please contact your administrator.";
        break;
      // Add more cases for other specific Oracle error codes as needed
      default:
        errorMsg = err.message;
        break;
    }

    console.log(err.message);

    res.status(statusCode).json({
      success: false,
      msg: errorMsg,
    });
  }
};

export default executeTerminalQuery;
