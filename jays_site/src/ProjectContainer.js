import React from "react";
import Project from "./Project.js";
var projData = require('./ProjData.js');

export default class ProjectContainer extends React.Component {

    state = {
        //i need to set the default values in state to match project 1
        projID: "",
        number: "",
        name: "",
        heading: "",
        description: "",
        image: "",
        carousel_img1: "",
        carousel_img2: "",
        carousel_img3: "",
        carousel_blurb1: "",
        carousel_blurb2: "",
        carousel_blurb3: "",
    };


    componentDidMount () {
        console.log(this.props.projectId);
        if(this.state.projID !== this.props.projectId) {
            let obj = projData.find(obj => obj.projID === this.props.projectId);
            console.log(obj);
            this.setState(obj);
        }
    }

    submitHandler = (obj) => {
        this.setState(obj);
    }

    render() {

        return (

            //will need to pass state down to children component so the correct project content is loaded
            <div className="projectContainer">
                <Project projectData={this.state} submitHandler={this.submitHandler}/>
            </div>
        );
    }
}
