import React from 'react';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import Cover from '../images/cover.png'

const About=()=>{
    return(
        <>
        <Menu />
        <br />
    <div class="contact3 py-5">
  <div class="row no-gutters">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card-shadow">
            <img src={Cover} />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-box ml-3">
            <h1 class="font-weight-light mt-2">Quick Contact</h1>
            <form class="mt-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input style={{fontSize:"14px"}} class="form-control" type="text" placeholder="name" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input style={{fontSize:"14px"}} class="form-control" type="email" placeholder="email address" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" style={{fontSize:"14px"}} type="text" placeholder="phone" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea class="form-control" rows="3" style={{fontSize:"14px"}} placeholder="message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card mt-4 border-0 mb-4">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail pl-0">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Address</h6>
                    <p class="">71/1 Nazimabad Phase 1
                      <br /> Karachi Pakistan.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Phone</h6>
                    <p class="">+92 301 000 1547
                      <br /> +92 312 000 1547</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                  </div>
                  <div>
                    <h6 class="font-weight-medium">Email</h6>
                    <p class="">
                      info@techshoor.com
                      <br /> techshoor@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<Footer />
        </>
    )
}

export default About;