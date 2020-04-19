import React from "react";
import Project from "./Project.js";
var projData = require('./ProjData.js');

export default class ProjectContainer extends React.Component {

    state = {
        //i need to set the default values in state to match project 1
        projID: "sittris",
        number: 1,
        name: "sittris",
        heading: "Healthcare Seating System",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac turpis. Nulla pellentesque dignissim enim sit amet. Egestas congue quisque egestas diam in arcu cursus. ",
        image: "../stock_PlaceholderImage.png",
        carousel_img1: "../stock_PlaceholderImage.png",
        carousel_img2: "../stock_PlaceholderImage.png",
        carousel_img3: "../stock_PlaceholderImage.png",
        carousel_blurb1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        carousel_blurb2: "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        carousel_blurb3: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    };


    componentDidMount () {
        console.log(this.props.projectId);
        if(this.state.projID !== this.props.projectId) {
            //here instead of setting state just for the page id, i need to 
            //run over each data set to find the object with the matching id
            //and then set state with the new values for the matching project that 
            //i want to load on the page
            let obj = projData.find(obj => obj.projID === this.props.projectId);
            console.log(obj);
            this.setState(obj);
            // this.setState({
            //     projID: this.props.projectId,

            // });
        }
    }

    render() {

        return (

            //will need to pass state down to children component so the correct project content is loaded
            <div className="projectContainer">
                <Project projectData={this.state}/>
            </div>
        );
    }
}
