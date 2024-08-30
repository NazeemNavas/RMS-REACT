import React from 'react'

function Landing() {
  return (
    <div>
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
  <div className="wrapper">
    <section className="container-fluid bg-circle-login" id="auth-sign">
      <div className="row align-items-center">
        <div className="col-md-12 col-lg-7 col-xl-4">
          <div className="card-body">
            <a href="../dashboard/">
              <img src="../assets/images/favicon.png" className="img-fluid logo-img" alt="img4" />
            </a>
            <h2 className="mb-2 text-center">Sign In</h2>
            <p className="text-center">Sign in to stay connected.</p>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select className="form-control form-control-sm" aria-label="role" aria-describedby="role">
                      <option selected value={1}>Super Admin</option>
                      <option value={2}>Company Admin</option>
                      <option value={3}>Kitchen Admin</option>
                      <option value={4}>Outlet Admin</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control form-control-sm" id="email" aria-describedby="email" placeholder=" " />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control form-control-sm" id="password" aria-describedby="password" placeholder=" " />
                  </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-between">
                  <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                    <label className="form-check-label" htmlFor="customCheck1">Remember Me</label>
                  </div>
                  <a href="./auth/recoverpw.html">Forgot Password?</a>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Sign In</button>
              </div>
              {/* <p class="text-center my-3">or sign in with other accounts?</p>
                        <div class="d-flex justify-content-center">
                           <ul class="list-group list-group-horizontal list-group-flush">
                              <li class="list-group-item border-0 pb-0">
                                 <a href="#"><img src="../assets/images/brands/fb.svg" alt="fb"></a>
                              </li>
                              <li class="list-group-item border-0 pb-0">
                                 <a href="#"><img src="../assets/images/brands/gm.svg" alt="gm"></a>
                              </li>
                              <li class="list-group-item border-0 pb-0">
                                 <a href="#"><img src="../assets/images/brands/im.svg" alt="im"></a>
                              </li>
                              <li class="list-group-item border-0 pb-0">
                                 <a href="#"><img src="../assets/images/brands/li.svg" alt="li"></a>
                              </li>
                           </ul>
                        </div> */}
              {/* <p class="mt-3 text-center">
                           Don’t have an account? <a href="./auth/sign-up.html" class="text-underline">Click here to sign up.</a>
                        </p> */}
            </form>
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

    </div>
  )
}

export default Landing
