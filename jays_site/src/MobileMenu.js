import React from 'react';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import "./App.css";


export default class MobileMenu extends React.Component {
    componentDidMount(){
        console.log(this.props.params);
        console.log(this.props.projectId);
    }

    loadMobilePage = (page) =>{
        this.props.mobilePageHandler(page);
    }


    render() {
        return (
            <Router>
                <div className="navigation">
                    <div className="navigation__menu">
                        {/* <NavLink to="/work" activeClassName="current" className="notCurrent" 
                        onClick = {() => {this.setState({loadMore: false, });}, () => this.loadMobilePage("work")}>Work</NavLink>  */}
                        <NavLink to="/work" activeClassName="current" className="notCurrent" 
                        onClick = {() => this.loadMobilePage("work")}>Work</NavLink> 
                        <NavLink exact to="/about" onClick ={() => this.loadMobilePage("about")} activeClassName="current" className="notCurrent">About</NavLink>
                        <NavLink exact to="/contact" onClick ={() => this.loadMobilePage("contact")} activeClassName="current" className="notCurrent">Contact</NavLink>
                    </div>
                </div>
            </Router>
        );
    }
}
