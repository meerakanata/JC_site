import React from "react";
import Project from "./Project.js";


export default class ProjectContainer extends React.Component {


    componentDidMount () {
        // console.log(this.props.params);
        // console.log(this.props.projectId);
        const projectId = this.props.projectId;
        const activeObj = this.props.activeObj;
        const rawData = this.props.rawData;

        if(activeObj.projID !== projectId){
            const currentObj = rawData.find(obj => obj.projID === projectId);
            this.props.changeState(currentObj);
        }

        
    }
    componentDidUpdate (){
        
    }

    render() {
        return (
            <Project resetPage={this.props.resetPage} activeObj={this.props.activeObj} rawData={this.props.rawData} currentId={this.props.projectId} slideId={this.props.slideId} />
        );
    }
}
