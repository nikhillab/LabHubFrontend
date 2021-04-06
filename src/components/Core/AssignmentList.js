import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const AssignmentList = (props) => {
  /**
      * assignentTextId: 101
        code: "Select * from student"
        description: "Assignment 1"
        name: "DateBase"
        targetDate: "2021-04-05T14:17:58.882+00:00"
    */

  return (
    <div className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 mt-5'>
      <Link to={`/assignment/${props.assignment.assignentTextId}`}>
        <div className='icon-box' data-aos='fade-up' data-aos-delay='100'>
          <h4 className='title'>{props.assignment.name}</h4>
          <p className='description'>{props.assignment.description}</p>
          <p className='targetDate'>{moment(props.assignment.targetDate).format('YYYY-MM-DD')}</p>

        </div>
      </Link>
    </div>
  );
};
export default AssignmentList;
