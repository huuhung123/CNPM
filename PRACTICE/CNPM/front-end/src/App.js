import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import indexHomePage from "./components/indexHomePage.component";
import searchDuty from "./components/Duty/searchDuty.component";

import indexDuty from "./components/Duty/indexDuty.component";
import createDuty from "./components/Duty/createDuty.component";
import updateDuty from "./components/Duty/updateDuty.component";
import deleteDuty from "./components/Duty/deleteDuty.component"

import indexService from "./components/Service/indexService.component" 
import createService from "./components/Service/createService.component"
import updateService from "./components/Service/updateService.component"
import deleteService from "./components/Service/deleteService.component"

import indexStudent from "./components/Student/indexStudent.component"
import createStudent from "./components/Student/createStudent.component"
import updateStudent from "./components/Student/updateStudent.component"
import deleteStudent from "./components/Student/deleteStudent.component"

import indexUser from "./components/User/indexUser.component"
import createUser from "./components/User/createUser.component"
import updateUser from "./components/User/updateUser.component"
import deleteUser from "./components/User/deleteUser.component"

import indexVisitor from "./components/Visitor/indexVisitor.component"
import createVisitor from "./components/Visitor/createVisitor.component"
import updateVisitor from "./components/Visitor/updateVisitor.component"
import deleteVisitor from "./components/Visitor/deleteVisitor.component"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Switch>
            <Route path="/duty" exact component={indexDuty} />
            <Route path="/duty/create" exact component={createDuty} />
            <Route path="/duty/update/:_id" exact component={updateDuty} />
            <Route path="/duty/delete/:_id" exact component={deleteDuty} />
            <Route path="/duty/search" exact component={searchDuty} />
            
            <Route path="/service" exact component={indexService} />
            <Route path="/service/create" exact component={createService} />
            <Route path="/service/update/:_id" exact component={updateService} />
            <Route path="/service/delete/:_id" exact component={deleteService} />

            <Route path="/student" exact component={indexStudent} />
            <Route path="/student/create" exact component={createStudent} />
            <Route path="/student/update/:_id" exact component={updateStudent} />
            <Route path="/student/delete/:_id" exact component={deleteStudent} />

            
            <Route path="/user" exact component={indexUser} />
            <Route path="/user/create" exact component={createUser} />
            <Route path="/user/update/:_id" exact component={updateUser} />
            <Route path="/user/delete/:_id" exact component={deleteUser} />

             
            <Route path="/visitor" exact component={indexVisitor} />
            <Route path="/visitor/create" exact component={createVisitor} />
            <Route path="/visitor/update/:_id" exact component={updateVisitor} />
            <Route path="/visitor/delete/:_id" exact component={deleteVisitor} />


        </Switch>  
      </div>
    </Router>
  );
}

export default App;
