import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  try {
    const { OracleGUIServices } = await req.cookies;
    if (!OracleGUIServices) {
      return next(
        res.status(401).json({
          success: false,
          message: "Unauthorized! plz login first",
        })
      );
    }

    //    verify the user with JWT and decode it to get its data
    jwt.verify(OracleGUIServices, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
      }
      req.user = decoded;
      next();
    });
  } catch (err) {
    res.status(401).json({
      error: "isLoggined || Authentication failed. Please login again.",
    });
  }
};

export default isLoggedIn;
