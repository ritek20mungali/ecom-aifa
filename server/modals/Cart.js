const mongoose=require('mongoose')

const cartSchema= new mongoose.Schema({
    
   quantity:{
    type:Number,
    required:true
   },
     product:{
   type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,ref:'User',required:true
    }
})

//virtual schema
const virtualId=cartSchema.virtual('id')
virtualId.get(function(){
    return this._id;
})
cartSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){delete ret._id}
})



module.exports=mongoose.model("Cart",cartSchema);