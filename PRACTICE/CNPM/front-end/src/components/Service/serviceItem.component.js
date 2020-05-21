import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import IndexService from "./indexService.component"
import axios from "axios"


export class serviceItem extends Component {
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
            <td>{this.props.content.service}</td>
            <td>{this.props.content.phone}</td>
            <td>{this.props.content.place}</td>
            <td>{this.props.content.createdTime}</td>
            <td>{this.props.content.updatedTime}</td>
            <td>
              <Link
                to={`/service/update/${this.props.content._id}`}
                className="btn btn-warning"
              >
                {" "}
                Update{" "}
              </Link>
              <Link
                to={`/service/delete/${this.props.content._id}`}
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

export default serviceItem
