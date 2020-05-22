import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VisitorItem = (props) => (
  <tr>
    <th scope="row">{props.content._id}</th>
      <td>{props.content.name}</td>
      <td>{props.content.age}</td>
      <td>{props.content.createdTime}</td>
      <td>
        <Link
          to={`/visitor/update/${props.content._id}`}
          className="btn btn-warning"
        > 
          {" "}
          Update{" "}
        </Link>
        <Link
          to={`/visitor/delete/${props.content._id}`}
          className="btn btn-danger"
        >
          {" "}
          Delete{" "}
        </Link>
      </td>
    </tr>
)

export default class indexVisitor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visitors: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/visitor")
      .then((res) => {
      if (res.data.length > 0) {
        this.setState({
          visitors: res.data
        });
      }
    })
    .catch(err => console.log(err))
  }

   deleteVisttor(id) {
    axios.delete('http://localhost:5000/visitor/'+ id)
    .then(res => console.log(res.data));

    this.setState({
       visitors: this.state.visitors.filter(el => el._id !== id)
    })
}
  
  visitorList() {
    return this.state.visitors.map(currentVisitor => {
      return <VisitorItem content={currentVisitor}
      deleteVisttor={this.deleteVisttor}
      key={currentVisitor._id}
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
          <tbody>
            { this.visitorList() }
          </tbody>
        </table>
      </div>
    );
  }
}
