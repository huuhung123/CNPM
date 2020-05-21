import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import IndexStudent from "./indexStudent.component"
import axios from "axios"


export class studentItem extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="container">
       <table className="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">{this.props.content._id}</th>
            <td>{this.props.content.name}</td>
            <td>{this.props.content.age}</td>
            <td>{this.props.content.createdTime}</td>
            <td>
              <Link
                to={`/student/update/${this.props.content._id}`}
                className="btn btn-warning"
              >
                {" "}
                Update{" "}
              </Link>
              <Link
                to={`/student/delete/${this.props.content._id}`}
                className="btn btn-danger" 
              >
                {" "}
                Delete{" "}
              </Link>
            </td>
          </tr>
        </tbody>
        </table>

      </div>
    );
  }
}

export default studentItem
