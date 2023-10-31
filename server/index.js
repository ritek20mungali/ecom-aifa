const express=require('express');
const app = express();
const mongoose=require("mongoose");
const cors=require('cors');

app.use(express.json())//parse req.body

app.use(cors({
    exposedHeaders:['X-Total-Count']
}))
app.use('/products',require('./routes/Products'))
app.use('/brands',require('./routes/Brand'))
app.use('/category',require('./routes/Category'))
app.use('/users',require('./routes/Auth'))
app.use('/cart',require('./routes/Cart'))
app.use('/address',require('./routes/Address'))



mongoose.connect("mongodb://127.0.0.1:27017/ecom",{
    useNewUrlParser:true,       
    useUnifiedTopology:true
})
.then(()=>console.log("Connected to MongoDB"))


app.listen(8050,()=>{
    console.log("Server is listening at port no 8050")
})