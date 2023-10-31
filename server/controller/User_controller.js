const User=require('../modals/User')
const Category=require('../modals/Category')


exports.fetchUserById = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
      const user = await User.findById(id);
      res.status(200).json({id:user.id,addresses:user.addresses,email:user.email,role:user.role});
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
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