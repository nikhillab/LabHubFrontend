import React from "react";
import { Link } from "react-router-dom";
import Hero from './assets/hero-img.png'
import Count from './assets/counts-img.svg'
const HomePage = (props) => {
  return (
    <div>
      <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
              <h1 data-aos='fade-up'>Ease your assignments with LabHub</h1>
              <h2 data-aos='fade-up' data-aos-delay='400'>
                We made this for all to manage your Lab Works
              </h2>
              <div data-aos='fade-up' data-aos-delay='800'>
                <Link to='/login' className='btn-get-started scrollto'>
                  Get Started
                </Link>
              </div>
            </div>
            <div
              className='col-lg-6 order-1 order-lg-2 hero-img'
              data-aos='fade-left'
              data-aos-delay='200'>
              <img
                src={Hero}
                className='img-fluid animated'
                alt=' hero-img.png'
              />
            </div>
          </div>
        </div>
      </section>
      <section id='counts' className='counts'>
        <div className='container'>
          <div className='row'>
            <div
              className='image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start'
              data-aos='fade-right'
              data-aos-delay='150'>
              <img
                src={Count}
                alt='counts-img.svg'
                className='img-fluid'
              />
            </div>

            <div
              className='col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0'
              data-aos='fade-left'
              data-aos-delay='300'>
              <div className='content d-flex flex-column justify-content-center'>
                <div className='row'>
                  <div className='col-md-6 d-md-flex align-items-md-stretch'>
                    <div className='count-box'>
                      <i className='bi bi-emoji-smile'></i>
                      <span
                        data-purecounter-start='0'
                        data-purecounter-end='65'
                        data-purecounter-duration='1'
                        className='purecounter'></span>
                      <p>
                        <strong>Happy Clients</strong> consequuntur voluptas
                        nostrum aliquid ipsam architecto ut.
                      </p>
                    </div>
                  </div>

                  <div className='col-md-6 d-md-flex align-items-md-stretch'>
                    <div className='count-box'>
                      <i className='bi bi-journal-richtext'></i>
                      <span
                        data-purecounter-start='0'
                        data-purecounter-end='85'
                        data-purecounter-duration='1'
                        className='purecounter'></span>
                      <p>
                        <strong>Projects</strong> adipisci atque cum quia
                        aspernatur totam laudantium et quia dere tan
                      </p>
                    </div>
                  </div>

                  <div className='col-md-6 d-md-flex align-items-md-stretch'>
                    <div className='count-box'>
                      <i className='bi bi-clock'></i>
                      <span
                        data-purecounter-start='0'
                        data-purecounter-end='18'
                        data-purecounter-duration='1'
                        className='purecounter'></span>
                      <p>
                        <strong>Years of experience</strong> aut commodi quaerat
                        modi aliquam nam ducimus aut voluptate non vel
                      </p>
                    </div>
                  </div>

                  <div className='col-md-6 d-md-flex align-items-md-stretch'>
                    <div className='count-box'>
                      <i className='bi bi-award'></i>
                      <span
                        data-purecounter-start='0'
                        data-purecounter-end='15'
                        data-purecounter-duration='1'
                        className='purecounter'></span>
                      <p>
                        <strong>Awards</strong> rerum asperiores dolor alias quo
                        reprehenderit eum et nemo pad der
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
