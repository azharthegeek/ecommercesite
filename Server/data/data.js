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
        category:"Laptop",
        name:"HP Pavilion x360",
        price:124149,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Ci5%2010210U%208GB%20256GB%20SSD%2014%20FHD%20Touchscreen%20Backlit%20KB%20Windows%2010%20Intel%20UHD%20Graphics%20Mica%20Color%2081TC000JUS/acer%20laptop%202%20(1).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Ci5%2010210U%208GB%20256GB%20SSD%2014%20FHD%20Touchscreen%20Backlit%20KB%20Windows%2010%20Intel%20UHD%20Graphics%20Mica%20Color%2081TC000JUS/acer%20laptop%202%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Ci5%2010210U%208GB%20256GB%20SSD%2014%20FHD%20Touchscreen%20Backlit%20KB%20Windows%2010%20Intel%20UHD%20Graphics%20Mica%20Color%2081TC000JUS/acer%20laptop%202%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Ci5%2010210U%208GB%20256GB%20SSD%2014%20FHD%20Touchscreen%20Backlit%20KB%20Windows%2010%20Intel%20UHD%20Graphics%20Mica%20Color%2081TC000JUS/acer%20laptop%202%20(4).jpeg?raw=true"
        description: "HP Pavilion x360-14 Touch - Core i5-10210U - 8GB - 256GB SSD + 16GB Optane - Gold",
        info: "10th Gen Intel Core i5-10210U mobile processor.8GB RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. DDR4 is the future of RAM.14 2-in-1 Full HD multitouch screen Laptop. IPS technology for wide viewing angles. Energy-efficient WLED backlight.256GB Solid State Drive accelerated by Intel Optane; Solid State Drive (PCI-e) Save files fast and store more data.Wireless-AC connectivity (1x1, 433 Mbps) is more capacity and wider coverage than Wireless-N"
    },
    {
        id:"6",
        category:"Other",
        name:"Dahua Imou Ranger 2",
        price:7000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dahua%20Imou%20Ranger%202%20Home%20Security%20Surveillance%20Wifi%20Camera%20with%20360%20Degree%20Coverage%20Human/Dahua%20lmou%20ranger%20(4).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dahua%20Imou%20Ranger%202%20Home%20Security%20Surveillance%20Wifi%20Camera%20with%20360%20Degree%20Coverage%20Human/Dahua%20lmou%20ranger%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dahua%20Imou%20Ranger%202%20Home%20Security%20Surveillance%20Wifi%20Camera%20with%20360%20Degree%20Coverage%20Human/Dahua%20lmou%20ranger%20(5).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dahua%20Imou%20Ranger%202%20Home%20Security%20Surveillance%20Wifi%20Camera%20with%20360%20Degree%20Coverage%20Human/Dahua%20lmou%20ranger%20(1).jpeg?raw=true"
        description: "Dahua Imou Ranger 2 Home Security Surveillance Wifi Camera with 360 Degree Coverage Human",
        info: "With 1080P Full HD live monitoring and 0~355° pan & -5~80°tilt features, Ranger 2 ensures every corner of your home completely covered. Human Detection quickly finds human targets in images and immediately sends a notification to you. Privacy Mode helps protect your personal privacy when you are home, and Smart Tracking function lets the camera follows moving objects when it detects motion."
    },
    {
        id:"7",
        category:"PC",
        name:"Dell Optplex 3020",
        price:205000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Del%20Optplex%203020%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.4GHz%208GB%201TB%20DVDRW%20Windows%2010%20Pro%20Free%20Wifi/del%20optplex%20(3).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Del%20Optplex%203020%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.4GHz%208GB%201TB%20DVDRW%20Windows%2010%20Pro%20Free%20Wifi/del%20optplex%20(4).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Del%20Optplex%203020%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.4GHz%208GB%201TB%20DVDRW%20Windows%2010%20Pro%20Free%20Wifi/del%20optplex%20(2).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Del%20Optplex%203020%20SFF%20Desktop%20PC%20-%20Intel%20Core%20i5-4570%204th%20Generation%203.4GHz%208GB%201TB%20DVDRW%20Windows%2010%20Pro%20Free%20Wifi/del%20optplex%20(1).jpeg?raw=true"
        description: "Dell Optplex 3020 SFF Desktop PC - Intel Core i5-4570 4th Generation 3.4GHz 8GB 1TB DVDRW Windows 10 Pro Free",
        info: "Dell OptiPlex 3020 are still a great 1080p gaming machines in 2021. Pared with a proper CPU, and GPU they run games with higher then 60 FPS easily.You can pair any of the models with better video card, CPU and 16 GB of RAM and run 1080p smoothly."
    },
    {
        id:"8",
        category:"Other",
        name:"AMD Radeon HD 5450 1GB",
        price:22200,
        description:"XFX AMD Radeon HD 5450 1GB GDDR3 VGA/DVI/HDMI Low-Profile PCI-Express Graphics Card HD545XZQH2;HD-545X-ZQH2"
        info:"Watch high definition videos on your HD display with the Sapphire Radeon HD 5450. This card features 1GB of DDR3 vRAM and a 650 MHz core clock speed. 80 stream processors accelerate video playback and other programs that can take advantage of the supported APIs. The output options on this card can support many different displays. The card has one VGA port, one DVI port, and an HDMI port. Using the HDMI port, the card can output DTS and DTSHD surround sound audio for an immersive media experience. This card connects to your computer via a single PCI Express x16 connector and only takes up one physical slot."
        qty:1,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG%20(1).jpeg?raw=true",
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG/p3.jpg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/AMD%20Radeon%20HD%205450%201GB%20DDR3%20GTA5%20PUBG/p4.jpg?raw=true"
    },
    {
        id:"9",
        category:"Laptop",
        name:"Dell Latitude 3340",
        price:155000,
        photo:"https://https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%203340%20-13.3%20LED%20Display%20-%20Core%20i3%204th%20Gen%20(4005U)%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20(Activated)/dell%20latitude%20(3).jpeg?raw=trued.techshoor.com/img/iphone-12-pro-max-family-hero-all.jpg"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%203340%20-13.3%20LED%20Display%20-%20Core%20i3%204th%20Gen%20(4005U)%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20(Activated)/dell%20latitude%20(4).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%203340%20-13.3%20LED%20Display%20-%20Core%20i3%204th%20Gen%20(4005U)%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20(Activated)/dell%20latitude%20(2).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%203340%20-13.3%20LED%20Display%20-%20Core%20i3%204th%20Gen%20(4005U)%20-%204GB%20RAM%20-%20500GB%20HDD%20-%20Windows%2010%20(Activated)/dell%20latitude%20(1).jpeg?raw=true"
        description: "Dell Latitude 3340 -13.3 LED Display - Core i3 4th Gen (4005U) - 4GB RAM - 500GB HDD - Windows 10 (Activated)",
        info: "Small in design. Big on collaboration. Dell smallest 13 Essential business notebook features an innovative Webcam for high-quality video conferencing and the latest Intel processors. Operating system available with Windows 10 Home or Windows 10 Pro for a smooth, versatile PC experience."
    },
    {
        id:"10",
        category:"Laptop",
        name:"Dell Latitude E7250",
        price:180000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%20E7250%2012.5%E2%80%9D%20Laptop,%20Intel%20i7-5600U%202.3GHz,%20256GB%20SSD,%208GB%20DDR3,%20Windows%2010%20Pro/dELL%20LATITUDE%20E7250%20(4).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%20E7250%2012.5%E2%80%9D%20Laptop,%20Intel%20i7-5600U%202.3GHz,%20256GB%20SSD,%208GB%20DDR3,%20Windows%2010%20Pro/dELL%20LATITUDE%20E7250%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%20E7250%2012.5%E2%80%9D%20Laptop,%20Intel%20i7-5600U%202.3GHz,%20256GB%20SSD,%208GB%20DDR3,%20Windows%2010%20Pro/dELL%20LATITUDE%20E7250%20(1).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Dell%20Latitude%20E7250%2012.5%E2%80%9D%20Laptop,%20Intel%20i7-5600U%202.3GHz,%20256GB%20SSD,%208GB%20DDR3,%20Windows%2010%20Pro/dELL%20LATITUDE%20E7250%20(3).jpeg?raw=true"
        description: "Dell Latitude E7250 12.5” Laptop, Intel i7-5600U 2.3GHz, 256GB SSD, 8GB DDR3, Windows 10 Pro",
        info: "This Laptop features an SSD of 256GB. Having an SSD means better reliability and performance over a standard hard drive. It means accessing your files faster, loading your programs faster, booting into your operating system faster. It also means lower power usage and improved battery life."
    },
    {
        id:"11",
        category:"PC",
        name:"Desktop 9010 Tower PC",
        price:120000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%209010%20Tower%20PC%20-%20Intel%20Core%20i5-3470%203.2GHz%208GB%20320GB%20DVDRW%20Windows%2010%20Professional/desktop%209010%20tower%20(4).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%209010%20Tower%20PC%20-%20Intel%20Core%20i5-3470%203.2GHz%208GB%20320GB%20DVDRW%20Windows%2010%20Professional/desktop%209010%20tower%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%209010%20Tower%20PC%20-%20Intel%20Core%20i5-3470%203.2GHz%208GB%20320GB%20DVDRW%20Windows%2010%20Professional/desktop%209010%20tower%20(1).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%209010%20Tower%20PC%20-%20Intel%20Core%20i5-3470%203.2GHz%208GB%20320GB%20DVDRW%20Windows%2010%20Professional/desktop%209010%20tower%20(2).jpeg?raw=true"
        description: "Desktop 9010 Tower PC - Intel Core i5-3470 3.2GHz 8GB 320GB DVDRW Windows 10 Professional",
        info: "Revitalize your workforce with the Dell OptiPlex 9010 - designed for maximum productivity - desktop virtualization and outstanding IT control."
    },
    {
        id:"12",
        category:"PC",
        name:"Lenovo ThinkCenter E73",
        price:55000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%20Core%20i3%203rd%20Generation%20(refurbished,%20machine%20only)%204GB,%20320GB/p31.jpg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%20Core%20i3%203rd%20Generation%20(refurbished,%20machine%20only)%204GB,%20320GB/p33.jpg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%20Core%20i3%203rd%20Generation%20(refurbished,%20machine%20only)%204GB,%20320GB/desktop%20core%20i3%20(1).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/Desktop%20Core%20i3%203rd%20Generation%20(refurbished,%20machine%20only)%204GB,%20320GB/desktop%20core%20i3%20(2).jpeg?raw=true"
        description: "Intel® Core™ i3-4160 Processor (3M Cache, 3.60 GHz) , 4GB DDRIII, Storage 500GB 7200 RPM, DVD Recordable, Intel® Integrated Graphics DOS",
        info: "LENOVO Lenovo 10AS00DFUS Desktop Computer - Thinkcentre E73 Intel Core i5 i5 4460S 2.90 Ghz Tower Glossy Black 4 Gb DDR3 Sdram Ram 500 Gb Hdd Dvd Writer Intel Hd Graphics 4600 DDR3 Sdram Graphics Windows 8.1 Pro 64 bit downgradable to Windows 7 P. Premium Performance, Solid Reliabilitywhether you run a small business or the It department of a massive enterprise, you can have confidence in these desktop PCs′ reliability, ease of use and productivity - not to mention their green appeal."
    },
    {
        id:"13",
        category:"Phone",
        name:"Elephone A6 Mini",
        price:25000,
        photo1:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/ELEPHONE%20a6%20MINI%20(1).jpeg?raw=true"
        photo: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/elephone-a6-mini-5-71-inch-4gb-32gb-smartphone-black-1571980875561.jpg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/ELEPHONE%20a6%20MINI%20(2).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/ELEPHONE%20A6%20Mini%204GB%20-%2032GB%20-%205.71%20-%20Finger%20Print/ELEPHONE%20a6%20MINI%20(3).jpeg?raw=true"
        description: "Elephone A6 Mini 4GB RAM 32GB ROM Launch Feb-2019, 5.71-inch Display, 16MP+2MP Dual Rear Camera, Get Specs, Price,Compare, Review, Feature.",
        info: "The smartphone is powered by the MediaTek Helio A22 (MT6761) processor.Taking design into consideration, the Elephone A6 Mini comes in three different colors, Black, Blue, and Yellow. The body is made out of Plastic which makes the phone light in weight.The display technology of the smartphone is IPS with a 5.7 inches display screen. The resolution is 720 x 1520 pixels and 295 PPI (pixels per inch).It comes with additional features like Capacitive and Multi-touch. The primary camera is 15.93 megapixels which give an output of 4608 x 3456 pixels with Dual LED flash. The secondary camera has 15.93 megapixels with an output of 4608 x 3456 pixels.The camera comes with 2 MP, Secondary rear camera with Auto-focus, Geotagging, Touch focus, Exposure compensation, Continuous shooting, and Panorama as additional features."
    },
    {
        id:"14",
        category:"Laptop",
        name:"HP 15S-DU3501TU",
        price:170000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%2015S-DU3501TU%20Laptop%2011th%20Gen%20Core%20i5,%208GB,%201TB%20HDD,%20Windows%2010%20(Official%20Warranty)/HP%2015S%20(1).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%2015S-DU3501TU%20Laptop%2011th%20Gen%20Core%20i5,%208GB,%201TB%20HDD,%20Windows%2010%20(Official%20Warranty)/HP%2015S%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%2015S-DU3501TU%20Laptop%2011th%20Gen%20Core%20i5,%208GB,%201TB%20HDD,%20Windows%2010%20(Official%20Warranty)/HP%2015S%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%2015S-DU3501TU%20Laptop%2011th%20Gen%20Core%20i5,%208GB,%201TB%20HDD,%20Windows%2010%20(Official%20Warranty)/HP%2015S%20(4).jpeg?raw=true"
        description: "HP 15S-DU3501TU Laptop 11th Gen Core i5, 8GB, 1TB HDD, Windows 10",
        info: "HP Laptop 15s-du3501tu – Intel Core i5 – 11th Generation – Processor 1135G7 (8 MB L3 CACHE, up to 4.2 GHz) – 8GB RAM – 1TB HDD – Intel Iris Xe Graphics 15.6” HD LED-backlit (250 nits) Display – Windows 10 – Color Silver – 1 Year Local Hp Card Warranty"
    },
    {
        id:"15",
        category:"PC",
        name:"HP Compaq Business dc7900",
        price:70000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Compaq%20Business%20dc7900%20(Core%202%20Duo%20E8500%203.16GHz,%202GB%20RAM,%20160GB%20HDD)/hp%20compaq%20(2).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Compaq%20Business%20dc7900%20(Core%202%20Duo%20E8500%203.16GHz,%202GB%20RAM,%20160GB%20HDD)/hp%20compaq%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Compaq%20Business%20dc7900%20(Core%202%20Duo%20E8500%203.16GHz,%202GB%20RAM,%20160GB%20HDD)/hp%20compaq%20(4).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Compaq%20Business%20dc7900%20(Core%202%20Duo%20E8500%203.16GHz,%202GB%20RAM,%20160GB%20HDD)/hp%20compaq%20(1).jpeg?raw=true"
        description: "HP Compaq Business dc7900 (Core 2 Duo E8500 3.16GHz, 2GB RAM, 160GB HDD)",
        info: "HP Compaq Business Desktop dc7900 series is HP's most stable and secure business PC with professional innovations such as energy efficient technologies and leading remote manageability solutions."
    },
    {
        id:"16",
        category:"Laptop",
        name:"HP EliteBook 840 G3",
        price:185000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20EliteBook%20840%20G3%20-%2014%E2%80%9D%20FHD,%20Intel%20Core%20i5-6300U%202.4Ghz,%206th%20Gen%208GB%20DDR4,%20128GB%20SSD%20+%20500GB%20HDD,%20Windows%2010%2064%20bit/hp%20elite%20(3).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20EliteBook%20840%20G3%20-%2014%E2%80%9D%20FHD,%20Intel%20Core%20i5-6300U%202.4Ghz,%206th%20Gen%208GB%20DDR4,%20128GB%20SSD%20+%20500GB%20HDD,%20Windows%2010%2064%20bit/hp%20elite%20(1).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20EliteBook%20840%20G3%20-%2014%E2%80%9D%20FHD,%20Intel%20Core%20i5-6300U%202.4Ghz,%206th%20Gen%208GB%20DDR4,%20128GB%20SSD%20+%20500GB%20HDD,%20Windows%2010%2064%20bit/hp%20elite%20(2).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20EliteBook%20840%20G3%20-%2014%E2%80%9D%20FHD,%20Intel%20Core%20i5-6300U%202.4Ghz,%206th%20Gen%208GB%20DDR4,%20128GB%20SSD%20+%20500GB%20HDD,%20Windows%2010%2064%20bit/hp%20elite%20(4).jpeg?raw=true"
        description: "HP EliteBook 840 G3 - 14” FHD, Intel Core i5-6300U 2.4Ghz, 6th Gen 8GB DDR4, 128GB SSD + 500GB HDD, Windows 10 64 bit",
        info: "Impressively thin and light, the HP EliteBook 840 empowers users to create, connect, and collaborate, using enterprise-class performance technology that helps keep you productive in and out of the office. It's ideal for mobile professionals needing business rugged notebooks with enhanced system and graphic performance in a managed-IT environment."
    },
    {
        id:"17",
        category:"PC",
        name:"HP ProDesk 600 G2",
        price:38078,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20ProDesk%20600%20G2%20Desktop%20PC,%20Intel%20Core%20i5%206500,%206th%20Generation%203.2Ghz,%208GB%20DDR4%20RAM,%201TB%20Hard%20Drive,%20Windows%2010%20Pro/hp%20prodesk%20(1).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20ProDesk%20600%20G2%20Desktop%20PC,%20Intel%20Core%20i5%206500,%206th%20Generation%203.2Ghz,%208GB%20DDR4%20RAM,%201TB%20Hard%20Drive,%20Windows%2010%20Pro/hp%20prodesk%20(2).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20ProDesk%20600%20G2%20Desktop%20PC,%20Intel%20Core%20i5%206500,%206th%20Generation%203.2Ghz,%208GB%20DDR4%20RAM,%201TB%20Hard%20Drive,%20Windows%2010%20Pro/hp%20prodesk%20(3).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20ProDesk%20600%20G2%20Desktop%20PC,%20Intel%20Core%20i5%206500,%206th%20Generation%203.2Ghz,%208GB%20DDR4%20RAM,%201TB%20Hard%20Drive,%20Windows%2010%20Pro/hp%20prodesk%20(5).jpeg?raw=true"
        description: "HP ProDesk 600 G2 Desktop PC, Intel Core i5 6500, 6th Generation 3.2Ghz, 8GB DDR4 RAM, 1TB Hard Drive, Windows 10 Pro",
        info: "Speedy and responsive to keep pace with your multitasking. Quickly open files and switch applications with less wait time, thanks to a fast hard drive. Power through your day with greater speed and performance. Get the advanced in processing technology with your excellent processor."
    },
    
    {
        id:"18",
        category:"Laptop",
        name:"HP Stream 11 Celeron",
        price:95000,
        photo:"https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Stream%2011%20Celeron%206th%20generation%202gb%2032gb%20with%20128gb%20ssd%20card(BEST%20FOR%20ONLINE%20CLASSES)/hp%20stream%20laptop%20(1).jpeg?raw=true"
        photo1: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Stream%2011%20Celeron%206th%20generation%202gb%2032gb%20with%20128gb%20ssd%20card(BEST%20FOR%20ONLINE%20CLASSES)/hp%20stream%20laptop%20(3).jpeg?raw=true",
        photo2: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Stream%2011%20Celeron%206th%20generation%202gb%2032gb%20with%20128gb%20ssd%20card(BEST%20FOR%20ONLINE%20CLASSES)/hp%20stream%20laptop%20(4).jpeg?raw=true",
        photo3: "https://github.com/AZHARTHEGEEK/ecommercesite/blob/main/product%20images/HP%20Stream%2011%20Celeron%206th%20generation%202gb%2032gb%20with%20128gb%20ssd%20card(BEST%20FOR%20ONLINE%20CLASSES)/hp%20stream%20laptop%20(5).jpeg?raw=true"
        description: "HP Stream 11 Celeron 6th generation 2gb 32gb with 128gb ssd card(BEST FOR ONLINE CLASSES)",
        info: "Between home, school, and work-your mobile life demands a PC that just doesn't quit. With long-lasting battery life, the HP Stream does everything your smartphone can't. Post, play, and stay productive all day with the familiarity of a Windows PC that's affordable, portable, and incredibly stylish."
    },
    {
        id:"19",
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
        id:"20",
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
        id:"21",
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
        id:"22",
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
        id:"23",
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
        id:"24",
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
        id:"25",
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
        id:"26",
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
    


]






]

router.get('/products',(req,res)=>{
    res.json({data})
})


module.exports=router