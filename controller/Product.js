const Product = require("../model/Product");

const createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const doc = await product.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
}



const fetchDataByFilter = async (req, res) => {
    let query = Product.find({});
    
    if (req.query.category) {
        query = query.find({ category: req.query.category });
    }
    if (req.query.brand) {
        query = query.find({ brand: req.query.brand });
    }
    if (req.query._sort && req.query._order) {
        query = query.sort({ [req.query._sort]: req.query._order });
    }
    if (req.query._page && req.query._limit) {
        const pageSize = parseInt(req.query._limit, 10);
        const page = parseInt(req.query._page, 10);
        query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }



    try {
        const docs = await query.exec();
        const totalCount = await Product.countDocuments(query.getQuery()).exec();
        res.set({ 'X-Total-Count': totalCount }); 
        res.status(200).json(docs); 
    } catch (err) {
        res.status(400).json(err);
    }
}

const fetchDataById = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = { createProduct, fetchDataByFilter ,fetchDataById};
