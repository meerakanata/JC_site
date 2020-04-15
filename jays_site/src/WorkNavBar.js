import React from 'react';


export default class WorkNavBar extends React.Component {

    render() {
        return (
            <div className="NavBar">
                <div className="NavBar__menu">
                    <div className="activePage">Work</div>
                    <div>About</div>
                    <div>Contact</div>
                </div>
            </div>
        );
    }
}