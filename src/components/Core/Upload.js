import React, { Component } from "react";

export default class Upload extends Component {
  state = {
    disabled: [false, false],
  };
  render() {
    return (
      <div>
        <section id='pricing' class='pricing'>
          <div class='container'>
            <div class='section-title'>
              <h2>Choose what to upload</h2>
            </div>

            <div class='row'>
              <div class='col-lg-6 col-md-6'>
                <div class='box' data-aos='zoom-in-right' data-aos-delay='200'>
                  <h4>File</h4>
                  <div>
                    <div className='form-group '>
                      <input
                        type='text'
                        name='name'
                        className='form-control mt-3'
                        placeholder='Enter Assignment Name'
                        required
                        disabled={this.state.disabled[0]}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='date'
                        className='form-control mt-3'
                        name='date'
                        placeholder='Enter Due Date'
                        required
                        disabled={this.state.disabled[0]}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control mt-3'
                        name='description'
                        placeholder='Description About Assignment'
                        required
                        disabled={this.state.disabled[0]}
                      />
                    </div>
                    <div className='form-group mt-3'>
                      {/**
                       * need changes to get the files
                       */}
                      <label for='formFile' class='form-label'>
                        Select File
                      </label>

                      <input
                        type='file'
                        className='form-control '
                        required
                        disabled={this.state.disabled[0]}
                      />
                    </div>
                  </div>
                  <div class='btn-wrap'>
                    <a href='#' class='btn-buy'>
                      Upload
                    </a>
                  </div>
                </div>
              </div>
              {/**
               * Text uploader Controller from hear
               */}
              <div class='col-lg-6 col-md-6 mt-4 mt-md-0'>
                <div class='box' data-aos='zoom-in' data-aos-delay='100'>
                  <h4>Text</h4>
                  <div className='form-group '>
                    <input
                      type='text'
                      name='name'
                      className='form-control mt-3'
                      placeholder='Enter Assignment Name'
                      required
                      disabled={this.state.disabled[1]}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='date'
                      className='form-control mt-3'
                      name='date'
                      placeholder='Enter Due Date'
                      required
                      disabled={this.state.disabled[1]}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control mt-3'
                      name='description'
                      placeholder='Description About Assignment'
                      required
                      disabled={this.state.disabled[1]}
                    />
                  </div>
                  <div className='form-group'>
                    <textarea
                      className='form-control mt-3'
                      name='message'
                      rows='4'
                      placeholder='Enter Your Code Here'
                      required
                      disabled={this.state.disabled[1]}></textarea>
                  </div>
                  <div class='btn-wrap'>
                    <a href='#' class='btn-buy'>
                      Upload
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
