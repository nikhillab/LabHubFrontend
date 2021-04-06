class AuthenticationService {
  registerSuccessfullLogin(username, password) {
    // console.log(username, password);
    sessionStorage.setItem("authenticatedUser", username);
    // console.log("register Successfull");
    // this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }
  logout() {
    // console.log(sessionStorage.getItem("authenticatedUser"));
    sessionStorage.removeItem("authenticatedUser");
    // console.log("logout Successfull");
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
}

export default new AuthenticationService();
