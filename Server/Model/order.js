const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types

var OrderSchema=new mongoose.Schema({
    shoppingCart:{
        type:[{}],
        default:[]
    }
    ,

    orderBy:{
        type:ObjectId,
        ref:"User"
    }
}) 

mongoose.model("Order",OrderSchema)