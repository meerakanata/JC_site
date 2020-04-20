import React from "react";
import {Link} from "react-router-dom";
var projData = require('./ProjData.js');


export default class Project extends React.Component {


componentDidUpdate () {
    // console.log(this.props.projectData);
    // console.log(this.backProjID(this.props.projectData.number));

    // console.log(this.state.projID);
    console.log(this.props.projectData.projID);
    console.log(this.backProjID(this.props.projectData.number));

    // if(this.backProjID(this.props.projectData.number) !== this.props.projectData.projID) {
    //     let obj = projData.find(obj => obj.projID === this.backProjID(this.props.projectData.number));
    //     console.log(obj);
    //     this.setState(obj);
    // }

}

backProjID = (currentProjNum) => {
    if (currentProjNum === 1){
        const prevProjNum = 11;
        const prevObj = projData.find(obj => obj.number === prevProjNum);
        return prevObj.projID;
    }
    else if (currentProjNum >1 && currentProjNum < 12){
        const prevProjNum = currentProjNum-1;
        const prevObj = projData.find(obj => obj.number === prevProjNum);
        return prevObj.projID;
    }

}

goPrevProj = (e) => {
    e.preventDefault();

    let currentProjNum = this.props.projectData.number; //this is the current page's project number
    if (currentProjNum === 1){ //if the project number equals 1 then 
        const prevProjNum = 11; //create new variable and set the value to be the project before #1, which is #11
        const prevObj = projData.find(obj => obj.number === prevProjNum); // finding the object with the matching number property, #11 and storing in new variable prevObj
        //let newID = prevObj.projID; isolating the id from the new variable prevObj and storing in new variable called newID
        this.props.submitHandler(prevObj); //passing the object as a parameter in the submitHandler function callback
    }               //OR
    else if (currentProjNum >1 && currentProjNum < 12){ //if the project number falls between 1 and 12
        const prevProjNum = currentProjNum-1; //create new variable and set the value to be the project before the current one
        const prevObj = projData.find(obj => obj.number === prevProjNum); // finding the object with the matching number property, and storing in new variable prevObj
        //let newID = prevObj.projID; isolating the id from the new variable prevObj and storing in new variable called newID
        this.props.submitHandler(prevObj); //passing the object as a parameter in the submitHandler function callback
    }
    else {
        console.log("There's an error with the eventhandler");
    }

}

    render() {

        return (
            <div>
                <div className="projMain">
                    <div className="projNav">
                        <div className="projPrev">
                        {console.log(this.backProjID(this.props.projectData.number))};
                            {/* <Link to={"/work/"+ this.backProjID(this.props.projectData.number)}><img src={"../Icon/Icon w Text/Previous.png"} alt="back arrow"/></Link> */}
                            <Link to={"/work/"+ this.backProjID(this.props.projectData.number)} onClick={this.goPrevProj}><img src={"../Icon/Icon w Text/Previous.png"} alt="back arrow"/></Link>
                        </div>

                        <div className="projNum">{this.props.projectData.number}</div>
                        <div className="projNext"></div>
                    </div>
                    <div className="projInfo">
                        <div className="projName">{this.props.projectData.name}</div>
                        <div className="projHeading">{this.props.projectData.heading}</div>
                        <div className="projDescription">{this.props.projectData.description}</div>
                    </div>
                    <div className="projImage">
                        <img src={this.props.projectData.image} alt="baseball players"/>
                    </div>
                </div>
                <div className="projDetailTab">
                    <div className="tabRectangleLeft">
                        <div className="tabTitle"></div>
                        <div className="tabExpandClose"></div>
                    </div>
                    <div className="tabRectangleRight"></div>
                </div>
                <div className="projDevInfo">
                    <div className="rectangle"></div>
                    <div className="projDevImage">
                        {/* insert the image tag here */}
                    </div>
                    <div className="blurbContainer">
                        <div className="blurb"></div>
                        <div className="controlsContainer">
                            <div className="carouselControls">
                                <div className="prevSlide"></div>
                                <div className="slide1Box"></div>
                                <div className="slide2Box"></div>
                                <div className="slide3Box"></div>
                                <div className="nextSlide"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
