import oracle from "oracledb";

const dropTable = async (req, res) => {
  const { tableName } = req.body;

  if (!tableName) {
    return res
      .status(400)
      .json({ success: false, message: "Table name is required." });
  }

  const command = `DROP TABLE ${tableName}`;
  console.log("Command ===> ", command);
  let connection;

  try {
    connection = await oracle.getConnection({
      user: process.env.ORACLE_USERNAME,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    });

    const result = await connection.execute(command);
    await connection.commit();

    // Check if the table was actually dropped
    const checkTable = `SELECT table_name FROM all_tables WHERE table_name = '${tableName}'`;
    const checkResult = await connection.execute(checkTable);

    if (checkResult.rows.length > 0) {
      res.status(400).json({
        success: false,
        message:
          "Table still exists. Ensure the table name is correct and you have the necessary permissions.",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Table dropped successfully",
        data: result,
      });
    }
  } catch (error) {
    console.error("Error dropping table:", error);
    res.status(500).json({ error: "Error dropping table" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

export default dropTable;
