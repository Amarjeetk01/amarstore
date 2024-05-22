import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true},
  description: String,
  price: { type: Number, min: [0, "invalid price"] },
  discountPercentage: { type: Number, min: [0, "invalid discountPercentage"], max: [100, "invalid discountPercentage"] },
  rating: { type: Number, min: [0, "wrong rating"], max: [5, "wrong rating"], default: 0 },
  stock: Number,
  category: String,
  images: [{
    type: String,
    validate: {
      validator: v => /^(http|https):\/\/\S+\.\S+$/.test(v),
      message: 'Invalid image URI',
    },
  }],
  product_page_url:String,
  attributes: {
    type: Map, 
    of: String, 
    default: {} 
  },
  reviews:{ type: Number },
  reviews_page_url:String,
}, { timestamps: true });

const virtual=productSchema.virtual('id');
virtual.get(function(){
  return this._id;
})
productSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){delete ret._id}
})

export default mongoose.model('Product', productSchema, 'products');


