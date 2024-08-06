import oracle from "oracledb";

const truncateTable = async (req, res) => {
  const { query } = req.body;
  console.log("Query ===> ", query);
  const command = query;
  let connection;
  try {
    connection = await oracle.getConnection({
      user: process.env.ORACLE_USERNAME,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    });

    await connection.execute(command);
    await connection.commit();

    res.status(200).json({
      success: true,
      message: "Table truncated successfully",
    });
  } catch (error) {
    console.error("Error truncating table:", error);
    res.status(500).json({ error: "Error truncating table" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

export default truncateTable;
