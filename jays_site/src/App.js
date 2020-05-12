import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Branding from "./Branding.js";
import Work2 from "./Work2";
import About1 from "./About1";
import Contact1 from "./Contact1";
import ProjectContainer from "./ProjectContainer.js";
import Footer from "./Footer";
import "./App.css";
var rawData = require('./RawData.js');


class App extends Component {

  state = {
    loadMore: false,
    activeObj: {
      projID: "",
      projNUM: "",
      number: "",
      name: "",
      heading: "",
      description: "",
      image: "",
      displaySlide: {
        slide: "",
        frameNum: "",
      },
      carousel: [{
        position: "",
        slide: "../slide1.png",
        blurb:"",
      },
      {
        position: "",
        slide: "../slide2.png",
        blurb:"",
      },
      {
        position: "",
        slide: "../slide3.png",
        blurb:"",
      }],
    },
    rawProjectData: rawData,
  };

  changeState = (obj) => {
    this.setState({
      activeObj: obj,
    });
  };

  loadMoreHandler = (buttonClicked) => {
    this.setState({
      loadMore: buttonClicked,
    });
  }


  render() {
    return (

      <Router>
        <div className="app">
          <div className="header">
            <Branding />
            <div className="burgerMenu"></div>
            <div className="navigation">
              <div className="navigation__menu">
                <NavLink to="/work" activeClassName="current" className="notCurrent" 
                onClick = {() => {this.setState({loadMore: false, });}}>Work</NavLink> 
                <NavLink exact to="/about" activeClassName="current" className="notCurrent">About</NavLink>
                <NavLink exact to="/contact" activeClassName="current" className="notCurrent">Contact</NavLink>
              </div>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" render={() =><Redirect to='/work'/>}/>
              <Route path="/work" exact render={ () => { return <Work2 rawData={this.state.rawProjectData} resetLoadMoreValue={this.resetLoadMoreValue} loadMore={this.state.loadMore} loadMoreHandler={this.loadMoreHandler}/> }} />
              <Route path="/about" component={About1}/>
              <Route path="/contact" component={Contact1}/>
              <Route path="/work/:projectID?/:slideID?" exact render={ (props) => { return <ProjectContainer activeObj={this.state.activeObj}
              rawData={this.state.rawProjectData} projectId={props.match.params.projectID} slideId={props.match.params.slideID} 
              changeState={this.changeState} />} } />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
