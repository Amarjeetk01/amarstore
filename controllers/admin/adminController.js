import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from "../../config/index.js";
import {  Customer } from "../../models/index.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const adminController = {
  async getAllCustomers(req, res, next) {
    try {
      const customers = await Customer.find()
      .sort({ createdAt: -1 });
      res.json(customers);
    } catch (err) {
      return next(err);
    }
  },
  async removeImageFromCloudinary(req, res, next) {
    const { publicId } = req.body;
    try {
      await cloudinary.uploader.destroy(publicId);
      res.json({status:1})
    } catch (err) {
      return next(err);
    }
  },

};

export default adminController;