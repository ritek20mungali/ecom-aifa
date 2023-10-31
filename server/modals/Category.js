const mongoose=require('mongoose')

const categorySchema= new mongoose.Schema({
    value:{
    type:String,
    required:true,
    unique:true
 },
 label:{
    type:String,
    required:true,
    unique:true
 },

})

//virtual schema
const virtualId=categorySchema.virtual('id')
virtualId.get(function(){
    return this._id;
})
categorySchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){delete ret._id}
})



module.exports=mongoose.model("Category",categorySchema);