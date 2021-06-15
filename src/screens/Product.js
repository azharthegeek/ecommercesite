import React , {useContext} from 'react';

import first from '../component/images/11.jpg'
import second from '../component/images/22.jpg'
import third from '../component/images/33.jpg'
import Menu from '../component/Menu';
import Footer from '../component/Footer'
import { useHistory } from 'react-router';
import {CardContext} from '../context/CardContext';
const Product=()=>{
    let {dispatch}=useContext(CardContext)
    
    let history=useHistory()
    const state=history.location.state
    console.log(state)
    
    return(
        <>
        <Menu />
      <div class="mt-5 pt-4">
        <div class="container dark-grey-text mt-5">

            {/* <!--Grid row--> */}
            <div class="row wow fadeIn">

                

{/* <!--Grid column--> */}
                
<div class="col-md-6 mb-4">

                    <img src={state.photo} class="img-fluid" alt="" />

                </div>
                {/* <!--Grid column--> */}
                
                {/* <!--Grid column--> */}
                <div class="col-md-6 mb-4">

                    {/* <!--Content--> */}
                    <div class="p-4">

                        <div class="mb-3">
                            <a href="">
                                <span class="badge purple mr-1" style={{backgroundColor:"purple",color:"#fff"}}>Category 2</span>
                            </a>
                            <a href="">
                                <span class="badge blue mr-1" style={{backgroundColor:"blue",color:"#fff"}} >New</span>
                            </a>
                            <a href="">
                                <span class="badge red mr-1" style={{backgroundColor:"red",color:"#fff"}}>Bestseller</span>
                            </a>
                        </div>

                        <p class="lead">
                            <span class="mr-1">
                <del>Rs 300,000</del>
              </span>
                            <span>Rs {state.price}</span>
                        </p>

                        <p class="lead font-weight-bold">Description of {state.id}</p>

                        <p>iPhone 12 Pro Max standing as the larger of the two pro-level models. This device has a bigger 6.7-inch Super Retina XDR display compared to the iPhone 11 Pro Max. It also has a triple-camera system and LiDAR</p>

                        <div class="d-flex justify-content-left"  onClick={()=> dispatch({
                            type:"ADD TO CART",
                           payload:{
                            id:state.id,
                            product:state
                           }
                        })} >
                            {/* <!-- Default input --> */}
                            
                            <button style={{width:"500px"}} class="btn btn-primary btn-md my-0 p ml-0 mt-2"   >Add to cart
                <i class="fas fa-shopping-cart ml-1"></i>
              </button>

                        </div>

                    </div>
                    

                </div>
                
                
                </div>
                
                </div>
                
                </div>
                <div class="container">
              <hr />

          </div>

<div class="row d-flex justify-content-center wow fadeIn">


<div class="col-md-6 text-center">

    <h4 class="my-4 h4">Additional information</h4>

    <p> The phone is powered by the new Apple A14 Bionic processor. The smartphone comes with a 6.7 inches Super Retina XDR OLED capacitive touchscreen, 2778 x 1284 pixels resolution and HDR display, True Tone and Wide color (P3) gamut.</p>

</div>


</div>



<div class="row wow fadeIn">


<div class="col-lg-4 col-md-12 mb-4">

    <img src={first} class="img-fluid" alt="" />

</div>


<div class="col-lg-6 col-md-6 mb-4 text-center">

    <img src={second} class="img-fluid" alt="" width="300" height="200" />

</div>



<div class="col-lg-6 col-md-6 mb-4">

    <img src={third} class="img-fluid" width="300" height="300" alt="" />

</div>


</div>


<Footer />

</>
)
}

export default Product;