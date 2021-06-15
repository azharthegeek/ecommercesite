import React from 'react';
import { Link } from 'react-router-dom';

const Category=()=>{
    return(
        <>
          <div  class="container" >


<nav  class="navbar navbar-expand-lg navbar-light  mt-3 mb-5" style={{backgroundColor:"#929fba",color:"#fff"}}>

   
    <span class="navbar-brand">Categories:</span>

   
    <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon" ></span>
</button>

    
    <div class="collapse navbar-collapse" id="basicExampleNav">

    
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link class="nav-link" to="/" >All
    <span class="sr-only">(current)</span>
  </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/laptop">Laptop</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/computer">PC</Link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Phone</a>
            </li>

        </ul>
       

        <form class="form-inline">
            <div class="md-form my-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </div>
        </form>
    </div>
  

</nav>
</div>

        </>
    )
}

export default Category;