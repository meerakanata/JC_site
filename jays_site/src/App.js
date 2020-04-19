import React, { Component } from "react";
import { Route, NavLink, HashRouter, Redirect} from "react-router-dom";
import Branding from "./Branding.js";
import Work1 from "./Work1";
import About1 from "./About1";
import Contact1 from "./Contact1";
import ProjectContainer from "./ProjectContainer.js";
import Footer from "./Footer";
import "./App.css";
var Carousel = require('carousel');
new Carousel('#slides');


class App extends Component {
  render() {
    return (
      <HashRouter>
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
            <Route exact path="/" render={() =><Redirect to='/work'/>}/>
            <Route exact path="/work" component={Work1}/>
            <Route path="/about" component={About1}/>
            <Route path="/contact" component={Contact1}/>
            <Route path="/work/:projectID" exact render={ (props) => { return <ProjectContainer projectId={props.match.params.projectID} />} }  />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}
 
export default App;
