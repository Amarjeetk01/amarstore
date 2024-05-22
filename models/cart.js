import mongoose from 'mongoose';


const cartSchema = new mongoose.Schema({
  quantity: {type: Number, default: 0},
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  color: {type: String},
  size: {type: String},
}, { timestamps: true });

const virtual = cartSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
cartSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  }
});

export default mongoose.model('Cart', cartSchema, 'carts');