import React from "react";
import { Link } from "react-router-dom";

const LogoutComponent = (props) => {
  return (
    <>
      <h1>You are logged out</h1>
      <div className='container'>Thank You for Using Our Application.</div>
      <p><Link to='/login' >Click Here to Login</Link></p>
    </>
  );
};

export default LogoutComponent;
