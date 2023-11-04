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
    // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYXJrcmt1bWFyODJAZ21haWwuY29tIiwiaWQiOiI2NTQ1ZGY4NTgyZGYwMjIxNDk0Njk5OWMiLCJpYXQiOjE2OTkwOTA0MzIsImV4cCI6MTY5OTE3NjgzMn0.hSG4JRr0spRjGRfyajQi0wKC5okQhw8Chc4Y53WM6qo"
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

  
