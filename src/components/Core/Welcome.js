import React, { useState } from "react";
import { Link } from "react-router-dom";
import AssignmentService from "../api/AssignmentService";
import AssignmentList from "./AssignmentList";
import AuthenticationService from '../Authancitation/AuthenticationService' 

const Welcome = (props) => {
  const [textAssignment, setTextAssignment] = useState([]);
  const [fileAssignment, setFileAssignment] = useState([]);
  const [showAssignments, setshowAssignments] = useState([false, false]);
  const [error, setError] = useState([false, "No Error"]);

  const retriveTextAssignment = () => {
    console.log("called retriveTextAssignment");
    AssignmentService.getTextAssignments(AuthenticationService.getLoggedInUser())
      .then((response) => {
        setTextAssignment(response.data);
        setshowAssignments([true, false]);
        setError([false, ""]);
      })
      .catch((error) => {
        console.log(error)

        setError([true, error.message]);
      });
  };

  const retriveFileAssignment = () => {
    console.log("called retriveFileAssignment");
    AssignmentService.getFileAssignments(AuthenticationService.getLoggedInUser())
      .then((response) => {
        //console.log(response.data)
        setFileAssignment(response.data);
        setshowAssignments([false, true]);
        setError([false, ""]);
      })
      .catch((error) => {
        console.log(error)

        setError([true, error.message]);
      });
  };

  return (
    <div className='container'>
      <section id='services' className='services'>
        <h1>Welcome! {props.match.params.name}</h1>
        You can manage your assignments here
        <p>
          <Link to='/upload'>Click Here to Upload</Link>
        </p>
        <div className='section-title' data-aos='fade-up'>
          <h2>Assignments</h2>
          <p>All your assignments </p>
        </div>
        <section
          id='portfolio'
          className='portfolio'
          style={{ "paddingTop": "0px", "paddingBottom": "5px" }}>
          {error[0] && <p className='alert alert-warning center'>{error[1]}</p>}
          <div className='container'></div>
          <div className='row' data-aos='fade-up' data-aos-delay='200'>
            <div className='col-lg-12 d-flex justify-content-center'>
              <ul id='portfolio-flters'>
                <li onClick={retriveFileAssignment}>Files</li>
                <li onClick={retriveTextAssignment}>Text</li>
              </ul>
            </div>
          </div>
        </section>
        <div className='row'>
          {showAssignments[0] &&
            textAssignment.map((assignment) => {
              return (
                <AssignmentList
                  assignment={assignment}
                  type={"text"}
                  key={assignment.assignmentTextId}
                />
              );
            })}
          {showAssignments[1] &&
            fileAssignment.map((assignment) => {
              return (
                <AssignmentList
                  assignment={assignment}
                  type={"file"}
                  key={assignment.assignmentFileId}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Welcome;
