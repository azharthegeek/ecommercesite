const express=require('express')
const mongoose=require('mongoose');
const Product=mongoose.model("Product")
const router=express.Router() 


const data=[
    {
        id:"1",
        category:"Phone",
        name:"Iphone 12 Pro Max",
        price:200,
        qty:1,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"2",
        qty:1,
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"3",
        qty:1,
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"4",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"5",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"6",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"7",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"8",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"9",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"10",
        category:"Laptop",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://images.livemint.com/img/2020/04/03/600x338/laptops_1570720004356_1585903134891.jpg"
    },
    {
        id:"11",
        category:"Laptop",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rukminim1.flixcart.com/image/312/312/kmds4nk0/computer/t/0/9/na-thin-and-light-laptop-asus-original-imagfabezamstqhz.jpeg?q=70"
    },
    {
        id:"12",
        category:"Laptop",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://fdn.gsmarena.com/imgroot/news/20/12/nokia-purebook-x14-ofic/-1200/gsmarena_003.jpg"
    },
    {
        id:"13",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"14",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
    },
    {
        id:"15",
        category:"Computer",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2jy2n_lW5XmQCCtM1pwtTmQJn3tSdrMEKt9GrY8LkdYMlco2YFLErM4QtPVD0UCy7pM&usqp=CAU"
    },{
        id:"16",
        category:"Computer",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://c.s-microsoft.com/en-us/CMSImages/1920_Panel07_PriorityFeature_GamePass.jpg?version=67718e36-854a-a201-1dd8-12a68d406d7f"
    },{
        id:"17",
        category:"Computer",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://www.dummies.com/wp-content/uploads/453360.image0.jpg"
    },
    


]

router.get('/products',(req,res)=>{
    res.json({data})
})


module.exports=router