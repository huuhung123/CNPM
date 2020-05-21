import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import IndexDuty from "./indexDuty.component"
import axios from "axios"


export class dutyItem extends Component {
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
            <td>{this.props.content.time}</td>
            <td>{this.props.content.phone}</td>
            <td>{this.props.content.place}</td>
            <td>{this.props.content.createdTime}</td>
            <td>{this.props.content.updatedTime}</td>
            <td>
              <Link
                to={`/duty/update/${this.props.content._id}`}
                className="btn btn-warning"
              >
                {" "}
                Update{" "}
              </Link>
              <Link
                to={`/duty/delete/${this.props.content._id}`}
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

export default dutyItem
