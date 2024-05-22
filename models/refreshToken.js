import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema({
    token: { type: String, unique: true },
}, { timestamps: false });

const virtual=refreshTokenSchema.virtual('id');
virtual.get(function(){
  return this._id;
})

refreshTokenSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){delete ret._id}
})

export default mongoose.model('RefreshToken', refreshTokenSchema, 'refreshTokens');