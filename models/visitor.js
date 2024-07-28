import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    visitCount: { type: Number,default:200},
}, { timestamps: true });

const virtual=visitorSchema.virtual('id');
virtual.get(function(){
  return this._id;
})
visitorSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){delete ret._id}
})

export default mongoose.model('Visitor', visitorSchema, 'visitors');