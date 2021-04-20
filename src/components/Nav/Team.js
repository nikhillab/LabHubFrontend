import React from "react";
import Nikhil from "../Core/assets/nikhil1.jpeg"

export default function Team() {
  return (
    <section id='team' className='team section-bg'>
      <div className='container'>
        <div className='section-title' data-aos='fade-up'>
          <h2>Team Members </h2>
          {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p> */}
        </div>

        <div className='row'>
          <div className='col-lg-6 col-md-6 d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='100'>
              <div className='member-img'>
                <img
                  src={Nikhil}
                  className='img-fluid'
                  alt='nikhil'
                  height="250"
                  width="300"
                />
                <div className='social'>
                  <a href=''>
                    <i className='bi bi-twitter'></i>
                  </a>
                  <a href=''>
                    <i className='bi bi-facebook'></i>
                  </a>
                  <a href=''>
                    <i className='bi bi-instagram'></i>
                  </a>
                  <a href=''>
                    <i className='bi bi-linkedin'></i>
                  </a>
                </div>
              </div>
              <div className='member-info'>
                <h4>Nikhil Kumar</h4>
                <span>Team Lead </span>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-6 d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up' data-aos-delay='200'>
              <div className='member-img'>
                <img
                  src={Nikhil}
                  className='img-fluid'
                  alt='nikhil'
                  height="250"
                  width="300"
                />
                <div className='social'>
                  <a href=''>
                    <i className='bi bi-twitter'></i>
                  </a>
                  <a href=''>
                    <i className='bi bi-facebook'></i>
                  </a>
                  <a href=''>
                    <i className='bi bi-instagram'></i>
                  </a>
                  <a href=''>
                    <i className='bi bi-linkedin'></i>
                  </a>
                </div>
              </div>
              <div className='member-info'>
                <h4>Monalisha Seth</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
