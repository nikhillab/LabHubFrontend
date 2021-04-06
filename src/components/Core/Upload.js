import React, { Component } from "react";
import moment from "moment";
import AssignmentService from "../api/AssignmentService";

export default class Upload extends Component {
  state = {
    disabled: [false, false],
    name: null,
    date: null,
    description: null,
    file: null,
    code: null,
    errorMessage: "",
    error: false,
  };

  render() {
    return (
      <div>
        <section id='pricing' className='pricing'>
          <div className='container'>
            <div className='section-title'>
              <h2>Choose what to upload</h2>
            </div>
            {this.state.error && (
              <p className='alert alert-warning'>{this.state.errorMessage} </p>
            )}
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
                    <div className='form-group mt-3'>
                      <input
                        type='text'
                        name='name'
                        className='form-control '
                        placeholder='Enter Assignment Name'
                        required
                        disabled={this.state.disabled[0]}
                        onClick={() => this.toggalType(0)}
                        onChange={this.fileHandler}
                      />
                    </div>
                    <div className='form-group  mt-3'>
                      <label className='form-label'>Choose Last Date </label>

                      <input
                        type='date'
                        className='form-control'
                        name='date'
                        required
                        disabled={this.state.disabled[0]}
                        onChange={this.fileHandler}
                      />
                    </div>
                    <div className='form-group mt-3'>
                      <input
                        type='text'
                        className='form-control '
                        name='description'
                        placeholder='Description About Assignment'
                        required
                        disabled={this.state.disabled[0]}
                        onChange={this.fileHandler}
                      />
                    </div>
                    <div className='form-group mt-3'>
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
                    <button
                      name='filebtn'
                      className='btn-buy'
                      onClick={this.submitHandler}>
                      Upload
                    </button>
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
                  <div className='form-group mt-3'>
                    <input
                      type='text'
                      name='name'
                      className='form-control '
                      placeholder='Enter Assignment Name'
                      required
                      disabled={this.state.disabled[1]}
                      onClick={() => this.toggalType(1)}
                      onChange={this.textChangeHandler}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <label className='form-label'>Choose Last Date </label>
                    <input
                      type='date'
                      className='form-control '
                      name='date'
                      required
                      disabled={this.state.disabled[1]}
                      onChange={this.textChangeHandler}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <input
                      type='text'
                      className='form-control '
                      name='description'
                      placeholder='Description About Assignment'
                      required
                      disabled={this.state.disabled[1]}
                      onChange={this.textChangeHandler}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <textarea
                      className='form-control '
                      name='code'
                      rows='4'
                      placeholder='Enter Your Code Here'
                      required
                      disabled={this.state.disabled[1]}
                      onChange={this.textChangeHandler}></textarea>
                  </div>
                  <div className='btn-wrap'>
                    <button
                      name='textbtn'
                      className='btn-buy'
                      onClick={this.submitHandler}>
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  //for toggling the input forms
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

  //Handel the changes for text data to upload
  textChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //Handle the changes for file data upload
  fileHandler = (event) => {
    const name = event.target.name;
    if (!(name === "file")) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.files[0],
      });
    }
  };

  //Handel the submit btn and send data to server
  submitHandler = (event) => {
    const submitType = event.target.name;
    if (!this.validateForm(submitType)) {
      console.log("some error");
      this.setState({
        error: true,
        errorMessage: "Enter the details correctly",
      });
      return;
    }
    this.setState({
      error: false,
    });
    //get the valid object and send it to server
    //for file upload take special care 
    const data=this.getValidObject(submitType)
    console.log(data)
    AssignmentService.createFileAssignment(data)

  };

  //return the type of object to send to the server to save
  getValidObject = (submitType) => {

    if (submitType === "textbtn") {
      const data ={
        name:this.state.name,
        description:this.state.description,
        targetDate:this.state.date,
        code:this.state.code
      }
      return data;
    }
    else if (submitType === "filebtn"){
      const data ={
        name:this.state.name,
        description:this.state.description,
        targetDate:this.state.date,
        fileResponse:this.state.file.name
      }
      return data;
    }
  };

  //To validate the form data
  validateForm = (submitType) => {
    /**
    name: null,
    date: null,
    description: null,
    file: null,
    code: null,
     */
    const data = { ...this.state };
    if (submitType === "textbtn") {
      if (
        data.name == null ||
        data.description == null ||
        data.code == null ||
        !moment(data.date).isValid()
      ) {
        return false;
      }
    } else if (submitType === "filebtn") {
      if (
        data.name == null ||
        data.description == null ||
        data.file == null ||
        !moment(data.date).isValid()
      ) {
        return false;
      }
    }
    return true;
  };
}
