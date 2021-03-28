import React from "react";
import classes from "./App.css";
import LabHubComponent from './components/LabHubComponent'

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div className={classes.main}>
        <LabHubComponent/>
    </div>
  );
}

export default App;
