import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          <div className='col-lg-6 text-lg-left text-center'>
            <div className='copyright'>
              &copy; Copyright <strong>@LABHUB</strong>. All Rights Reserved
            </div>
            <div className='credits'>Designed by NM</div>
          </div>
          <div className='col-lg-6'>
            <nav className='footer-links text-lg-right text-center pt-2 pt-lg-0'>
              <Link to='/' className='scrollto'>
                Home
              </Link>
              <Link to='/about' className='scrollto'>
                About
              </Link>
              <Link to='#'>Privacy Policy</Link>
              <Link to='#'>Terms of Use</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
