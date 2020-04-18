import React from "react";

export default class Project extends React.Component {
//Need to grab props from parent
//this will tell us which url has been loaded 
//so we can take the id to load the correct project info 
//in to each element 
componentDidMount () {
    console.log(this.props.projectData);
}
componentDidUpdate () {
    console.log(this.props.projectData);
}

    render() {

        return (
            <div className="">
                blah blah blah
            </div>
        );
    }
}
