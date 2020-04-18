import React from "react";
import Project from "./Project.js";


export default class ProjectContainer extends React.Component {
//going to need to change what's declared in state here
//should be an array, where each object is one of the projects
//each project object should then contain an array with property-value associations
//for each of the bits of content that will need to load on the page for that project
//then all of that state needs to get passed as props to child component in the render method below
    state = {
        projID: "barf",
        number: 0,
        name: "",
        heading: "",
        description: "",
        image: "https://i.imgur.com/3WPEmCJ.jpeg",
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
            this.setState({
                projID: this.props.projectId,
            });
        }
    }
    // componentDidUpdate (prevProps, prevState){

    //     let newID = this.props.projectId; //ID from the URL
    //     let existingID = prevState.projID //ID from existing state
    //     console.log(newID);
    //     console.log(existingID);

    //     if(existingID !== newID) {
    //         this.setState({
    //             projID: newID,
    //         });
    //     }

    // }

    render() {

        return (

            //will need to pass state down to children component so the correct project content is loaded
            <div>
                <Project projectData={this.state}/>
            </div>
        );
    }
}
