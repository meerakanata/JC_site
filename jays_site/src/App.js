import React, { Component } from "react";
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import Branding from "./Branding.js";
//import Work2 from "./Work2";
import About1 from "./About1";
import Contact1 from "./Contact1";
//import ProjectContainer from "./ProjectContainer.js";
import WorkRoutes from "./WorkRoutes";
import Footer from "./Footer";
import MobileMenu from './MobileMenu.js';
import "./App.css";
var rawData = require('./RawData.js');


class App extends Component {

  state = {
    burgerMenuSelector: "hamburger hamburger--collapse",
    mobileMenuOpen: false,
    menuPage: "work",
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
      featureImage: "",
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

  componentDidUpdate () {
    console.log(this.state.mobileMenuPage);
  }

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
        burgerMenuSelector: "hamburger hamburger--collapse",
      });
    }
    else{
      this.setState({
        mobileMenuOpen: true,
        clickCounter: clickCounter,
        burgerMenuSelector: "hamburger hamburger--collapse is-active",
      });
    }
  
    //if the value of the number of clicks is odd then the
    //value of mobileMenuOpen in state should be set to true
    //if the value of the number of clicks is even then the
    //value of mobileMenuOpen in state should be set to false
  }

  showOpenMenu = () => {
    console.log(this.state.activeObj.projID);

    if(this.state.mobileMenuOpen === true){
        return <div className="content"><MobileMenu pageHandler={this.pageHandler}/></div>
    }
    else {
      console.log(this.state.menuPage);
      if(this.state.menuPage === "work"){
        return <div className="contentContainer">
                <WorkRoutes menuPage={this.state.menuPage} rawData={this.state.rawProjectData} loadMore={this.state.loadMore} loadMoreHandler={this.loadMoreHandler} activeObj={this.state.activeObj} changeState={this.changeState}/>
              </div>;
      }
      else if(this.state.menuPage === "about"){
        return <div className="content">
                <About1 />
              </div>;    
      }
      else if(this.state.menuPage === "contact"){
        return <div className="content">
                <Contact1 />
              </div>;
      }
      else{
        return <div className="content">
        There is a problem
      </div>;
      }
    }
  }
  pageHandler = (page) =>{
    this.setState({
      mobileMenuOpen: false,
      clickCounter: 0,
      menuPage: page,
      burgerMenuSelector: "hamburger hamburger--collapse",
      loadMore: false,
    });
  }

// loadDesktopPage = (page) =>{
//     this.setState({
//       mobileMenuOpen: false,
//       clickCounter: 0,
//       mobileMenuPage: page,
//       burgerMenuSelector: "hamburger hamburger--collapse",
//       loadMore: false,
//     });
//   }



  render() {
    return (

      <Router>
        <div className="app">
          <div className="header">
            <Branding />
            <div className="burgerMenu">
                {/* <img src="../../burgerMenu.png" alt="burger-icon" onClick={this.burgerMenuClick}/> */}
                  <button className={this.state.burgerMenuSelector} type="button" onClick={this.burgerMenuClick}>
                    <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
            </div>
            <div className="navigation">
              <div className="navigation__menu">
                <NavLink to="/work" onClick ={() => this.pageHandler("work")} activeClassName="current" className="notCurrent">Work</NavLink> 
                <NavLink exact to="/about" onClick ={() => this.pageHandler("about")} activeClassName="current" className="notCurrent">About</NavLink>
                <NavLink exact to="/contact" onClick ={() => this.pageHandler("contact")} activeClassName="current" className="notCurrent">Contact</NavLink>
              </div>
            </div>
          </div>
          {this.showOpenMenu()}
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;


