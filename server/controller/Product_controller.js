 const Product =require("../modals/Product")

 exports.createProduct= async (req,res)=>{
    const products=new Product(req.body)
    try {
       await products.save();
         res.status(401).json({
            message:"success",
            products
        })
    } catch (error) {
         res.status(501).json({
            message:"failed",
            error
        })
    }
   
 }

exports.fetchAllProducts = async (req, res) => {
    try {
      let query = Product.find({});
      let totalProductsQuery = Product.find({});

  
      if (req.query.category) {
        query = query.where('category').equals(req.query.category);
        totalProductsQuery = totalProductsQuery.where('category').equals(req.query.category);

      }
  
      if (req.query.brand) {
        query = query.where('brand').equals(req.query.brand);
        totalProductsQuery = totalProductsQuery.where('brand').equals(req.query.brand);

      }
  
      if (req.query._sort && req.query._order) {
        query = query.sort({ [req.query._sort]: req.query._order });
        totalProductsQuery = totalProductsQuery.sort({ [req.query._sort]: req.query._order });

      }
      let totalDocs =  await totalProductsQuery.count().exec();
      console.log({totalDocs})
  
      if (req.query._page && req.query._limit) {
        const pageSize = parseInt(req.query._limit);
        const page = parseInt(req.query._page);
        query = query.skip(pageSize * (page - 1)).limit(pageSize);
      }
  
      const products = await query.exec();
        
     
      res.set('X-Total-Count',totalDocs);
      res.status(200).json(
        products,
      );
    } catch (error) {
      res.status(500).json({
        message: "failed",
        error,
      });
    }
  };
  
  exports.fetchProductById= async (req,res)=>{
    const {id}=req.params;
    try {
        const product=await Product.findById({_id:id})
         res.status(401).json(
            product
        )
    } catch (error) {
         res.status(501).json({
            message:"failed",
            error
        })
    }
   
 }
  