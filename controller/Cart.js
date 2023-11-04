const Cart = require('../model/Cart');

const fetchItemsById = async (req, res) => {
  // const { user } = req.query;
  // console.log("cart cj=heck",req.user._id.toString())
  const userId = req.user._id.toString();
  try {
    const carts = await Cart.find({ user: userId }).populate('product').populate('user');
    // const carts = await Cart.find({ user: id }).populate('product').populate('user');
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addToCartById = async (req, res) => {
  const { quantity, user, product } = req.body;
  try {
    // Assuming 'User' and 'Product' are the model names in your Mongoose schema
    const existingCart = await Cart.findOne({ user, product });

    if (existingCart) {
      existingCart.quantity += quantity;
      const updatedCart = await existingCart.save();
      res.status(201).json(updatedCart);
    } else {
      const cart = new Cart({ quantity, user, product });
      const newCart = await cart.save();
      res.status(201).json(newCart);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




const updateCart = async (req, res) => {
    const { id } = req.params;
    const updatedCartData = req.body;
    try {
        const updatedCart = await Cart.findByIdAndUpdate(id, updatedCartData, { new: true });
        if (!updatedCart) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const removeItem = async (req, res) => {
    const { id } = req.params;
    try {
        const removedCart = await Cart.findByIdAndDelete(id);
        if (!removedCart) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.status(200).json(removedCart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { fetchItemsById, addToCartById, updateCart, removeItem };

