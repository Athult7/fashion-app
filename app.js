const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const fashionrouter=require("./controller/addfashion")
const app=express()


app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://athul:athul2000@cluster0.ytkxfih.mongodb.net/fashionDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)


app.use("/api",fashionrouter)

app.listen(3005,()=>{
    console.log("running")
})
