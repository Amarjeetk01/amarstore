import bcrypt from "bcrypt";
import {  ECOMMERCE_STORE_URL } from "../../config/index.js";
import { User } from "../../models/index.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";
import JwtService from "../../services/JwtService.js";
import { sendPasswordResetEmail } from "./sendPasswordResetEmail.js";

const usersController = {
  // Get user details
  async me(req, res, next) {
    try {
      const user = await User.findById(req.user.id)
        .select("-password -updatedAt -__v")
        .exec();

      if (!user) {
        return next(CustomErrorHandler.notFound());
      }

      res.json({
        id: user.id,
        email: user.email,
        avatar: user.avatar,
        name: user.name,
        role: user.role,
        wishlist: user.wishlist,
      });
    } catch (err) {
      return next(err);
    }
  },

  // Send password reset request
  async resetPasswordRequest(req, res, next) {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      
      if (!user) {
        return next(CustomErrorHandler.notFound());
      }

      const resetToken = JwtService.sign({ id: user.id, expiry: "1h" });
      user.resetToken = resetToken;
      user.resetTokenExpiration = Date.now() + 3600000;
      await user.save();
      const resetLink = `${ECOMMERCE_STORE_URL}/reset-password?token=${resetToken}&email=${email}`;
      
      const emailSent = await sendPasswordResetEmail(email, resetLink);

      if (!emailSent) {
        return next(CustomErrorHandler.serverError("Failed to send email"));
      }
      res.json({ status:1 });
    } catch (err) {
      return next(err);
    }
  },

  // Reset password
  async resetPassword(req, res, next) {
    const { token, email, password } = req.body;

    try {
      const user = await User.findOne({ email, resetToken: token }).exec();

      if (!user) {
        return next(CustomErrorHandler.badRequest());
      }

      if (Date.now() > user.resetTokenExpiration) {
        return next(CustomErrorHandler.unauthorized("Token expired"));
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      user.resetToken = null;
      user.resetTokenExpiration = null;
      await user.save();

      res.json({ message: "Password reset successfully" });
    } catch (err) {
      return next(err);
    }
  },

  // add to wishlist
  async addToWishlist(req, res, next) {
    const { productId } = req.body;
  
    try {
      const user = await User.findById(req.user.id);
      if (!productId) {
        return next(CustomErrorHandler.notSufficientData());
      }
  
      const isLiked = user.wishlist.some(id => id.equals(productId));
      if (isLiked) {
        user.wishlist = user.wishlist.filter(id => !id.equals(productId));
      } else {
        user.wishlist.push(productId);
      }
      await user.save();
  
      res.json({ status: "success" });
    } catch (err) {
      return next(err);
    }
  },
  
  // get wishlist products
  async getWishlistProducts(req, res, next) {
    try {
      const user = await User.findById(req.user.id).populate('wishlist');
      res.json(user.wishlist);
    } catch (err) {
      return next(err);
    }
  },
};

export default usersController;
