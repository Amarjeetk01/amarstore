const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  price: { type: Number, min: [0, "invalid price"] },
  discountPercentage: { type: Number, min: [0, "invalid discountPercentage"], max: [100, "invalid discountPercentage"] },
  rating: { type: Number, min: [0, "wrong rating"], max: [5, "wrong rating"], default: 0 },
  stock: Number,
  brand: String,
  category: String,
  thumbnail: {
    type: String,
    validate: {
      validator: v => /^(http|https):\/\/\S+\.\S+$/.test(v),
      message: 'Invalid thumbnail URI',
    },
    required: true,
  },
  images: [{
    type: String,
    validate: {
      validator: v => /^(http|https):\/\/\S+\.\S+$/.test(v),
      message: 'Invalid image URI',
    },
  }],
});

const virtual=productSchema.virtual('id');
virtual.get(function(){
  return this._id;
})
productSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){delete ret._id}
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
