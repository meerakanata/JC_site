import React from 'react';


export default class ContactNavBar extends React.Component {

    render() {
        return (
            <div className="NavBar">
                <div className="NavBar__menu">
                    <div>Work</div>
                    <div>About</div>
                    <div className="activePage">Contact</div>
                </div>
            </div>
        );
    }
}