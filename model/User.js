const { SchemaType } = require('mongoose');
const mongoose = require('mongoose');
const md5 = require('md5');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: Buffer, required: true },
  name:{ type: String, required: true, default: 'user' },
  gravatar: { type: String,  default: 'https://www.gravatar.com/avatar/user' },
  resetToken:String,
  resetTokenExpiration:String,
  salt:Buffer,
});
const virtual=userSchema.virtual('id');
virtual.get(function(){
  return this._id;
})
userSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){delete ret._id}
})
const User = mongoose.model('User', userSchema);
module.exports = User;
