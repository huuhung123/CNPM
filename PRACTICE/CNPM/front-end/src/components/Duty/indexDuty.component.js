import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DutyItem = (props) => (
  <tr>
    <th scope="row">{props.content._id}</th>
    <td>{props.content.name}</td>
    <td>{props.content.time}</td>
    <td>{props.content.phone}</td>
    <td>{props.content.place}</td>
    <td>{props.content.createdTime}</td>
    <td>{props.content.updatedTime}</td>
    <td>
      <Link
        to={`/duty/update/${props.content._id}`}
        className="btn btn-warning"
      >
        {" "}
        Update{" "}
      </Link>
      <Link
        to={`/duty/delete/${props.content._id}`}
        className="btn btn-danger"
      >
        {" "}
        Delete{" "}
      </Link>
    </td>
  </tr>
)

export default class indexDuty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duties: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/duty")
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            duties: res.data
          });
        }
      })
      .catch(err => console.log(err))
  }

  
  deleteDuty(id) {
    axios.delete('http://localhost:5000/duty/'+ id)
    .then(res => console.log(res.data));

    this.setState({
        duties: this.state.duties.filter(el => el._id !== id)
    })
}

// import React from 'react'
// import axios from "axios"

// export const deleteDuty = (props) => {
//     // try {
//     //     const value = await axios.get(`http://localhost:5000/duty/delete/${match.params._id}`)
//     // }
//     // catch (err) {
//     //         console.log(err)
//     // }
//     const { history, match } = props

//     axios.get(`http://localhost:5000/duty/delete/${match.params._id}`)
//     .then(res => history.push('/duty'))
//     .catch(err => console.log(err))

//     return (
//         <div>
//             This is deleteDuty component
//         </div>
//     )
// }
// export default deleteDuty



  dutyList() {
    return this.state.duties.map(currentDuty => {
        return <DutyItem content={currentDuty}
        deleteDuty={this.deleteDuty}
        key={currentDuty._id}
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
        <Link to="/duty/create" className="btn btn-primary">
          Create Duty
        </Link>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Name</th>
              <th scope="col">Time</th>
              <th scope="col">Phone</th>
              <th scope="col">Place</th>
              <th scope="col">CreatedTime</th>
              <th scope="col">UpdatedTime</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
          { this.dutyList() }
          </tbody>
        </table>    
      </div>
    )
  }
}

