import bcrypt from "bcrypt";
import { OAuth2Client } from "google-auth-library";
import { User, Visitor } from "../../models/index.js";
import JwtService from "../../services/JwtService.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const registerController = {
  async register(req, res, next) {
    try {
      const exist = await User.exists({ email: req.body.email });
      if (exist) {
        return next(CustomErrorHandler.alreadyExist("This email is already taken."));
      }
    } catch (err) {
      return next(err);
    }

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    let access_token;
    try {
      const result = await user.save();
      access_token = JwtService.sign({ id: result.id });
    } catch (err) {
      return next(err);
    }
    res.cookie('access_token', access_token, { httpOnly: true });
    //update visitor count
    const totalVisit = await Visitor.findOne();
    if (totalVisit) {
      totalVisit.visitCount += 1;
      await totalVisit.save();
    } else {
      const newVisitor = new Visitor({ visitCount: 201 });
      await newVisitor.save();
    }
    res.json({ status: "success" });
  },

  async loginWithGoogle(req, res, next) {
    try {
      const { token } = req.body;
      let ticket;
      try {
        ticket = await client.verifyIdToken({
          idToken: token.token,
          audience: process.env.GOOGLE_CLIENT_ID,
        });
      } catch (verificationError) {
        console.error('Error verifying token:', verificationError);
        return next(CustomErrorHandler.serverError('Token verification failed'));
      }
      const payload = ticket.getPayload();
      const userId = payload['sub'];

      let user = await User.findOne({ googleId: userId });
      if (!user) {
        user = new User({
          googleId: userId,
          name: payload.name,
          email: payload.email,
          avatar: payload.picture,
        });
        await user.save();
      }
      const accessToken = JwtService.sign({ id: user.id });
      res.cookie('access_token', accessToken, { httpOnly: true });
      //update visitor count
      const totalVisit = await Visitor.findOne();
      if (totalVisit) {
        totalVisit.visitCount += 1;
        await totalVisit.save();
      } else {
        const newVisitor = new Visitor({ visitCount: 201 });
        await newVisitor.save();
      }
      res.json({ status: "success" });
    } catch (err) {
      return next(err);
    }
  },
};

export default registerController;
