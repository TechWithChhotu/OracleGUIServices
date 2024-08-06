import oracle from "oracledb";

const getTableSchema = async (req, res) => {
  const { tableName } = req.body;
  console.log("Table Name ===> ", tableName);
  let connection;
  try {
    connection = await oracle.getConnection({
      user: process.env.ORACLE_USERNAME,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    });

    const result = await connection.execute(
      `SELECT COLUMN_NAME, DATA_TYPE, DATA_LENGTH FROM ALL_TAB_COLUMNS WHERE TABLE_NAME = :tableName`,
      [tableName]
    );

    const schema = result.rows.map((row) => ({
      columnName: row[0],
      dataType: row[1],
      length: row[2],
    }));

    console.log("Schema ===> ", schema);

    res.status(200).json({
      success: true,
      schema,
    });
  } catch (error) {
    console.error("Error fetching table schema:", error);
    res.status(500).json({ error: "Error fetching table schema" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

export default getTableSchema;
