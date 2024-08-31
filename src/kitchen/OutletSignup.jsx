import React from 'react'
import { Link } from 'react-router-dom'

function OutletSignup() {
  return (
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Aprycot | Responsive Bootstrap 5 Admin Dashboard Template</title>
    {/* Favicon */}
    <link rel="shortcut icon" href="../assets/images/favicon.ico" />
    {/* Library / Plugin Css Build */}
    <link rel="stylesheet" href="../assets/css/core/libs.min.css" />
    {/* Custom Css */}
    <link rel="stylesheet" href="../assets/css/aprycot.min.css?v=1.0.0" /> 
    {/* loader Start */}
    {/* loader END */}
    <div className="wrapper">
      <section className="container-fluid bg-circle-login">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-7 col-xl-4">    
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/kitchen">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Outlet Signup</li>
              </ol>
            </nav>
            <div className="d-flex justify-content-center mb-0">
              <div className="card-body ">
                {/* <a href="../dashboard/"> */}
                <img src="../assets/images/favicon.png" className="img-fluid logo-img" alt="img5" />
                {/* </a> */}
                <h2 className="mb-2 text-center">Sign Up</h2>
                <p className="text-center">Create your Outlet account.</p>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="kitchen-name" className="form-label">Outlet Name</label>
                        <input type="text" className="form-control form-control-sm" id="kitchen-name" placeholder=" " />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control form-control-sm" id="email" placeholder=" " />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control form-control-sm" id="password" placeholder=" " />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                        <input type="text" className="form-control form-control-sm" id="confirm-password" placeholder=" " />
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                      <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                        <label className="form-check-label" htmlFor="customCheck1">I agree with the terms of use</label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>          
          </div>  
          <div className="col-md-12 col-lg-5 col-xl-8 d-lg-block d-none vh-100 overflow-hidden">
            <img src="../assets/images/auth/09.png" className="img-fluid sign-in-img" alt="images" />
          </div>
        </div>
      </section>
    </div>
    {/* Required Library Bundle Script */}
    {/* External Library Bundle Script */}
    {/* Mapchart JavaScript */}
    {/* fslightbox JavaScript */}
    {/* app JavaScript */}
    {/* moment JavaScript */}
  </div>
  
  )
}

export default OutletSignup