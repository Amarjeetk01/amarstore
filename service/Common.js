const passport = require("passport");
const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false })(req, res, (err) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
  });
};
  const cookieExtractor = function(req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYXJrcmt1bWFyODJAZ21haWwuY29tIiwiaWQiOiI2NTQ2OTgwZDg2ODI0YTg5MGMwMThkNDgiLCJpYXQiOjE2OTk3NjY5NjAsImV4cCI6MTY5OTg1MzM2MH0.ClSZHiQC84lA41kppn3GC4TxeuaWInYyyIrukTPDwbw"
    return token;
};

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token; // Assuming you store the token in a cookie

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token expired or invalid' });
    }

    req.user = user; // Attach the user to the request object for further use
    next();
  });
};

module.exports = { authenticateToken ,isAuth,cookieExtractor};

  
