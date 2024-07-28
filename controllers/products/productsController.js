import { PAGE_SIZE } from "../../config/index.js";
import { Product } from "../../models/index.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";

const productsController = {
  async getAllProducts(req, res, next) {
    try {
      const products = await Product.find()
        .select("-updatedAt -__v")
        .sort({ createdAt: -1 });
      res.json(products);
    } catch (err) {
      return next(err);
    }
  },
  async getProductsByFilter(req, res, next) {
    let {
      category,
      page,
      limit,
      search,
      availability,
      rating,
      discount,
      price,
    } = req.query;
    limit = limit || PAGE_SIZE;
    page = page || 1;
    let query = Product.find()
      .select("-updatedAt -__v")
      .sort({ createdAt: -1 });
    if (search) {
      if (search === "men" || search === "women" || search === "kids") {
        query = query.find({ category:search });
      } else {
        query = query.find({
          $or: [
            { title: { $regex: search, $options: "i" } },
            { category: { $regex: search, $options: "i" } },
            // { tags: { $in: [new RegExp(search, "i")] } }
          ],
        });
      }
    }
    
    if (category) {
      query = query.find({ category });
    }

    if (discount) {
      const discountSet = discount.split(",");
      const discountQuery = discountSet.map((discountValue) => ({
        discountPercentage: { $gte: parseInt(discountValue) },
      }));
      query = query.or(discountQuery);
    }

    if (rating) {
      const ratingSet = rating.split(",").map((r) => parseFloat(r));
      query = query.find({ rating: { $in: ratingSet } });
    }

    if (price) {
      const priceSet = price.split(",").map((r) => parseFloat(r));
      query = query.find({ price: { $lte: priceSet } });
    }

    if (availability) {
      if (availability === "true") {
        query = query.where("stock").gt(0);
      } else {
        query = query.where("stock").eq(0);
      }
    }

    if (req.query.sort && req.query.order) {
      query = query.sort({ [req.query.sort]: req.query.order });
    }

    try {
      const totalCount = await Product.countDocuments(query);
      const products = await query.skip((page - 1) * limit).limit(limit);
      if (!products || products.length === 0) {
        return next(CustomErrorHandler.notFound());
      }
      const totalPages = Math.ceil(totalCount / limit);
      res.json({ products, totalPages });
    } catch (err) {
      return next(err);
    }
  },

  async getProductById(req, res, next) {
    const { id } = req.params;
    try {
      const product = await Product.findById(id).select("-updatedAt -__v");
      if (!product) {
        return next(CustomErrorHandler.notFound());
      }
      res.json(product);
    } catch (err) {
      return next(err);
    }
  },

  async createProduct(req, res, next) {
    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      category,
      images,
      attributes,
    } = req.body;

    if (!title || !description || !price || !discountPercentage || !category) {
      return next(CustomErrorHandler.notSufficientData());
    }

    try {
      const product = new Product({
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        category: category.toLowerCase(),
        images,
        attributes,
      });
      const result = await product.save();
      res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async updateProductById(req, res, next) {
    const { id } = req.params;
    try {
      const exist = await Product.findById(id);
      if (!exist) {
        return next(CustomErrorHandler.notFound());
      }
      const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        category,
        images,
        attributes,
      } = req.body;
      const updateData = {};
      if (title) updateData.title = title;
      if (description) updateData.description = description;
      if (price) updateData.price = price;
      if (discountPercentage)
        updateData.discountPercentage = discountPercentage;
      if (rating) updateData.rating = rating;
      if (stock || stock === 0) updateData.stock = stock;
      if (category) updateData.category = category.toLowerCase();
      if (images) updateData.images = images;
      if (attributes) updateData.attributes = attributes;
      const product = await Product.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      res.json(product);
    } catch (err) {
      return next(err);
    }
  },

  async deleteProductById(req, res, next) {
    const { id } = req.params;
    try {
      await Product.findByIdAndDelete(id);
      res.json({ status: "success" });
    } catch (err) {
      return next(err);
    }
  },

  async getAllCollections(req, res, next) {
    try {
      const products = await Product.find();
      if (products.length === 0) {
        return res.json([]);
      }

      let collections = [];
      let uniqueCategory = new Set();

      products.forEach((product) => {
        const lowerCaseCategory = product.category.toLowerCase();
        if (!uniqueCategory.has(lowerCaseCategory)) {
          uniqueCategory.add(lowerCaseCategory);
          collections.push({
            collectionName: lowerCaseCategory,
            collection: products
              .filter((p) => p.category.toLowerCase() === lowerCaseCategory)
              .map((product) => product.id),
          });
        }
      });

      res.json(collections);
    } catch (err) {
      return next(err);
    }
  },
};

export default productsController;
