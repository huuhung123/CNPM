import React, { Component } from "react";
import axios from "axios";

class updateDuty extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
          time: "",
          phone: "",
          place: "",
        };
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangePlace = this.onChangePlace.bind(this)
        this.onChangeTime = this.onChangeTime.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            name: '123',
            time: '123',
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
  
    onChangeTime(e) {
      this.setState({
        ...this.state,
        time: e.target.value,
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
  
      const newDuty = {
          name: this.state.name,
          time: this.state.time,
          phone: this.state.phone,
          place: this.state.place
      }
      const { history, match } = this.props

      axios.post(`http://localhost:5000/duty/update/${match.params._id}`, newDuty)
        .then(res => history.push('/duty'))
        .catch(err => console.log(err))
  
      
    }  

  render() {
    // const { history, match } = this.props;

    return (
        <div>
        <h2>You are on the Update Duty component</h2>
         <form onSubmit={this.onSubmit}>
             <div className="form-group">
                 <label className="font-weight-bold">Name:</label>
                  <input type="text" required className="form-control" name="name" value={this.state.name} onChange={this.onChangeName} />
             </div>
             <div className="form-group">
                 <label className="font-weight-bold">Time:</label>
                 <input type="text" required className="form-control" name="time" value={this.state.time}  onChange={this.onChangeTime} />
            </div>
             <div className="form-group">
                 <label className="font-weight-bold">Phone:</label>
                 <input type="text" required className="form-control" name="phone" value={this.state.phone}  onChange={this.onChangePhone} />
             </div>
             <div className="form-group">
                 <label className="font-weight-bold">Place:</label>
                 <input type="text" required className="form-control" name="place" value={this.state.pl}  onChange={this.onChangePlace} />
             </div>
             <div className="form-group">
                 <input type="submit" value="Update Duty" className="btn btn-primary" />
             </div>
         </form>
      </div>
    )
  }
}

export default updateDuty;
