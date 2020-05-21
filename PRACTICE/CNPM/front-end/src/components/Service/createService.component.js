import React, { Component } from "react";
import axios from "axios"
import { withRouter } from "react-router-dom";

class createService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      service: "",
      phone: "",
      place: "",
    };

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeService = this.onChangeService.bind(this)
    this.onChangePhone = this.onChangePhone.bind(this)
    this.onChangePlace = this.onChangePlace.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
      this.setState({
          name: '123',
          service: '123',
          phone: '123',
          place: '123'
      })
  }

  onChangeName(e) {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  }

  onChangeService(e) {
    this.setState({
      ...this.state,
      service: e.target.value,
    });
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

  onSubmit(e) {
    e.preventDefault();

    const newService = {
        name: this.state.name,
        service: this.state.service,
        phone: this.state.phone,
        place: this.state.place
    }
    
    axios.post('http://localhost:5000/service/create', newService)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    this.props.history.push('/service')
  }


  render() {
    return (
      <div>
        <h2>You are on the Create Service component</h2>
         <form onSubmit={this.onSubmit}>
             <div className="form-group">
                 <label className="font-weight-bold">Name:</label>
                  <input type="text" required className="form-control" name="name" value={this.state.name} onChange={this.onChangeName} />
             </div>
             <div className="form-group">
                 <label className="font-weight-bold">Service:</label>
                 <input type="text" required className="form-control" name="service" value={this.state.service} onChange={this.onChangeService} />
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
                 <input type="submit" value="Create Service" className="btn btn-primary" />
             </div>
         </form>
      </div>
    );
  }
}

export default withRouter(createService)
