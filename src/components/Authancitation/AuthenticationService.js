class AuthenticationService {
  registerSuccessfullLogin(username, password) {
    sessionStorage.setItem("authenticatedUser", username);
  }
  logout() {
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
}

export default new AuthenticationService();
