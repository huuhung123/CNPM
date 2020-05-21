import React, { Component } from "react";
import axios from "axios"
import { withRouter } from "react-router-dom";

class createVisitor extends Component {
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
      this.setState({
          name: '123',
          age: '123',
      })
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
        age: this.state.age,
    }
    
    axios.post('http://localhost:5000/visitor/create', newVisitor)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    this.props.history.push('/visitor')
  }


  render() {
    return (
      <div>
        <h2>You are on the Create Visitor component</h2>
         <form onSubmit={this.onSubmit}>
             <div className="form-group">
                 <label className="font-weight-bold">Name:</label>
                  <input type="text" required className="form-control" name="name" value={this.state.name} onChange={this.onChangeName} />
             </div>
             <div className="form-group">
                 <label className="font-weight-bold">Age:</label>
                 <input type="text" required className="form-control" name="time" value={this.state.age} onChange={this.onchangeAge} />
            </div>
             <div className="form-group">
                 <input type="submit" value="Create Visitor" className="btn btn-primary" />
             </div>
         </form>
      </div>
    );
  }
}

export default withRouter(createVisitor)
