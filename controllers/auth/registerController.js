import { User } from "../../models/index.js";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";

const registerController = {
  async register(req, res, next) {
    try {
      const exist = await User.exists({ email: req.body.email });
      if (exist) {
        return next(
          CustomErrorHandler.alreadyExist("This email is already taken.")
        );
      }
    } catch (err) {
      return next(err);
    }
    const { name,email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    let access_token;
    try {
      const result = await user.save();
      // Token
      access_token = JwtService.sign({ id: result.id });
    } catch (err) {
      return next(err);
    }
    res.cookie('access_token', access_token, { httpOnly: true, });
      res.json({status:"success"})
  },
};

export default registerController;
