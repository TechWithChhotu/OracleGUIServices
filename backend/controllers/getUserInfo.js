import oracle from "oracledb";
import jwt from "jsonwebtoken";

const getUserInfo = async (req, res, next) => {
  let connection;
  try {
    console.log("req.user(getUserInfo) ==> ", req.user);

    // const OracleGUIServices = req.cookies?.OracleGUIServices;

    // if (!OracleGUIServices) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Unauthorized! Please login first",
    //   });
    // }
    // //    verify the user with JWT and decode it to get its data
    // jwt.verify(OracleGUIServices, process.env.JWT_SECRET, (err, decoded) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   req.user = decoded;
    //   next();
    // });

    // Further processing with OracleGUIServices
    connection = await oracle.getConnection({
      user: process.env.ORACLE_USERNAME,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING,
    });

    const insertUserQuery = `SELECT * FROM OracleGUIServices WHERE ID=${req.user.userId}`;
    const response = await connection.execute(insertUserQuery);
    // console.log(response.rows[0][2]);
    response.rows[0][3] = undefined; //set password undefined
    res
      .status(200)
      .json({ success: true, msg: "You are logged in", data: response.rows });
  } catch (err) {
    console.log(err);

    res.status(500).json({ success: false, message: err.message });
  }
};

export default getUserInfo;
