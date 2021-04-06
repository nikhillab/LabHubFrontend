import axios from "axios";
class AssignmentService {
  getFileAssignments() {
    return axios.get("http://localhost:8080/getTextAssignments");
  }

  createFileAssignment(data) {
    axios.post("http://localhost:8080/createText",data).then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
}
export default new AssignmentService();
