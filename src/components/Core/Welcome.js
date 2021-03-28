import React from "react";
import { Link } from "react-router-dom";
const Welcome = (props) => {
  return (
    <div className='container'>
      <section id='services' className='services'>
        <h1>Welcome! {props.match.params.name}</h1>
        You can manage your assignments here
        <p>
          <Link to='/upload'>Click Here to Upload</Link>
        </p>
        <div className='section-title' data-aos='fade-up'>
          <h2>Assignments</h2>
          <p>All your assignments </p>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'>
            <div className='icon-box' data-aos='fade-up' data-aos-delay='100'>
              <div className='icon'>
                <i className='bx bxl-dribbble'></i>
              </div>
              <h4 className='title'>
                <a href=''>Lorem Ipsum</a>
              </h4>
              <p className='description'>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'>
            <div className='icon-box' data-aos='fade-up' data-aos-delay='200'>
              <div className='icon'>
                <i className='bx bx-file'></i>
              </div>
              <h4 className='title'>
                <a href=''>Sed ut perspiciatis</a>
              </h4>
              <p className='description'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'>
            <div className='icon-box' data-aos='fade-up' data-aos-delay='300'>
              <div className='icon'>
                <i className='bx bx-tachometer'></i>
              </div>
              <h4 className='title'>
                <a href=''>Magni Dolores</a>
              </h4>
              <p className='description'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'>
            <div className='icon-box' data-aos='fade-up' data-aos-delay='400'>
              <div className='icon'>
                <i className='bx bx-world'></i>
              </div>
              <h4 className='title'>
                <a href=''>Nemo Enim</a>
              </h4>
              <p className='description'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
