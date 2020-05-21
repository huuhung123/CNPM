import React, { Component } from "react";
import ServiceItem from "./serviceItem.component";
import axios from "axios";
import { Link } from "react-router-dom";

export default class indexService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/service").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          ...this.state.services.push(...res.data),
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
        <Link to="/service/create" className="btn btn-primary">
          Create Service
        </Link>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Name</th>
              <th scope="col">Service</th>
              <th scope="col">Phone</th>
              <th scope="col">Place</th>
              <th scope="col">CreatedTime</th>
              <th scope="col">UpdatedTime</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
        </table>
        {this.state.services.map((service, index) => (
          <ServiceItem key={index} content={service} />
        ))}
      </div>
    );
  }
}
