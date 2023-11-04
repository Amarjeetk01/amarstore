const UserInfo = require("../model/UserInfo");

const createUserInfo = async (req, res) => {
    const product = new UserInfo(req.body);
    try {
        const user = await product.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
}

const fetchUserInfoDetails = async (req, res) => {
  // const { id } = req.params;
  const userId = req.user._id.toString();
  // console.log(userId)
  try {
    const user = await UserInfo.findOne({ user: userId }).populate('user')
    .populate({
      path: 'order.items.product',
      model: 'Product', // Reference to your Product model
    });
    if (!user) {
      return res.status(404).json({ message: 'User information not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};




const updateUserInfo = async (req, res) => {
  // const { id } = req.params;
  const userId = req.user._id.toString();
  const updatedUserData = req.body;

  try {
    // Use findOneAndUpdate to update the user information based on the user's ID
    const user = await UserInfo.findOneAndUpdate({ user: userId }, updatedUserData, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User information not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    // console.log(err.message)
    res.status(500).json({ message: 'Error while updating user information: ' + err.message });
  }
};


module.exports = { createUserInfo, fetchUserInfoDetails, updateUserInfo };

