const jwt = require("jsonwebtoken")
const verifyIsLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    //   console.log(token);
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }

try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = decoded
    next()
} catch (error) {
    return res.status(401).send("Unauthorized. Invalid token")
}

  } catch (error) {
    next(error);
  }
};

module.exports = { verifyIsLoggedIn };
