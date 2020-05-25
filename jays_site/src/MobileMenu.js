import React from 'react';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import "./App.css";


export default class MobileMenu extends React.Component {
    componentDidMount(){
        console.log(this.props.params);
        console.log(this.props.projectId);
    }

    loadPage = (page) =>{
        this.props.pageHandler(page);
    }


    render() {
        return (
            <Router>
                <div className="navigation">
                    <div className="navigation__menu">
                        {/* <NavLink to="/work" activeClassName="current" className="notCurrent" 
                        onClick = {() => {this.setState({loadMore: false, });}, () => this.loadMobilePage("work")}>Work</NavLink>  */}
                        <NavLink to="/work" onClick = {() => this.loadPage("work")} activeClassName="current" className="notCurrent">Work</NavLink> 
                        <NavLink exact to="/about" onClick ={() => this.loadPage("about")} activeClassName="current" className="notCurrent">About</NavLink>
                        <NavLink exact to="/contact" onClick ={() => this.loadPage("contact")} activeClassName="current" className="notCurrent">Contact</NavLink>
                    </div>
                </div>
            </Router>
        );
    }
}
