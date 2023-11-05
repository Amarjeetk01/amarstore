require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // Correct the import
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const cookieParser = require('cookie-parser');
const path = require('path');
const productsRouter=require('./routes/Product')
const brandsRouter=require('./routes/Brand')
const categoriesRouter=require('./routes/Category')
const usersRouter=require('./routes/User')
const cartsRouter=require('./routes/Cart')
const userInfoesRouter=require('./routes/UserInfo');
const User = require('./model/User');
const { cookieExtractor, isAuth } = require('./service/Common');
const app = express();
const port = 8080;
const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = process.env.JWT_SECRET_KEY;
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
}));
// Serve static files from the "build" directory
app.use(express.static(path.resolve(__dirname, 'build')));
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  exposedHeaders: ['X-Total-Count']
}));
passport.use('local',new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return done(null, false, { message: 'Incorrect email or password' });
      }

      crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return done(err); }
        if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
          return done(null, false, { message: 'Incorrect username or password.' });
        }
        return done(null,user);
      });
    } catch (err) {
      return done(err);
    }
  }
));
passport.use('jwt',
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      // console.log('Received token:', jwt_payload);
      const user = await User.findById(jwt_payload.id);
      if (user) {
        // console.log('User found:', user);
        return done(null, user);
      } else {
        console.log('User not found');
        return done(null, false);
      }
    } catch (err) {
      console.error('Error in JWT strategy:', err);
      return done(err, false);
    }
  })
);



passport.serializeUser((user, done) => {
  done(null, {
    // id: user.id,
    // email: user.email,
    // salt: user.salt,
    // name: user.name,
    user
    // 
  });
});

passport.deserializeUser(async (id, done) => {
  try {
    // console.log("amar",id)
    const user = await User.findById(id.user.id); // Assuming user.id is the correct ID
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use(express.json())
app.use('/users', usersRouter.router);
app.use('/products', productsRouter.router);
app.use('/brands', brandsRouter.router);
app.use('/categories', categoriesRouter.router);
app.use('/carts',isAuth, cartsRouter.router);
app.use('/userinfoes',isAuth, userInfoesRouter.router);
app.get('*', (req, res) =>
res.sendFile(path.resolve('build', 'index.html'))
);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Payment Setup
const stripe = require("stripe")(process.env.STRIPE_KEY);
app.post("/create-payment-intent", async (req, res) => {
  const { totalAmount } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount*100,
    currency: "inr",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

main().catch(err => console.log(err));
async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("database connected");
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})