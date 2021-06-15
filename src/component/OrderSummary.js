
import React, { useEffect, useState } from 'react';

import Menu from './Menu';


const OrderSummary = () => {
    let [data,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/myorders',{
            method:"Get",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(res => res.json())
        .then(({mypost}) => setData(mypost))
        .catch(err => console.log(err))
    },[])
//    console.log(data)




  return (
      <>
      <Menu />
      <div className="container" style={{marginTop:"60px"}}>
          <h4>Your Orders</h4>
          <hr />
          {/* <br /> */}
          <div>
          <div style={{display:"flex",marginBottom:"30px"}}>
              <div>
                  <img width="200" height="150" src="https://www.cnet.com/a/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg" />
              </div>
              <div style={{display:"flex",flexDirection:"column",marginLeft:"70px",marginTop:"20px"}}>
                  <div>
                      <span className="text-muted" style={{fontSize:"15px"}}>Status</span>
                      <span className="ml-4" style={{color:"#758696",marginLeft:"200px"}}>Not Processed</span>
                  </div>
                  <div>
                      <span className="text-muted" style={{fontSize:"15px"}}>Order #</span>
                      <span className="ml-4" style={{color:"#758696"}}></span>
                  </div>
                  <div>
                      <span className="text-muted" style={{fontSize:"15px"}}>Quantity</span>
                      <span className="ml-4" style={{color:"#758696"}}></span>
                  </div>
                  <div>
                      <span className="text-muted" style={{fontSize:"15px"}}>Order on</span>
                      <span className="ml-4" style={{color:"#758696"}}></span>
                  </div>

                  <div>

                      <span className="text-muted" style={{fontSize:"15px"}}>Order Total</span>
                      <span className="ml-4" style={{color:"#758696"}}></span>
                  </div>
              </div>
          </div>
          
       
          
          </div>
      </div>

      </>
      

   
  );
};
export default OrderSummary;