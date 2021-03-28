import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import AuthenticationService from "../Authancitation/AuthenticationService";

const Header = (props) => {
  const isUserLoggedIn = AuthenticationService.isUserLogin();

  return (
    // <header>
    //   <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
    //     <div>
    //       <Link to="/" className='navbar-brand'>
    //         LabHub
    //       </Link>
    //     </div>
    //     <ul className='navbar-nav'>
    //       {isUserLoggedIn && (
    //         <li>
    //           <Link className='nav-link' to='/'>
    //             Home
    //           </Link>
    //         </li>
    //       )}
    //       {isUserLoggedIn && (
    //         <li>
    //           <Link className='nav-link' to='/todos'>
    //             Assignment
    //           </Link>
    //         </li>
    //       )}
    //     </ul>
    //     <ul className='navbar-nav navbar-collapse justify-content-end'>
    //       {!isUserLoggedIn && (
    //         <li>
    //           <Link className='nav-link' to='/login'>
    //             Login
    //           </Link>
    //         </li>
    //       )}
    //       {isUserLoggedIn && (
    //         <li>
    //           <Link className='nav-link' to='/logout' onClick={AuthenticationService.logout}>
    //             Logout
    //           </Link>
    //         </li>
    //       )}
    //     </ul>
    //   </nav>
    // </header>
    <div>
      <header id='header' className=' d-flex align-items-center'>
        <div className='container d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <h1>
              <Link to='/'>LabHub</Link>
            </h1>

            {/* to add logo of website
         <a to="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}
          </div>

          <nav id='navbar' className='navbar'>
            <ul>
              {isUserLoggedIn && (
                <li>
                  <Link className='nav-link scrollto' to='/'>
                    Home
                  </Link>
                </li>
              )}
              <li>
                <Link className='nav-link scrollto' to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link className='nav-link scrollto' to='/services'>
                  Services
                </Link>
              </li>

              <li>
                <Link className='nav-link scrollto' to='/team'>
                  Team
                </Link>
              </li>
              <li>
                <Link className='nav-link scrollto' to='/contact'>
                  Contact
                </Link>
              </li>
              {!isUserLoggedIn && (
                <li>
                  <Link className='getstarted scrollto' to='/login'>
                    Login
                  </Link>
                </li>
              )}
              {isUserLoggedIn && (
                <li>
                  <Link
                    className='getstarted scrollto'
                    to='/logout'
                    onClick={AuthenticationService.logout}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
            <i className='bi bi-list mobile-nav-toggle'></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default withRouter(Header);
