import oracledb from "oracledb";

// Fetch existing tables
const getTables = async (req, res) => {
  let connection;
  try {
    console.log("Test========================1");

    connection = await oracledb.getConnection();
    console.log("Test========================2");

    const result = await connection.execute(
      `SELECT table_name FROM all_tables`
    );
    console.log("Test========================3");

    console.log("result (get tables)==> ");
    console.log(result);

    res.json({ tables: result.rows.map((row) => row[0]) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
};

// Fetch columns for the selected table
const getTableColumns = async (req, res) => {
  const { tableName } = req.body;
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: process.env.ORACLE_USERNAME,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    });

    const result = await connection.execute(
      `SELECT column_name, data_type FROM all_tab_columns WHERE table_name = :tableName`,
      { tableName: tableName.toUpperCase() }
    );

    res.json({
      columns: result.rows.map((row) => ({ name: row[0], type: row[1] })),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
};

// Insert data into the selected table
const insertData = async (req, res) => {
  const { tableName } = req.params;
  const data = req.body;
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: process.env.ORACLE_USERNAME,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    });

    const columns = Object.keys(data).join(", ");
    const values = Object.values(data)
      .map((value) => `'${value}'`)
      .join(", ");
    const query = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;

    await connection.execute(query);
    await connection.commit();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
};

export { getTables, getTableColumns, insertData };
