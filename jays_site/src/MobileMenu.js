import React from 'react';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import Branding from "./Branding.js";
import Footer from "./Footer";
import "./App.css";

export default class MobileMenu extends React.Component {

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
            <div className="content">
                <div className="">
                    NEED TO CREATE THE MENU FOR MOBILE HERE.
                </div>
            </div>
            <Footer />
            </div>
            </Router>
        );
    }
}
