const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    default: null,
  },
  quantity: Number,
});

const orderSchema = new mongoose.Schema({
  totalAmount: Number,
  totalItems: Number,
  address: {
    type: mongoose.Schema.Types.Mixed,
  },
  paymentMethod:{
    type: mongoose.Schema.Types.Mixed,
  },
  status:{
    type: String,
    default: "pending",
  },
  items: [itemSchema],
});

const userInfoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  address: [mongoose.Schema.Types.Mixed],
  order: {
    type: [orderSchema],
    default: null, // Set a default value of null for order
  },
  // order: [mongoose.Schema.Types.Mixed]
});


const virtual=userInfoSchema.virtual('id');
virtual.get(function(){
  return this._id;
})
userInfoSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){delete ret._id}
})

const UserInfo = mongoose.model('UserInfo', userInfoSchema);

module.exports = UserInfo;
