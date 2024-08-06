import oracledb from "oracledb";

const insertTableData = async (req, res) => {
  let connection;
  const { customer_id, loanType, amount, branch_id, teller_emp_id } = req.body;
  const { query, tableName } = req.body;

  let insertSql = query;
  console.log("Query ===> ");

  console.log(insertSql);

  try {
    // Get a connection from the connection pool
    connection = await oracledb.getConnection();

    // ============= Test code ==============
    // connection = await oracledb.getConnection({
    //   user: "Test60",
    //   password: process.env.ORACLE_PASSWORD, // replace with your actual password
    //   connectString: process.env.ORACLE_CONNECTION_STRING, // replace with your actual connection string
    // });

    // Execute the SQL query to insert data into the Test table
    await connection.execute(insertSql);
    await connection.commit();

    // Send success response
    res.status(201).json({
      success: true,
      msg: "Data inserted successfully",
    });
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({
      success: false,
      msg: "Error inserting data",
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

export default insertTableData;
