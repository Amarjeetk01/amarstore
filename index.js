require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // Correct the import
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
const { isAuth,cookieExtractor } = require('./service/Common');
const { checkTokenExpiration } = require('./controller/User');

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

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  // origin: 'http://localhost:3000',
  // credentials: true,
  exposedHeaders: ['X-Total-Count']
}));



passport.use(new LocalStrategy(
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

      const isValidPassword = await bcrypt.compare(password, user.password); // Compare the provided password with the stored hashed password

      if (!isValidPassword) {
        return done(null, false, { message: 'Incorrect email or password' });
      }
      return done(null,user);
    } catch (err) {
      return done(err);
    }
  }
));
passport.use(
  'jwt',
  new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
      console.log(jwt_payload)
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, { email: user.email, id: user.id,imageUrl:user.gravatar }); 
      } else {
        return done(null, false);
      }
    } catch (err) {
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
app.use('/products',checkTokenExpiration, productsRouter.router);
app.use('/brands',checkTokenExpiration, brandsRouter.router);
app.use('/categories', categoriesRouter.router);
app.use('/carts',checkTokenExpiration, cartsRouter.router);
app.use('/userinfoes',checkTokenExpiration, userInfoesRouter.router);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Payment Setup

// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
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