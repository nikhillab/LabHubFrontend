import axios from "axios";

class AuthenticationService {

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  executeBasicAuthenticationService(username, password) {
    return axios.get(`http://localhost:8080/basicauth`, {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }

  registerSuccessfullLogin(username, password) {
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  logout() {
    console.log("reset basic auth");
    sessionStorage.removeItem("authenticatedUser");

  }

  isUserLogin() {
    let user = sessionStorage.getItem("authenticatedUser");
    // console.log(user);
    //update at last after testing everything
    if (user === null) {
      return false;
    }
    return true;
  }

  getLoggedInUser() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return null;
    }
    return user;
  }
  setupAxiosInterceptors(basicAuthHeader) {
    console.log("inside inceptor")
    console.log(basicAuthHeader)
    //"Basic " + window.btoa("nikhil" + ":" + "nikhil")
    axios.interceptors.request.use((config) => {
      if (this.isUserLogin()) {
        config.headers.authorization =basicAuthHeader ;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
