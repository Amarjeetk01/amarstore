import { Cart } from "../../models/index.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";

const cartController = {
  async getCarts(req, res, next) {
    const userId = req.user.id;
    try {
      const carts = await Cart.find({ user: userId }).populate('product');
      res.json({ carts });
    } catch (err) {
      return next(err);
    }
  },
  async addToCart(req, res, next) {
    const { quantity, productId, color, size } = req.body;
    const user = req.user.id;
  
    try {
      const existingCart = await Cart.findOne({ user, product: productId });
  
      if (existingCart) {
        existingCart.quantity = quantity;
        const updatedCart = await existingCart.save();
        res.json(updatedCart);
      } else {
        const cart = new Cart({ quantity, user, product: productId, color, size });
        const newCart = await cart.save();
        res.json(newCart);
      }
    } catch (err) {
      return next(err);
    }
  },
  async deleteCartById(req, res, next) {
    const {  id } = req.params;
    try {
      await Cart.findByIdAndDelete(id);
      res.json({ status:1 });
    } catch (err) {
      return next(err);
    }
  },
};

export default cartController;