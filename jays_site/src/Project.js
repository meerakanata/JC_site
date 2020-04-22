
import React from "react";
import {Link} from "react-router-dom";
import Collapsible from "./Collapsible.js";
var projData = require('./ProjData.js');


export default class Project extends React.Component {

    //isolate the current object using the id from params
    //use this object to then populate the content in the render



componentDidMount () {
    // console.log(this.props.projectData); //object data from state via props from App > ProjectContainer > here
    // console.log(this.props.currentId); //id from match.params via props from App > ProjectContainer > here
}
componentDidUpdate () {
    // console.log(this.props.projectData); //object data from state via props from App > ProjectContainer > here

}

currentProject = (currentProjID) => {
    const currentObj = projData.find(obj => obj.projID === currentProjID);
    return currentObj;
}

backProjID = (currentProjID) => {
    //need to find the # object using the current ID
    const currentObj = projData.find(obj => obj.projID === currentProjID);

    if (currentObj.projNUM === 1){
        const prevProjNum = 11;
        const prevObj = projData.find(obj => obj.projNUM === prevProjNum);
        return prevObj.projID;
    }
    else if (currentObj.projNUM >1 && currentObj.projNUM < 12){
        const prevProjNum = currentObj.projNUM-1;
        const prevObj = projData.find(obj => obj.projNUM === prevProjNum);
        return prevObj.projID;
    }
}

nextProjID = (currentProjID) => {
    const currentObj = projData.find(obj => obj.projID === currentProjID);

    if (currentObj.projNUM === 11){
        const nextProjNum = 1;
        const nextObj = projData.find(obj => obj.projNUM === nextProjNum);
        return nextObj.projID;
    }
    else if (currentObj.projNUM >= 1 && currentObj.projNUM <= 10){
        const nextProjNum = currentObj.projNUM+1;
        const nextObj = projData.find(obj => obj.projNUM === nextProjNum);
        return nextObj.projID;
    }

}
    render() {

        return (
            <div className="projectContainer">
                <div className="projMain">
                    <div className="projNav">
                        <div className="projPrev">
                            <Link to={"/work/"+ this.backProjID(this.props.currentId)}><img src={"../Icon/Icon w Text/Previous.png"} alt="back arrow"/></Link>
                        </div>
                        <div className="projNum">{this.currentProject(this.props.currentId).number}</div>
                        <div className="projNext">
                            <Link to={"/work/"+ this.nextProjID(this.props.currentId)}><img src={"../Icon/Icon w Text/Next.png"} alt="forward arrow"/></Link>
                        </div>
                    </div>
                    <div className="projInfo">
                        <div className="projName">{this.currentProject(this.props.currentId).name}</div>
                        <div className="projHeading">{this.currentProject(this.props.currentId).heading}</div>
                        <div className="projDescription">{this.currentProject(this.props.currentId).description}</div>
                    </div>
                    <div className="projImage">
                        <img src={this.currentProject(this.props.currentId).image} alt="baseball players"/>
                    </div>
                </div>
                <div className="projDetailTab">
                    <div className="sideRectangle"></div>
                    <Collapsible trigger="Development and Production">
                        <p>This is the collapsible content. It can be any element or React component you like.</p>
                        <p>It can even be another Collapsible component. Check out the next section!</p>
                    </Collapsible>
                    {/* <div className="tabRectangleLeft">
                        <div className="tabTitle"></div>
                        <div className="tabExpandClose"></div>
                    </div>
                    <div className="tabRectangleRight"></div> */}
                </div>
                <div className="testBottomRect"></div>
                <div className="projDevInfo">
                    <div className="rectangle"></div>
                    <div className="projDevImage">{/* insert the image tag here */}
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
