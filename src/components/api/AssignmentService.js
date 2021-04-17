import axios from "axios";
class AssignmentService {
  getTextAssignments() {
    return axios.get("http://localhost:8080/getTextAssignments");
  }
  getFileAssignments() {
    return axios.get("http://localhost:8080/getFileAssignments");
  }

  createTextAssignment(data) {
    return axios.post("http://localhost:8080/createText", data);
  }
  createFileAssignment(data) {
    return axios.post("http://localhost:8080/createFile", data);
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
