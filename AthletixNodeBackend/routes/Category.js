const express=require("express")
const categoryController=require("../controllers/Category")
const router=express.Router()

router
    .post("/",categoryController.create)
    .get("/",categoryController.getAll)

    
module.exports=router