import oracledb from "oracledb";

const getTableData = async (req, res) => {
  let connection;
  const { query } = req.body;
  const command = query;
  try {
    // Get a connection from the connection pool
    connection = await oracledb.getConnection();

    // ================Test Code ================
    // connection = await oracledb.getConnection({
    //   user: "Test60",
    //   password: process.env.ORACLE_PASSWORD, // replace with your actual password
    //   connectString: process.env.ORACLE_CONNECTION_STRING, // replace with your actual connection string
    // });

    // Execute the SQL query to retrieve data from the Test table
    const result = await connection.execute(
      command,
      [], // No binds needed
      { outFormat: oracledb.OUT_FORMAT_OBJECT } // This returns rows as JavaScript objects
    );

    const jsonData = JSON.stringify(result.rows);
    console.log("result =========> ");
    console.log(jsonData.rows);
    // Send success response with the data
    res.status(200).json({
      success: true,
      msg: "Get Table data successfully",
      data: JSON.parse(jsonData),
    });
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({
      success: false,
      msg: "Error retrieving data",
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

export default getTableData;
