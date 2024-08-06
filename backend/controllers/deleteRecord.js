import oracle from "oracledb";

const deleteRecord = async (req, res) => {
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

    const result = await connection.execute(command);
    await connection.commit();

    console.log("Result ===> ", result);

    if (result.rowsAffected === 0) {
      res.status(400).json({
        success: false,
        message: "No records deleted. Check your query and data.",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Record deleted successfully",
        data: result,
      });
    }
  } catch (error) {
    console.error("Error deleting table data:", error);
    res.status(500).json({ error: "Error deleting table data" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

export default deleteRecord;
