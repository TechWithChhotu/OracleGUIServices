import oracle from "oracledb";

const alterTable = async (req, res) => {
  const { action, tableName, columnName, dataType, newColumnName } = req.body;
  let connection;
  let query;

  try {
    connection = await oracle.getConnection({
      user: process.env.ORACLE_USERNAME,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    });

    switch (action) {
      case "ADD":
        query = `ALTER TABLE ${tableName} ADD (${columnName} ${dataType})`;
        break;
      case "DROP":
        query = `ALTER TABLE ${tableName} DROP COLUMN ${columnName}`;
        break;
      case "MODIFY":
        query = `ALTER TABLE ${tableName} MODIFY (${columnName} ${dataType})`;
        break;
      case "RENAME":
        query = `ALTER TABLE ${tableName} RENAME COLUMN ${columnName} TO ${newColumnName}`;
        break;
      default:
        return res.status(400).json({ error: "Invalid action" });
    }

    const result = await connection.execute(query);
    await connection.commit();

    res.status(200).json({
      success: true,
      message: `${action} column operation successful`,
      data: result,
    });
  } catch (error) {
    console.error("Error altering table:", error);
    res.status(500).json({ error: "Error altering table" });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

export default alterTable;
