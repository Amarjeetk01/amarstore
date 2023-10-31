const Brand = require("../model/Brand");


const  fetchDataByBrand = async (req, res) => {
    
    try{
        const brands =await Brand.find({}).exec();
        res.status(200).json(brands);
    } catch(err){
        res.status(400).json(err);
    }

}

const createBrand = async (req, res) => {
    const brand = new Brand(req.body);
    try {
        const doc = await brand.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = { fetchDataByBrand,createBrand };