import React from 'react';
import WorkNavBar from './WorkNavBar.js';
import AboutNavBar from './AboutNavBar.js';
import ContactNavBar from './ContactNavBar.js';

export default class Header extends React.Component {

    
    pageSelected = (props) => {
        const pageId = props;
        console.log(pageId);
        if (pageId === "work"){
            return <WorkNavBar />;
        }
        else if (pageId === "about"){
            return <AboutNavBar />;
        }
        else if (pageId === "contact"){
            return <ContactNavBar />;
        }
    }

    render() {

        return (
            <div className="header">
                <div className="branding">
                    <div className="name">jason clerk</div>
                    <div className="industry">
                        <div className="line1">industrial</div>
                        <div className="line2">design</div>
                    </div>
                </div>
                {this.pageSelected(this.props.id)}
            </div>
        );
    }
}


