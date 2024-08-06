import bcrypt from "bcrypt";
import oracle from "oracledb";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { email, password } = req.body;

  let connection;
  try {
    connection = await oracle.getConnection({
      user: process.env.ORACLE_USERNAME,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    });

    const result = await connection.execute(
      `SELECT * FROM OracleGUIServices WHERE email = :email`,
      { email }
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const userPassword = user[3]; // Assuming password is the fourth column

    const passwordMatch = await bcrypt.compare(password, userPassword);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user[0] }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("OracleGUIServices", token, { httpOnly: true });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeError) {
        console.error("Error closing the database connection:", closeError);
      }
    }
  }
};

const setWorkSpace = async (req, res) => {
  const { dbUsername, dbPassword } = req.body;
  try {
    const poolConfig = {
      user: dbUsername, //Email-chhotustudymail@gmail.com
      password: dbPassword, //password- Chhotu@*#123// MskrckshK@123
      connectString: process.env.ORACLE_CONNECTION_STRING, //localhost/XEPDB1
      poolMin: 10,
      poolMax: 10,
      poolIncrement: 0,
    };

    await oracle.createPool(poolConfig);

    console.log("Oracle, Connection successful");
    res
      .status(200)
      .json({ success: true, msg: "Connection stablished successfully" });
  } catch (err) {
    console.error("Error starting connection pool:", err);
    throw err;
  }
};

const logout = (req, res) => {
  res.clearCookie("OracleGUIServices");
  res.status(200).json({ success: false, msg: "Logout successful" });
};

export default login;
export { setWorkSpace, logout };
