const jwt = require("jsonwebtoken");
const verifyIsLoggedIn = (req, res, next) => {
  // next();
  // return; 
  try {
        // const {token} = req.body;
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGIzNmY0Y2ExNTMwNTg2MmZkMjQ4NjkiLCJuYW1lIjoiYWRtaW4iLCJsYXN0TmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTI0NDEzOTMsImV4cCI6MTY5MjQ2NjU5M30.NWlTdC-6Wp09ymD8EbY4Mlc_Q89c6tXJhhp4-fCqpFs";
    // const token = req.cookies.access_token; // This way is to go with cookies but we are skipping because the faced cookie issue on how to access them
    console.log("token(verifuAuthToken) :", token);
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).send("Unauthorized. Invalid token");
    }
  } catch (error) {
    next(error);
  }
};

const verifyIsAdmin = (req, res, next) => {
  // next();
  // return 
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).send("Unautherized. Admin required");
  }
};

module.exports = { verifyIsLoggedIn, verifyIsAdmin };
