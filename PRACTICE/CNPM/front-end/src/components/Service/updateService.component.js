import React, { Component } from "react";
import axios from "axios";

class updateService extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          service: '',
          phone: '',
          place: '',
        }

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangePlace = this.onChangePlace.bind(this)
        this.onchangeService = this.onchangeService.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    

    componentDidMount() {
      const { match } = this.props
      axios.get(`http://localhost:5000/service/update/${match.params._id}`)
      .then(res => {
          this.setState({
            name: res.data.name,
            service: res.data.service,
            phone: res.data.phone,
            place: res.data.place
          })
      })
      .catch(err => console.log(err))
     }

    onChangeName(e) {
      this.setState({
        ...this.state,
        name: e.target.value,
      });
    }
  
    onchangeService(e) {
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
      const { history, match } = this.props

      axios.post(`http://localhost:5000/service/update/${match.params._id}`, newService)
        .then(res => history.push('/service'))
        .catch(err => console.log(err))
    }  

  render() {
    return (
        <div>
        <h2>You are on the Update Service component</h2>
         <form onSubmit={this.onSubmit}>
             <div className="form-group">
                 <label className="font-weight-bold">Name:</label>
                  <input type="text" required className="form-control" name="name" value={this.state.name} onChange={this.onChangeName} />
             </div>
             <div className="form-group">
                 <label className="font-weight-bold">Service:</label>
                 <input type="text" required className="form-control" name="service" value={this.state.service}  onChange={this.onchangeService} />
            </div>
             <div className="form-group">
                 <label className="font-weight-bold">Phone:</label>
                 <input type="text" required className="form-control" name="phone" value={this.state.phone}  onChange={this.onChangePhone} />
             </div>
             <div className="form-group">
                 <label className="font-weight-bold">Place:</label>
                 <input type="text" required className="form-control" name="place" value={this.state.place}  onChange={this.onChangePlace} />
             </div>
             <div className="form-group">
                 <input type="submit" value="Update Service" className="btn btn-primary" />
             </div>
         </form>
      </div>
    )
  }
}

export default updateService;
