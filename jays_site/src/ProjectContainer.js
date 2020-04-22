import React from "react";
import Project from "./Project.js";
var projData = require('./ProjData.js');

export default class ProjectContainer extends React.Component {

//need to bring state in through props from parent

    componentDidMount () {
       
        // console.log(this.props.projectId); //id from match.params via props from App > here

        //need to setState here with the current object based on params
        // const currentObj = projData.find(obj => obj.projID === this.props.projectId);
        // this.props.changeState(currentObj);
        // console.log(this.props.projectData); //object data from state via props from App > here
    }
    componentDidUpdate (){
        if(this.props.projectData.projID !== this.props.projectId) {
            const currentObj = projData.find(obj => obj.projID === this.props.projectId);
            this.props.changeState(currentObj);
        }
        // console.log(this.props.projectData); 

    }

    render() {

        return (
            <div className="projectContainer">
                <Project projectData={this.props.projectData} currentId={this.props.projectId} submitHandler={this.submitHandler}/>
            </div>
        );
    }
}
