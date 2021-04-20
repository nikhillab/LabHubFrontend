import React, { useState, useEffect } from "react";
import moment from "moment";
import AssignmentService from "../api/AssignmentService";
import AuthenticationService from "../Authancitation/AuthenticationService";

const Assignment = (props) => {
  const type = props.match.params.type;
  const id = props.match.params.id;
  //console.log(type)
  const [fileAssignment, setFileAssignment] = useState({});
  const [textAssignment, setTextAssignment] = useState({});
  useEffect(() => {
    if (type === "text") {
      retriveTextAssignment(id);
    }
    if (type === "file") {
      retriveFileAssignment(id);
    }
  }, []);

  const retriveTextAssignment = (id) => {
    //console.log("text assignment " + id);
    AssignmentService.getTextAssignmentById(id)
      .then((res) => {
        setTextAssignment(res.data);
      })
      .catch((err) => console.log(err));
  };
  const retriveFileAssignment = (id) => {
    //console.log("file assignment " + id);
    AssignmentService.getFileAssignmentById(id)
      .then((res) => {
        setFileAssignment(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteHandler = () => {
    if (type === "text") {
      deleteTextAssignment(id);
    }
    if (type === "file") {
      deleteFileAssignment(id);
    }
  };

  const deleteFileAssignment = (id) => {
    AssignmentService.deleteFileAssignment(id)
      .then(() =>
        props.history.push(
          `/welcome/${AuthenticationService.getLoggedInUser()}`
        )
      )
      .catch((err) => console.log(err));
  };
  const deleteTextAssignment = (id) => {
    AssignmentService.deleteTextAssignment(id)
      .then(() =>
        props.history.push(
          `/welcome/${AuthenticationService.getLoggedInUser()}`
        )
      )
      .catch((err) => console.log(err));
  };
  const code = textAssignment.code
    ? textAssignment.code.split("\n").map((line, idx) => {
        return <p key={idx}>{line}</p>;
      })
    : null;
  return (
    <section id='testimonials' className='testimonials section-bg'>
      <div className='container'>
        <div
          className='testimonials-slider swiper-container'
          data-aos='fade-up'
          data-aos-delay='100'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  {type === "text" ? (
                    <>
                      <h3>Name: {textAssignment.name}</h3>
                      <h4>
                        Target Date:
                        {moment(textAssignment.targetDate).format("YYYY-MM-DD")}
                      </h4>
                      <h4>Description: {textAssignment.description}</h4>
                      <p>
                        <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                        {code}
                        <i className='bx bxs-quote-alt-right quote-icon-right'>
                          <button type='button' className='btn btn-warning' onClick={deleteHandler}>
                            Delete
                          </button>
                        </i>
                      </p>
                    </>
                  ) : (
                    <>
                      {/* {console.log(fileAssignment)} */}
                      <h3>Name: {fileAssignment.name}</h3>
                      <h4>
                        Target Date:
                        {moment(fileAssignment.targetDate).format("YYYY-MM-DD")}
                      </h4>
                      <h4>Description: {fileAssignment.description}</h4>
                      <p>
                        <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                        {fileAssignment.fileResponse ? (
                          <>
                            File Name: {fileAssignment.fileResponse.filename}
                            <br />
                            File Type: {fileAssignment.fileResponse.fileType}
                            <br />
                            File Size: {fileAssignment.fileResponse.size} <br />
                            <a
                              href={
                                fileAssignment.fileResponse.fileDownloadUri
                              }>
                              File Download URL
                            </a>{" "}
                            <br />
                          </>
                        ) : (
                          <>Loading...</>
                        )}
                        <i className='bx bxs-quote-alt-right quote-icon-right'>
                          <button type='button' className='btn btn-warning' onClick={deleteHandler}>
                            Delete
                          </button>
                        </i>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Assignment;
