import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import AuthenticationService from "../Authancitation/AuthenticationService";

const Header = (props) => {
  const isUserLoggedIn = AuthenticationService.isUserLogin();

  return (
    <div>
      <header id='header' className=' d-flex align-items-center'>
        <div className='container d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <h1>
              <Link to='/'>LabHub</Link>
            </h1>
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
              {isUserLoggedIn && (
                <li>
                  <Link className='nav-link scrollto' to={`/welcome/${AuthenticationService.getLoggedInUser()}`}>
                    Welcome
                  </Link>
                </li>
              )}
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
