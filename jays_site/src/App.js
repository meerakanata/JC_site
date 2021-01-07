import React, { Component } from "react";
// import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect} from 'react-router-dom';
import Work2 from "./Work2";
import ProjectContainer from "./ProjectContainer.js"
import Branding from "./Branding.js";
//import Work2 from "./Work2";
import About1 from "./About1";
import Contact1 from "./Contact1";
//import ProjectContainer from "./ProjectContainer.js";
//import WorkRoutes from "./WorkRoutes";
import Footer from "./Footer";
//import MobileMenu from './MobileMenu.js';
import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

//var rawData = require('./RawData.js');
var rawData = require('./RawData-1.js');
var aboutData = require('./AboutData.js');



class App extends Component {

  state = {
    headerSelector: "header",
    footerSelector: "footer",
    contentSelector: "content",
    navMenuSelector: "navClosed",
    burgerMenuSelector: "hamburger hamburger--collapse",
    mobileMenuOpen: false,
    menuPage: "default",
    clickCounter: 0,
    loadMore: false,
    featImagePosition: 0,
    activeObj: {
      projID: "",
      projNUM: "",
      number: "",
      name: "",
      heading: "",
      description: "",
      image: "",
      featureImage: [{
        image: " ",
        id: " ",
      },
      {
        image: " ",
        id: " ",
      },
      {
        image: " ",
        id: " ",
      }],
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
    aboutData: aboutData,
    imgViz: false,
  };

  componentDidUpdate () {
    console.log(this.state.mobileMenuOpen);
    console.log(this.state.navMenuSelector);
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

  thumbHandler = (thumbClickedID) => {
    this.setState({
      featImagePosition: thumbClickedID,
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
        headerSelector: "header",
        navMenuSelector: "navClosed",
        contentSelector: "content",
        footerSelector: "footer",
      });
    }
    else{
      this.setState({
        mobileMenuOpen: true,
        clickCounter: clickCounter,
        burgerMenuSelector: "hamburger hamburger--collapse is-active",
        headerSelector: "headerFull",
        navMenuSelector: "navigation",
        contentSelector: "contentHidden",
        footerSelector: "footerHidden",
        
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
        return <div className={this.state.contentSelector}></div>;
    }
    else {
      return <div className={this.state.contentSelector}>
      <Switch>
        <Route exact path="/" render={() =><Redirect to='/work'/>}/>
        <Route path="/work" exact render={ () => { return <Work2 menuPage={this.state.menuPage} rawData={this.state.rawProjectData} loadMore={this.state.loadMore} loadMoreHandler={this.loadMoreHandler}/> }} />
        <Route path="/about" exact render={ () => { return <About1 aboutData={this.state.aboutData}/> }} />
        <Route path="/contact" component={Contact1}/>
        <Route path="/work/:projectID?/:slideID?" exact render={ (props) => { return <ProjectContainer activeObj={this.state.activeObj} rawData={this.state.rawProjectData} projectId={props.match.params.projectID} slideId={props.match.params.slideID} featImagePosition={this.state.featImagePosition} changeState={this.changeState} thumbHandler={this.thumbHandler}/>} } />
      </Switch>
    </div>;
    }
  }
  pageHandler = (page) =>{
    this.setState({
      mobileMenuOpen: false,
      clickCounter: 0,
      menuPage: page,
      burgerMenuSelector: "hamburger hamburger--collapse",
      loadMore: false,
      headerSelector: "header",
      navMenuSelector: "navClosed",
      contentSelector: "content",
      footerSelector: "footer",
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
// displayNav = () => {

//   if(this.state.mobileMenuOpen === true){
//     return <div className="navigation__menu">
//     <NavLink to="/work" onClick ={() => this.pageHandler("work")} activeClassName="current" className="notCurrent">Work</NavLink> 
//     <NavLink exact to="/about" onClick ={() => this.pageHandler("about")} activeClassName="current" className="notCurrent">About</NavLink>
//     <NavLink exact to="/contact" onClick ={() => this.pageHandler("contact")} activeClassName="current" className="notCurrent">Contact</NavLink>
//   </div>
//   }
//   else{
//     return <div className="navigation__menu">
//     <NavLink to="/work" onClick ={() => this.pageHandler("work")} activeClassName="current" className="notCurrent">Work</NavLink> 
//     <NavLink exact to="/about" onClick ={() => this.pageHandler("about")} activeClassName="current" className="notCurrent">About</NavLink>
//     <NavLink exact to="/contact" onClick ={() => this.pageHandler("contact")} activeClassName="current" className="notCurrent">Contact</NavLink>
//     </div>
//   }
// }


  render() {

    return (

      <Router>
        <div className="app">
          <div className={this.state.headerSelector}>
            <div className="mobileNavContainer">
              <Branding />
              <div className="burgerMenu">
                    <button className={this.state.burgerMenuSelector} type="button" onClick={this.burgerMenuClick}>
                      <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                      </span>
                    </button>
              </div>
            </div>
            <div className={this.state.navMenuSelector}>
              {/* {this.displayNav()} */}
              <div className="navigation__menu">
                <NavLink to="/work" onClick ={() => this.pageHandler("work")} activeClassName="current" className="notCurrent">Work</NavLink> 
                <NavLink exact to="/about" onClick ={() => this.pageHandler("about")} activeClassName="current" className="notCurrent">About</NavLink>
                <NavLink exact to="/contact" onClick ={() => this.pageHandler("contact")} activeClassName="current" className="notCurrent">Contact</NavLink>
              </div>
            </div>
          </div>
            {this.showOpenMenu()}
            {/* <div className="content">
              <Switch>
                <Route exact path="/" render={() =><Redirect to='/work'/>}/>
                <Route path="/work" exact render={ () => { return <Work2 menuPage={this.state.menuPage} rawData={this.state.rawProjectData} loadMore={this.state.loadMore} loadMoreHandler={this.loadMoreHandler}/> }} />
                <Route path="/about" component={About1}/>
                <Route path="/contact" component={Contact1}/>
                <Route path="/work/:projectID?/:slideID?" exact render={ (props) => { return <ProjectContainer activeObj={this.state.activeObj} rawData={this.state.rawProjectData} projectId={props.match.params.projectID} slideId={props.match.params.slideID} changeState={this.changeState} />} } />
              </Switch>
            </div> */}
          <div className={this.state.footerSelector}>
          <Footer />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;


