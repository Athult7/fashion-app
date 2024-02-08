
const express=require("express")
const fashionmodel=require("../model/fashionmodel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let fashion=new fashionmodel(data)
    let result=await fashion.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let data=await fashionmodel.find()
    res.json(data)
})
module.exports=router
