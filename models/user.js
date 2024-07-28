import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: { type: String, unique: true, sparse: true }, 
  name: { type: String, required: false, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: false },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/db45lr9pv/image/upload/v1716405025/kcngdr0qvn4diugotpup.jpg'
  },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: [] }],
  resetToken: String,
  resetTokenExpiration: Date,
  verifyEmail: { type: Boolean, default: false },
  otp: { type: String, default: null },
  otpTimeExpiration: { type: Date, default: null },
}, { timestamps: true });

userSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    delete ret._id;
  }
});

const User = mongoose.model('User', userSchema, 'users');
export default User;
