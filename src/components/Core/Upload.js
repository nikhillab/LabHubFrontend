import React, { Component } from "react";

export default class Upload extends Component {
  state = {
    disabled: [false, false],
    name: null,
    date: null,
    description: null,
    file: null,
    message: null,
  };

  toggalType = (target) => {
    let [state1, state2] = [...this.state.disabled];
    if (target === 0) {
      state2 = true;
      state1 = false;
    }
    if (target === 1) {
      state1 = true;
      state2 = false;
    }

    this.setState({
      disabled: [state1, state2],
    });
  };

  textChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  fileHandler = (event) => {
    const name=event.target.name;
    if(!(name==="file")){
      this.setState({
        [event.target.name]: event.target.value,
      });
    }else{
      console.log(event.target.files[0])
    }
  };
  render() {
    return (
      <div>
        <section id='pricing' className='pricing'>
          <div className='container'>
            <div className='section-title'>
              <h2>Choose what to upload</h2>
            </div>

            <div className='row'>
              <div
                className='col-lg-6 col-md-6'
                onClick={() => this.toggalType(0)}>
                <div
                  className='box'
                  data-aos='zoom-in-right'
                  data-aos-delay='200'>
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
                        onClick={() => this.toggalType(0)}
                        onChange={this.fileHandler}
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
                        onChange={this.fileHandler}
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
                        onChange={this.fileHandler}
                      />
                    </div>
                    <div className='form-group mt-3'>
                      {/**
                       * need changes to get the files
                       */}
                      <label className='form-label'>Select File</label>

                      <input
                        type='file'
                        className='form-control '
                        required
                        name='file'
                        disabled={this.state.disabled[0]}
                        onChange={this.fileHandler}
                      />
                    </div>
                  </div>
                  <div className='btn-wrap'>
                    <a
                      href='#'
                      className='btn-buy'
                      onClick={() => console.log(this.state)}>
                      Upload
                    </a>
                  </div>
                </div>
              </div>

              {/**
               * Text uploader Controller from hear
               */}

              <div
                className='col-lg-6 col-md-6 mt-4 mt-md-0'
                onClick={() => this.toggalType(1)}>
                <div className='box' data-aos='zoom-in' data-aos-delay='100'>
                  <h4>Text</h4>
                  <div className='form-group '>
                    <input
                      type='text'
                      name='name'
                      className='form-control mt-3'
                      placeholder='Enter Assignment Name'
                      required
                      disabled={this.state.disabled[1]}
                      onClick={() => this.toggalType(1)}
                      onChange={this.textChangeHandler}
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
                      onChange={this.textChangeHandler}
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
                      onChange={this.textChangeHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <textarea
                      className='form-control mt-3'
                      name='message'
                      rows='4'
                      placeholder='Enter Your Code Here'
                      required
                      disabled={this.state.disabled[1]}
                      onChange={this.textChangeHandler}></textarea>
                  </div>
                  <div className='btn-wrap'>
                    <a
                      href='#'
                      className='btn-buy'
                      onClick={() => console.log(this.state)}>
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
