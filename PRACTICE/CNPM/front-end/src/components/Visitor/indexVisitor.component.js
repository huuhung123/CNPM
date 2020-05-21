import React, { Component } from "react";
import VisitorItem from "./visitorItem.component";
import axios from "axios";
import { Link } from "react-router-dom";

export default class indexVisitor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visitors: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/visitor").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          ...this.state.visitors.push(...res.data),
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
        <Link to="/visitor/create" className="btn btn-primary">
          Create Visitor
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
        {this.state.visitors.map((visitor, index) => (
          <VisitorItem key={index} content={visitor} />
        ))}
      </div>
    );
  }
}
