const mongoose=require('mongoose')
const express=require('express')
const router=express.Router()
const User=mongoose.model("User")
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../key')
const bcrypt=require('bcrypt')
const requiredLogin=require('../middleware/requiredLogin')
const Order=mongoose.model("Order")

router.get('/protected',requiredLogin,(req,res)=>{
    res.send("Arham SSP")
})

router.post('/signup',(req,res)=>{
    // console.log(req.body)
    const {name , email , address , password}=req.body
    if(!email || !name || !address || !password){
        return res.status(422).json({error:"Please fill all the fields"})
    }
    User.findOne({email:email})
    .then(savedUser => {
        if(savedUser){
            return res.status(422).json({error:"Email Already exists"})
        }
        bcrypt.hash(password,13)
        .then(hashedPassword => {
            const user=new User({
                name,
                address,
                email,
                password:hashedPassword
            })
            user.save()
            .then(doMatch => {
                if(doMatch){
                    return res.status(200).json({message:"Successfully Saved"})
                }
            })
            .catch(err =>{
                console.log(err)
            })
    
        })
            
    })
    .catch(err =>{
        console.log(err)
    })
    
})

router.post('/signin',(req,res)=>{
    const {email , password}=req.body
    if(!email || !password){
        return res.status(422).json({error:"Please Fill all the fields"})
    }
    User.findOne({email:email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(404).json({error:"Invalid email and password"})
        }
        bcrypt.compare(password , savedUser.password)
        .then(doMatch =>{
            if(doMatch){
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
                res.json({token , savedUser})
               
            //   return  res.status(200).json({message:"you are Successfully Login"})
            }
            else{
            return res.status(404).json({error:"Invalid email and password"})

            }
        })
        .catch(err =>{
            console.log(err)
        })
    })
    .catch(err =>{
        console.log(err)
    })
})

router.post('/order',requiredLogin  ,(req,res)=>{
  var product=Object.values(req.body)
  const post=new Order({
      shoppingCart:product,
      orderBy:req.user
  })
  post.save()
  .then(data => res.json({data}))
  .catch(err => console.log(err))

})

router.get('/myorders',requiredLogin,(req,res)=>{
    Order.find({orderBy:req.user._id})
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err => console.log(err))

})

module.exports=router