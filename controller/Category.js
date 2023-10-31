const Category = require("../model/Category");


const  fetchDataByCategory = async (req, res) => {
    
    try{
        const categories =await Category.find({}).exec();
        res.status(200).json(categories);
    } catch(err){
        res.status(400).json(err);
    }

}

const createCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        const doc = await category.save();
        res.status(201).json(doc);
    } catch (err) {
        console.error(err); // Log the error to the console
        res.status(400).json(err);
    }
}


module.exports = { fetchDataByCategory,createCategory };