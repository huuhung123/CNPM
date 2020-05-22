import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentItem = (props) => (
  <tr>
  <th scope="row">{props.content._id}</th>
  <td>{props.content.name}</td>
  <td>{props.content.age}</td>
  <td>{props.content.createdTime}</td>
  <td>
    <Link
      to={`/student/update/${props.content._id}`}
      className="btn btn-warning"
    >
      {" "}
      Update{" "}
    </Link>
    <Link
      to={`/student/delete/${props.content._id}`}
      className="btn btn-danger" 
    >
      {" "}
      Delete{" "}
    </Link>
  </td>
</tr>
)

export default class indexStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/student").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          students: res.data
        });
      }
    })
    .catch(err => console.log(err))
  }

  deleteStudent(id) {
    axios.delete('http://localhost:5000/student/'+ id)
    .then(res => console.log(res.data));

    this.setState({
        students: this.state.students.filter(el => el._id !== id)
    })
}

  studentList() {
    return this.state.students.map(currentStudent => {
      return <StudentItem content={currentStudent}
      deleteStudent={this.deleteStudent}
      key={currentStudent._id}
        />
  })
}

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input className="form-control" type="text" name="q" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Search</button>
          </div>
        </form>
        <Link to="/student/create" className="btn btn-primary">
          Create Student
        </Link>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">CreatedTime</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            { this.studentList() }
          </tbody>
        </table>
      </div>
    );
  }
}
