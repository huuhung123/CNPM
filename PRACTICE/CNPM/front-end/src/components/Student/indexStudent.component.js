import React, { Component } from "react";
import StudentItem from "./studentItem.component";
import axios from "axios";
import { Link } from "react-router-dom";

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
          ...this.state.students.push(...res.data),
        });
      }
    });
    // console.log(this.state)
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
        </table>
        {this.state.students.map((student, index) => (
          <StudentItem key={index} content={student} />
        ))}
      </div>
    );
  }
}
