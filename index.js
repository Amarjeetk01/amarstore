import express from "express";

import {
  APP_PORT,
  DB_URL,
  ECOMMERCE_STORE_URL,
  SESSION_SECRET,
} from "./config/index.js";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();
import routes from "./routes/index.js";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import path from "path";

// Database connection
main().catch((err) => console.log(err));
async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB");
  await mongoose.connect(DB_URL);
  console.log("database connected");
}

const corsOptions = {
  origin: { ECOMMERCE_STORE_URL },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static( 'dist'));
app.use(cookieParser());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);
app.use("/api", routes);
app.use("/", (req, res) => {
  res.send(`
  <h1>Welcome ...</h1>
  `);
});
app.get('*', (req, res) =>
res.sendFile('dist', 'index.html')
);

app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
