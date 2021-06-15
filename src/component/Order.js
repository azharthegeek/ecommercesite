import React from 'react';
import Menu from '../component/Menu';
import Slider from '../component/Slider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Button} from '@material-ui/core'
import Footer from './Footer';
import { useHistory } from 'react-router';

const Order=()=>{
    let history=useHistory()
    return(
        <>
        <Menu />
        
        <div className="text-center" style={{marginTop:"100px"}}>
            <CheckCircleIcon style={{fontSize:"100px",color:"green"}} />
        </div>
        <div className="text-center mt-2">
            <h6>Thank You For Your Order.</h6>
            <h6 className="text-muted">Order  # <span className="text-dark">60c5c64d352700000434c791</span> is complete.</h6>
            <h6 className="text-muted">A confirmation email will be sent to you shortly.</h6>
        </div>
        <div className="text-center mt-5 mb-5">
            <span className="ml-2"  >

            <Button className="text-dark p-2 pl-4 pr-4 "  variant="outlined" style={{fontSize:"12px",textTransform:"capitalize"}} >Manage Orders</Button>
            </span>
            <span className="ml-3" onClick={()=>{history.push('/')}}>

            <Button className="text-dark p-2 pl-4 pr-4  " variant="outlined" style={{fontSize:"12px",textTransform:"capitalize"}} >Continue Shopping</Button>
            </span>
        </div>
<div style={{marginTop:"300px"}}>
        <div style={{marginTop:"50px"}}>

        <Footer />
        </div>
</div>
        </>
    )
}

export default Order;