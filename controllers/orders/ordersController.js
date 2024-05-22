import { Order } from "../../models/index.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";

const ordersController = {
  async getOrderDetailsByUserId(req, res, next) {
    try {
      const orderDetails = await Order.find({ customer: req.user.id })
      .populate('products.product')
      .select('-__v');
      if (!orderDetails) {
        return next(CustomErrorHandler.notFound());
      }
      res.json({ orderDetails });
    } catch (err) {
      return next(err);
    }
  },

  async getOrderById(req, res, next) {
    const { id } = req.params;
    try {
      const orderDetail = await Order.findById(id).populate('products.product').select(" -__v");
      if (!orderDetail) {
        return next(CustomErrorHandler.notFound());
      }
      res.json({ orderDetail });
    } catch (err) {
      return next(err);
    }
  },

  async getAllOrders(req, res, next) {
    try {
      const orders = await Order.find().populate('products.product customer').select(" -__v");
      res.json(orders);
    } catch (err) {
      return next(err);
    }
  },
  
  async updateStatus(req, res, next) {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const existingOrder = await Order.findById(id);
      if (!existingOrder) {
        return next(CustomErrorHandler.notFound());
      }
      existingOrder.status=status;
      await existingOrder.save();
      res.json({ staus:1 });
    } catch (err) {
      return next(err);
    }
  },

  async deleteOrderById(req, res, next) {
    const { id } = req.params;
    const userId = req.user.id;
    try {
      await Order.findByIdAndDelete(id);
      const updatedOrders = await Order.find({ customer: userId }).populate('products.product').select(" -__v");
      if (!updatedOrders) {
        return next(CustomErrorHandler.notFound());
      }
      res.json({ updatedOrders });
    } catch (err) {
      return next(err);
    }
  },
};

export default ordersController;