const Category =require('../modals/Category')

exports.fetchCategory= async (req,res)=>{
    try {
        const categories= await Category.find({}).exec();
         res.status(201).json(categories)
    } catch (error) {
         res.status(501).json({
            message:"failed",
            error
        })
    }
   
 }

 exports.createCategory= async (req,res)=>{
    const categories=new Category(req.body)
    try {
       await categories.save();
         res.status(401).json({
            message:"success",
            categories
        })
    } catch (error) {
         res.status(501).json({
            message:"failed",
            error
        })
    }
   
 }