import React, { useContext } from 'react';
import {Navbar , Nav  , Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CustomizedMenus from './Dropdown';
import { CardContext } from '../context/CardContext';

const Menu=()=>{
  const {qty}=useContext(CardContext)
  let a=JSON.parse(localStorage.getItem("User"))
    return(
        <>
   <Navbar fixed="top" bg="white" variant="light" expand="lg" style={{backgroundColor:"#212529"}}>
  <Container>
    <Navbar.Brand  style={{color:"#2196f3"}}><Link to="/">Tech Shoor Store</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="ml-auto">
      
   

        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
        <div style={{display:"flex"}}>
         <div>
        <Nav.Link >
          <Link to="/cart">
        <span style={{backgroundColor:"red",padding:"2px",color:"#fff",marginLeft:"2px"}} ><span class="text-center" > {qty} </span > </span>
         <i class="fas fa-shopping-cart"></i>
        <span class="clearfix d-none d-sm-inline-block"> Cart </span>
          </Link>
        </Nav.Link>
      
        </div> 
        </div>
       
         
  
        <Nav.Link style={{marginTop:"-5px"}}>
         {
           a ? 
           <Chip size="medium" avatar={<Avatar style={{ backgroundColor: "blue" }}><span style={{ color: "#fff", fontWeight: "bolder", fontSize: "16px" }}>{(a!== "null") ? a.name.slice(0,1).toUpperCase() : <div></div> }</span></Avatar>} label={ <CustomizedMenus /> } />
           :<div>

           <Link to="/login" style={{marginTop:"-50px"}}>Login/Signup</Link>
           </div>
         } 
      
      </Nav.Link>
      
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<br />
        </>
    )
}

export default Menu;