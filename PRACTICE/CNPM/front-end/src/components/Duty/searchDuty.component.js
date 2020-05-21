import React, { Component } from "react";
import axios from "axios"

export default class searchDuty extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
  }


  componentDidMount() {
    const { location, match } = this.props
    const search = location.search
    const params = new URLSearchParams(search)
    console.log(params.get('q'))
  }

  onSubmit(e) {
    e.preventDefault();

    // const { location, match } = this.props

    // axios.get(`http://localhost:5000/duty/search`)
    //   //.then(res => history.push('/duty'))
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err))
    //const search = location.search
    // const params = new URLSearchParams(search)
    // console.log(params.get('q'))
    //console.log(search)  
  }
  render() {
    
    return (
      <div className="container">
        <form  action="http://www.example.com" method="GET" >
          <div className="form-group">
            <input className="form-control" type="text" name="q" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>
        </div>
    );
  }
}
