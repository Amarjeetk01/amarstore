import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String},
    email: { type: String, required: true, unique: true },
    password:{ type: String, required:true},
    role: { type: String,default:'user'},
    avatar: { type: String,  default: 'https://res.cloudinary.com/db45lr9pv/image/upload/v1716405025/kcngdr0qvn4diugotpup.jpg' },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' , default: []}],
    resetToken:String,
    resetTokenExpiration:String,
}, { timestamps: true });

const virtual=userSchema.virtual('id');
virtual.get(function(){
  return this._id;
})
userSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){delete ret._id}
})

export default mongoose.model('User', userSchema, 'users');