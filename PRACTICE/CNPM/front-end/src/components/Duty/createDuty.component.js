import React, { Component } from "react";
import axios from "axios"
// import { withRouter } from "react-router-dom";

class createDuty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      time: '',
      phone: '',
      place: '',
    }

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangePhone = this.onChangePhone.bind(this)
    this.onChangePlace = this.onChangePlace.bind(this)
    this.onChangeTime = this.onChangeTime.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeName(e) {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  }

  onChangeTime(e) {
    this.setState({
      ...this.state,
      time: e.target.value,
    })
  }

  onChangePhone(e) {
    this.setState({
      ...this.state,
      phone: e.target.value,
    });
  }

  onChangePlace(e) {
    this.setState({
      ...this.state,
      place: e.target.value,
    });
  }

//   changeHandler = e => {
//     this.setState({
//         [e.target.name]: e.target.name
//     })
// }

  onSubmit(e) {

    e.preventDefault();
    const { history } = this.props

    const newDuty = {
        name: this.state.name,
        time: this.state.time,
        phone: this.state.phone,
        place: this.state.place
    }
    
    axios.post('http://localhost:5000/duty/create', newDuty)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    history.push('/duty')
  }



  render() {
    return (
      <div>
        <h2>You are on the Create Duty component</h2>
         <form onSubmit={this.onSubmit}>
             <div className="form-group">
                 <label className="font-weight-bold">Name:</label>
                  <input type="text" required className="form-control" name="name" value={this.state.name} onChange={this.onChangeName} />
             </div>
             <div className="form-group">
                 <label className="font-weight-bold">Time:</label>
                 <input type="text" required className="form-control" name="time" value={this.state.time} onChange={this.onChangeTime} />
            </div>
             <div className="form-group">
                 <label className="font-weight-bold">Phone:</label>
                 <input type="text" required className="form-control" name="phone" value={this.state.phone} onChange={this.onChangePhone} />
             </div>
             <div className="form-group">
                 <label className="font-weight-bold">Place:</label>
                 <input type="text" required className="form-control" name="place" value={this.state.place} onChange={this.onChangePlace} />
             </div>
             <div className="form-group">
                 <input type="submit" value="Create Duty" className="btn btn-primary" />
             </div>
         </form>
      </div>
    );
  }
}

export default createDuty
