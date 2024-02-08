const mongoose=require("mongoose")

const fashionSchema=new mongoose.Schema({
    product:String,
    category:String,
    rating:String,
    price:String
    
})

module.exports=mongoose.model("fashion",fashionSchema)