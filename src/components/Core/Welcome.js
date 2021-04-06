import React, { useState } from "react";
import { Link } from "react-router-dom";
import AssignmentService from "../api/AssignmentService";
import AssignmentList from "./AssignmentList";

const Welcome = (props) => {
  
  const [textAssignment, setTextAssignment] = useState([]);
  const [fileAssignment, setFileAssignment] = useState([]);


  const retriveTextAssignment = () => {
    console.log("called retriveTextAssignment");
    AssignmentService.getTextAssignments()
      .then((response) => {
          setTextAssignment(response.data);
      })
      .catch((error) => {});
  };

  const retriveFileAssignment = () => {
    console.log("called retriveFileAssignment");
    AssignmentService.getFileAssignments()
      .then((response) => {
          setFileAssignment(response.data);
      })
      .catch((error) => {});
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
        <section id='portfolio' className='portfolio'>
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
          {textAssignment.map((assignment) => {
            return (
              <AssignmentList
                assignment={assignment}
                key={assignment.assignentTextId}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Welcome;
