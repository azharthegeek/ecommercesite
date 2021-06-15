const express=require('express')
const mongoose=require('mongoose');
const Product=mongoose.model("Product")
const router=express.Router() 


const data=[
    {
        id:"1",
        category:"Phone",
        name:"Honor 9X",
        price:22200,
        description:"Honor 9X Android smartphone. Announced Oct 2019. Features 6.59″ display, Kirin 710F chipset, 4000 mAh battery, 128 GB storage, 6 GB RAM."
        info:"The Honor 9X succeeds the Honor 8X, and brings some notable upgrades such as a faster SoC, a full-screen display, better cameras."
        qty:1,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HONOR%209X%20-%206GB%20RAM%20128GB%20ROM%20-%2048MP%20Triple%20Camera%20-%206.5%20FullView%20Display%20-%20Sapphire%20Blue%20Colour/HONOUR%209X%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HONOR%209X%20-%206GB%20RAM%20128GB%20ROM%20-%2048MP%20Triple%20Camera%20-%206.5%20FullView%20Display%20-%20Sapphire%20Blue%20Colour/HONOUR%209X%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HONOR%209X%20-%206GB%20RAM%20128GB%20ROM%20-%2048MP%20Triple%20Camera%20-%206.5%20FullView%20Display%20-%20Sapphire%20Blue%20Colour/HONOUR%209X%20(3).jpeg?raw=true",
        photo3: ""
    },
    {
        id:"2",
        qty:1,
        category:"Phone",
        name:"Elephone A6 Mini",
        price:19500,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/ELEPHONE%20a6%20MINI%20(1).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/ELEPHONE%20a6%20MINI%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/ELEPHONE%20a6%20MINI%20(3).jpeg?raw=true",
        photo3: ""
        description: "Elephone A6 Mini is the latest smartphone released by Elephone after Elephone A5 and Elephone A5 Lite in the same month of November 2018. The smartphone is powered by the MediaTek Helio A22 (MT6761) processor.",
        info: "It comes with additional features like Capacitive and Multi-touch. The primary camera is 15.93 megapixels which give an output of 4608 x 3456 pixels with Dual LED flash. The secondary camera has 15.93 megapixels with an output of 4608 x 3456 pixels."
    },
    {
        id:"3",
        qty:1,
        category:"Laptop",
        name:"Acer Aspire One 10.1 Netbook, Intel Atom N450",
        price:40000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Acer%20Aspire%201%20Mini%20Atom%201.6ghz%202gb%20160gb%20HDD%20(Refurbished)/acer%20laptop%20(1).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Acer%20Aspire%201%20Mini%20Atom%201.6ghz%202gb%20160gb%20HDD%20(Refurbished)/acer%20laptop%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Acer%20Aspire%201%20Mini%20Atom%201.6ghz%202gb%20160gb%20HDD%20(Refurbished)/acer%20laptop%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Acer%20Aspire%201%20Mini%20Atom%201.6ghz%202gb%20160gb%20HDD%20(Refurbished)/acer%20laptop%20(4).jpeg?raw=true"
        description: "Get fantasic mobile connectivity in just the shade that suits you with the 10.1 Aspire One D255. Available in five striking colors, the design is stylish and ultra-thin. Stay mobile with 8 hours of battery power and and get online anywhere you get a cell phone signal via optional 3G. Smart usability and easy "carry-ability" make this netbook ideal for everyday computing on the go.",
        info: "Intel Atom 1.66 GHz processor kicks execution into high gear, delivering extremely quick web browsing and battery life that can deal with your crazy work weeks or playtime marathons"
    },
    {
        id:"4",
        category:"Laptop",
        name:"Apple Macbook 13.3 Laptop",
        price:72000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Apple%20Macbook%2013.3%20Laptop%20(Intel%20Core%202%20Duo,DDR3%20HDD,%204GB%20RAM,250GB%20HDD%20-%20Dual%20Operating%20System%20Windows%C2%AE%207%20&%20IOS/apple%20macbook%20(1).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Apple%20Macbook%2013.3%20Laptop%20(Intel%20Core%202%20Duo,DDR3%20HDD,%204GB%20RAM,250GB%20HDD%20-%20Dual%20Operating%20System%20Windows%C2%AE%207%20&%20IOS/apple%20macbook%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Apple%20Macbook%2013.3%20Laptop%20(Intel%20Core%202%20Duo,DDR3%20HDD,%204GB%20RAM,250GB%20HDD%20-%20Dual%20Operating%20System%20Windows%C2%AE%207%20&%20IOS/apple%20macbook%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Apple%20Macbook%2013.3%20Laptop%20(Intel%20Core%202%20Duo,DDR3%20HDD,%204GB%20RAM,250GB%20HDD%20-%20Dual%20Operating%20System%20Windows%C2%AE%207%20&%20IOS/apple%20macbook%20(4).jpeg?raw=true"
        description: "MacBook Pro 13” and MacBook Air available with the Apple M1 chip. Interest-free payments for 12 mo. & earn 3% Daily Cash back with Apple Card. Terms apply. Touch ID sensor. Backlit Magic Keyboard. Accessibility features. Retina display.",
        info: "Shop Apple MacBook Air 13.3 Laptop with Touch ID Intel Core i5 8GB Memory 128GB Solid State Drive Space Gray at Best Buy".
    },
    {
        id:"5",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"6",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"7",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"8",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"9",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"10",
        category:"Laptop",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://images.livemint.com/img/2020/04/03/600x338/laptops_1570720004356_1585903134891.jpg"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"11",
        category:"Laptop",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rukminim1.flixcart.com/image/312/312/kmds4nk0/computer/t/0/9/na-thin-and-light-laptop-asus-original-imagfabezamstqhz.jpeg?q=70"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"12",
        category:"Laptop",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://fdn.gsmarena.com/imgroot/news/20/12/nokia-purebook-x14-ofic/-1200/gsmarena_003.jpg"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"13",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"14",
        category:"Phone",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://rd.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"15",
        category:"Computer",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2jy2n_lW5XmQCCtM1pwtTmQJn3tSdrMEKt9GrY8LkdYMlco2YFLErM4QtPVD0UCy7pM&usqp=CAU"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"16",
        category:"Computer",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://c.s-microsoft.com/en-us/CMSImages/1920_Panel07_PriorityFeature_GamePass.jpg?version=67718e36-854a-a201-1dd8-12a68d406d7f"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    {
        id:"17",
        category:"Computer",
        name:"Iphone 122 Pro Max",
        price:200,
        photo:"https://www.dummies.com/wp-content/uploads/453360.image0.jpg"
        photo1: "",
        photo2: "",
        photo3: ""
        description: "",
        info: ""
    },
    


]

router.get('/products',(req,res)=>{
    res.json({data})
})


module.exports=router