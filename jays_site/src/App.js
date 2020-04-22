import React, { Component } from "react";
// import { Route, NavLink, HashRouter, Redirect, BrowserRouter} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Branding from "./Branding.js";
import Work1 from "./Work1";
import About1 from "./About1";
import Contact1 from "./Contact1";
import ProjectContainer from "./ProjectContainer.js";
import Footer from "./Footer";
import "./App.css";
// var projData = require('./ProjData.js');


class App extends Component {

    state = {
      projID: "",
      projNUM: "",
      number: "",
      name: "",
      heading: "",
      description: "",
      image: "",
      carousel_img1: "",
      carousel_img2: "",
      carousel_img3: "",
      carousel_blurb1: "",
      carousel_blurb2: "",
      carousel_blurb3: "",
  };

  changeState = (obj) => {
    this.setState(obj);
  }

  render() {
    return (

      <Router>
        <div className="app">
          <div className="header">
            <Branding />
            <div className="navigation">
              <NavLink to="/work" activeClassName="current" className="notCurrent">Work</NavLink> 
              <NavLink exact to="/about" activeClassName="current" className="notCurrent">About</NavLink>
              <NavLink exact to="/contact" activeClassName="current" className="notCurrent">Contact</NavLink>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" render={() =><Redirect to='/work'/>}/>
              <Route exact path="/work" component={Work1}/>
              <Route path="/about" component={About1}/>
              <Route path="/contact" component={Contact1}/>
              <Route path="/work/:projectID" exact render={ (props) => { return <ProjectContainer projectData={this.state} projectId={props.match.params.projectID} changeState={this.changeState}/>} }  />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>

    );
  }
}
 
export default App;
