const Brand =require('../modals/Brand')

exports.fetchBrands= async (req,res)=>{
    try {
        const brands= await Brand.find({}).exec();
         res.status(200).json(
            brands
        )
    } catch (error) {
         res.status(501).json({
            message:"failed",
            error
        })
    }
   
 }

 exports.createBrand= async (req,res)=>{
    const brand=new Brand(req.body)
    try {
       await brand.save();
         res.status(201).json({
            message:"success",
            brand
        })
    } catch (error) {
         res.status(501).json({
            message:"failed",
            error
        })
    }
   
 }