import React from "react";
import MyForm from "./MyForm";

export default class Contact1 extends React.Component {

    render() {

        return (
            <div className="contactPage">
                <div className="contactMain">
                    <div className="contactMain__Side">
                    </div>
                    <div className="contactMain__Info">
                        <div className="contactMain__Info-Heading">Contact Me</div>
                        <div className="contactMain__Info-Intro"></div>
                        <MyForm />
                    </div>
                    <div className="contactImage">
                    </div>
                </div>
            </div>
        );
    }
}
