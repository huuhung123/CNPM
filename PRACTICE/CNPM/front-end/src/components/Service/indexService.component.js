import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ServiceItem = (props) => (
  <tr>
  <th scope="row">{props.content._id}</th>
  <td>{props.content.name}</td>
  <td>{props.content.service}</td>
  <td>{props.content.phone}</td>
  <td>{props.content.place}</td>
  <td>{props.content.createdTime}</td>
  <td>{props.content.updatedTime}</td>
  <td>
    <Link
      to={`/service/update/${props.content._id}`}
      className="btn btn-warning"
    >
      {" "}
      Update{" "}
    </Link>
    <Link
      to={`/service/delete/${props.content._id}`}
      className="btn btn-danger" 
    >
      {" "}
      Delete{" "}
    </Link>
  </td>
</tr>
)

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
          services: res.data
        });
      }
    })
    .catch(err => console.log(err))
  }

  deleteService(id) {
    axios.delete('http://localhost:5000/service/'+ id)
    .then(res => console.log(res.data));

    this.setState({
        services: this.state.services.filter(el => el._id !== id)
    })
}

serviceList() {
  return this.state.services.map(currentService => {
      return <ServiceItem content={currentService}
      deleteDuty={this.deleteService}
      key={currentService._id}
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
          <tbody>
            { this.serviceList() }
          </tbody>
        </table>
      </div>
    );
  }
}
