import { User, Visitor } from "../../models/index.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService.js";

const loginController = {
  async login(req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return next(CustomErrorHandler.wrongCredentials());
      }
      // compare the password
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        return next(CustomErrorHandler.wrongCredentials());
      }

      //update visitor count
      const totalVisit = await Visitor.findOne();
      if (totalVisit) {
        totalVisit.visitCount += 1;
        await totalVisit.save();
      } else {
        const newVisitor = new Visitor({ visitCount: 201 });
        await newVisitor.save();
      }
      // Token
      const access_token = JwtService.sign({ id: user.id });
      res.cookie("access_token", access_token, { httpOnly: true });
      // res.json(access_token)
      res.json({ status: 1 });
    } catch (err) {
      return next(err);
    }
  },
  async logout(req, res, next) {
    res.clearCookie("access_token", { path: "/" });
    res.json({ status: 1 });
  },
};

export default loginController;
