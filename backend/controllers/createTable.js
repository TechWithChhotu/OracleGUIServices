import oracledb from "oracledb";

const CreateTable = async (req, res) => {
  let connection;
  const { query } = req.body;
  // console.log("Query ======> ");
  // console.log(query);

  try {
    // Get a connection from the connection pool
    // connection = await oracledb.getConnection({
    //   user: process.env.ORACLE_USERNAME,
    //   password: process.env.ORACLE_PASSWORD, // replace with your actual password
    //   connectString: process.env.ORACLE_CONNECTION_STRING, // replace with your actual connection string
    // });
    connection = await oracledb.getConnection();
    if (!connection) {
      res.status(400).json({ success: false, msg: "Connection denied" });
    }
    //================TEST Code =================
    // connection = await oracledb.getConnection({
    //   user: "Test60",
    //   password: process.env.ORACLE_PASSWORD, // replace with your actual password
    //   connectString: process.env.ORACLE_CONNECTION_STRING, // replace with your actual connection string
    // });

    // Execute the SQL query to create the table
    const resp = await connection.execute(query);

    // Commit the transaction
    await connection.commit();

    // Send success response
    console.log("table create successfully");
    res.status(201).json({
      success: true,
      msg: "Table created successfully",
      data: resp,
    });
  } catch (err) {
    console.error("Error creating table:", err);
    res.status(500).json({
      success: false,
      msg: "Error creating table",
      error: err.message,
    });
  } finally {
    // Release the connection
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
};

export default CreateTable;
