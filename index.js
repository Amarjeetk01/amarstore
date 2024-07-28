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
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import passport from "./middlewares/googleAuth.js";

// ES module workaround for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(DB_URL);
  console.log("database connected");
}

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json({
  verify:(req,res,buf)=>{
    req.rawBody=buf
  }
}))

const corsOptions = {
  origin: ECOMMERCE_STORE_URL,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(cookieParser());
// app.use(passport.initialize());
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
app.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "dist", "index.html"))
);
app.use("/", (req, res) => {
  res.send(`
  <h1>Welcome ...</h1>
  `);
});

app.use(errorHandler);
const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
