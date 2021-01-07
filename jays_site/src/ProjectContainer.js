import React from "react";
import Project from "./Project.js";


export default class ProjectContainer extends React.Component {


    componentDidMount () {
        // console.log(this.props.params);
        // console.log(this.props.projectId);

        //this is the id taken from the URL path for the current page
        const projectId = this.props.projectId;

        //this is the object for the current product page being displayed
        const activeObj = this.props.activeObj;

        //this is the raw data from the RawData-1 module export
        const rawData = this.props.rawData;

        //checking to see if the id for the current product on the page is the same as the id in the URL path
        //if it doesn't match then we will search through the raw project data 
        //to find the object that has the matching project id to what is in the URL path
        //then we invoke the function (passing in the matched object) to set the state so that the active object 
        //stores the correct current project object, this will ensure that when we 
        //load the <Project /> component we will be passing it the correct active object props to display 
        //to match the URL path
        if(activeObj.projID !== projectId){
            const currentObj = rawData.find(obj => obj.projID === projectId);
            this.props.changeState(currentObj);
        }

        
    }
    componentDidUpdate (){
        
    }

    render() {
        return (
            <Project resetPage={this.props.resetPage} activeObj={this.props.activeObj} rawData={this.props.rawData} currentId={this.props.projectId} slideId={this.props.slideId} featImagePosition={this.props.featImagePosition} thumbHandler={this.props.thumbHandler}/>
        );
    }
}
