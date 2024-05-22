import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: { type: String},
    email: { type: String, },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    orders: {type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],},
    paymentToken: { type: String, },
}, { timestamps: true });

const virtual=customerSchema.virtual('id');
virtual.get(function(){
  return this._id;
})
customerSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){delete ret._id}
})

export default mongoose.model('Customer', customerSchema, 'customers');