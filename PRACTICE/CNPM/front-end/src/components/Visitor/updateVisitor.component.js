import React, { Component } from "react";
import axios from "axios";

class updateVisitor extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
          age: "",
        };

        this.onChangeName = this.onChangeName.bind(this)
        this.onchangeAge = this.onchangeAge.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
      const { match } = this.props
      axios.get(`http://localhost:5000/visitor/update/${match.params._id}`)
      .then(res => {
          this.setState({
            name: res.data.name,
            age: res.data.age
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
  
    onchangeAge(e) {
      this.setState({
        ...this.state,
        age: e.target.value,
      });
    }

    onSubmit(e) {
      e.preventDefault();
  
      const newVisitor = {
          name: this.state.name,
          age: this.state.age
      }
       
      const { history, match } = this.props

      axios.post(`http://localhost:5000/visitor/update/${match.params._id}`, newVisitor)
        .then(res => history.push('/visitor'))
        .catch(err => console.log(err))
    }  

  render() {

    return (
        <div>
        <h2>You are on the Update Visitor component</h2>
         <form onSubmit={this.onSubmit}>
             <div className="form-group">
                 <label className="font-weight-bold">Name:</label>
                  <input type="text" required className="form-control" name="name" value={this.state.name} onChange={this.onChangeName} />
             </div>
             <div className="form-group">
                 <label className="font-weight-bold">Age:</label>
                 <input type="text" required className="form-control" name="time" value={this.state.age}  onChange={this.onchangeAge} />
            </div>
             <div className="form-group">
                 <input type="submit" value="Update Visitor" className="btn btn-primary" />
             </div>
         </form>
      </div>
    )
  }
}

export default updateVisitor;
