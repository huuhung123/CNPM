import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to="/duty" className="navbar-brand">DUTY</Link>
              <Link to="/service" className="navbar-brand">SERVICE</Link>
              <Link to="/student" className="navbar-brand">STUDENT</Link>
              <Link to="/user" className="navbar-brand">USER</Link>
              <Link to="/visitor" className="navbar-brand">VISITOR</Link>
              {/* <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                </ul>      
              </div> */}
            </nav>
        )
    }
}