import React from "react";
import Header from "./Nav/Header";
import Footer from "./Nav/Footer";
import Login from "./Login/Login";
import { Switch, Route } from "react-router";
import ErrorComponent from "./Nav/Error";
import LogoutComponent from "../components/Login/LogoutComponent";
import AuthenticatedRoute from "../components/Authancitation/AuthenticatedRoute";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Core/HomePage";
import Contact from "./Nav/Contact";
import AboutUs from "./Nav/AboutUs";
import Welcome from "./Core/Welcome";
import Team from "./Nav/Team";
import Upload from "./Core/Upload";
import Assignment from "./Core/Assignment";

const LabHubComponent = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/login' component={Login} />
            <Route path='/about' component={AboutUs} />
            <Route path='/contact' component={Contact} />
            <Route path='/team' component={Team} />
            <AuthenticatedRoute path='/welcome/:name' component={Welcome} />
            <AuthenticatedRoute path='/assignment/:type/:id' component={Assignment} />
            <AuthenticatedRoute path='/upload' component={Upload} />
            <AuthenticatedRoute path='/logout' component={LogoutComponent} />

            <Route component={ErrorComponent} />
          </Switch>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default LabHubComponent;
