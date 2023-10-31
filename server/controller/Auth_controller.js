const User =require('../modals/User')

exports.createUser=async(req,res)=>{
    const user=new User(req.body)
    try {
       await user.save();
         res.status(201).json(
            user
        )
    } catch (error) {
         res.status(501).json({
            message:"failed",
            error
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email }).exec();
  
      if (!user) {
        return res.status(404).json({ message: "No such email or password" });
      }
  
      if (user.password === req.body.password) {
        return res.status(200).json({
          id: user.id,
          email: user.email,
          name: user.name,
        });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Failed", error });
    }
  };
  
