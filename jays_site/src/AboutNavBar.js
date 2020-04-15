import React from 'react';


export default class AboutNavBar extends React.Component {

    render() {
        return (
            <div className="NavBar">
                <div className="NavBar__menu">
                    <div>Work</div>
                    <div className="activePage">About</div>
                    <div>Contact</div>
                </div>
            </div>
        );
    }
}