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
    mobileMenuOpen: false,
    clickCounter: 0,
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

  burgerMenuClick = () =>{
    
    let clickCounter = this.state.clickCounter;
    clickCounter = clickCounter+1;
    console.log(clickCounter);
    if (clickCounter%2 === 0){
      this.setState({
        mobileMenuOpen: false,
        clickCounter: 0,
      });
    }
    else{
      this.setState({
        mobileMenuOpen: true,
        clickCounter: clickCounter,
      });
    }

    //if the value of the number of clicks is odd then the
    //value of mobileMenuOpen in state should be set to true
    //if the value of the number of clicks is even then the
    //value of mobileMenuOpen in state should be set to false

    // this.setState({
    //   mobileMenuOpen: menuOpen,
    // });
  }

  showOpenMenu = () => {
    if(this.state.mobileMenuOpen === true){
      return <div className="content">Need to put in a component here for the menu.</div>
    }
    else{
      return <div className="content">
              <Switch>
                <Route exact path="/" render={() =><Redirect to='/work'/>}/>
                <Route path="/work" exact render={ () => { return <Work2 rawData={this.state.rawProjectData} resetLoadMoreValue={this.resetLoadMoreValue} loadMore={this.state.loadMore} loadMoreHandler={this.loadMoreHandler}/> }} />
                <Route path="/about" component={About1}/>
                <Route path="/contact" component={Contact1}/>
                <Route path="/work/:projectID?/:slideID?" exact render={ (props) => { return <ProjectContainer activeObj={this.state.activeObj}
                rawData={this.state.rawProjectData} projectId={props.match.params.projectID} slideId={props.match.params.slideID} 
                changeState={this.changeState} />} } />
              </Switch>
            </div>;
    }
  }

  render() {
    return (

      <Router>
        <div className="app">
          <div className="header">
            <Branding />
            <div className="burgerMenu">
                <img src="../../burgerMenu.png" alt="burger-icon" onClick={this.burgerMenuClick}/>
            </div>
            <div className="navigation">
              <div className="navigation__menu">
                <NavLink to="/work" activeClassName="current" className="notCurrent" 
                onClick = {() => {this.setState({loadMore: false, });}}>Work</NavLink> 
                <NavLink exact to="/about" activeClassName="current" className="notCurrent">About</NavLink>
                <NavLink exact to="/contact" activeClassName="current" className="notCurrent">Contact</NavLink>
              </div>
            </div>
          </div>
          {this.showOpenMenu()}
          {/* <div className="content">
            <Switch>
              <Route exact path="/" render={() =><Redirect to='/work'/>}/>
              <Route path="/work" exact render={ () => { return <Work2 rawData={this.state.rawProjectData} resetLoadMoreValue={this.resetLoadMoreValue} loadMore={this.state.loadMore} loadMoreHandler={this.loadMoreHandler}/> }} />
              <Route path="/about" component={About1}/>
              <Route path="/contact" component={Contact1}/>
              <Route path="/work/:projectID?/:slideID?" exact render={ (props) => { return <ProjectContainer activeObj={this.state.activeObj}
              rawData={this.state.rawProjectData} projectId={props.match.params.projectID} slideId={props.match.params.slideID} 
              changeState={this.changeState} />} } />
            </Switch>
          </div> */}
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
