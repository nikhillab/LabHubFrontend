import { React, Component } from "react";
import AuthenticationService from "../Authancitation/AuthenticationService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginFail: false,
      showMsg: false,
      loginFailMsg: "",
    };
  }
  render() { 
    return (
      <div>
        <section id='contact' className='contact'>
          <div className='container'>
            <div className='section-title' data-aos='fade-up'>
              <h2>Please Login</h2>
            </div>

            <div className='row ms-5'>
              <div
                className='col-lg-5 col-md-12'
                data-aos='fade-up'
                data-aos-delay='300'>
                <div className='php-email-form'>
                  <div className='form-group'>
                    <input
                      className='form-control rounded-3'
                      type='text'
                      name='username'
                      placeholder=' Enter  Username'
                      value={this.state.username}
                      onChange={this.handelChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control rounded-3'
                      type='password'
                      name='password'
                      placeholder=' Enter  Password'
                      value={this.state.password}
                      onChange={this.handelChange}
                      required
                    />
                  </div>

                  <div className='my-3'>
                    <div className='loading'>Loading</div>
                    <div className='error-message'></div>
                    <div className='sent-message'>
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className='text-center'>
                    <button type='submit' onClick={this.loginClicked}>
                      Login
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

  handelChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginClicked = () => {
    console.log("clicked login");
    if (this.state.username === "" && this.state.password === "") {
      console.log("Inside if");
      this.setState({
        loginFail: true,
        loginFailMsg: "Please Enter Valid UserName and Password",
      });
    } else {
      AuthenticationService.registerSuccessfullLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
    }
  };
}

export default Login;
