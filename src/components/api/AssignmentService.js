import axios from "axios";
class AssignmentService {
  getTextAssignments() {
    return axios.get("http://localhost:8080/getTextAssignments");
  }
  getTextAssignmentById(id) {
    return axios.get(`http://localhost:8080/getTextAssignment/${id}`);
  }

  createTextAssignment(data) {
    return axios.post("http://localhost:8080/createText", data);
  }

  deleteTextAssignment(id) {
    return axios.delete(`http://localhost:8080/deleteText/${id}`);
  }

  //-----------------------------------------------------------------------------------
  getFileAssignments() {
    return axios.get("http://localhost:8080/getFileAssignments");
  }

  createFileAssignment(data) {
    return axios.post("http://localhost:8080/createFile", data);
  }

  getFileAssignmentById(id) {
    return axios.get(`http://localhost:8080/getFileAssignment/${id}`);
  }

  deleteFileAssignment(id) {
    return axios.delete(`http://localhost:8080/deleteFile/${id}`);
  }

  uploadFile(formData) {
    return axios.put("http://localhost:8080/files", formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
      },
    });
  }
}
export default new AssignmentService();
