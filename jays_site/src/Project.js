import React from "react";
import {Link} from "react-router-dom";
import Collapsible from "./Collapsible.js";
import MyCarousel from "./MyCarousel.js";



export default class Project extends React.Component {


componentDidMount () {
    //console.log(this.props.activeObj);
}
componentDidUpdate () {
    //console.log(this.props.activeObj);
}

currentProject = (currentProjID) => {
    const rawData = this.props.rawData;

    const currentObj = rawData.find(obj => obj.projID === currentProjID);
    return currentObj;
}

backProjID = (currentProjID) => {
    const rawData = this.props.rawData;
    const currentObj = rawData.find(obj => obj.projID === currentProjID);

    if (currentObj.projNUM === 1){
        const prevProjNum = 11;
        const prevObj = rawData.find(obj => obj.projNUM === prevProjNum);
        return prevObj.projID;
    }
    else if (currentObj.projNUM >1 && currentObj.projNUM < 12){
        const prevProjNum = currentObj.projNUM-1;
        const prevObj = rawData.find(obj => obj.projNUM === prevProjNum);
        return prevObj.projID;
    }
}

nextProjID = (currentProjID) => {
    const rawData = this.props.rawData;
    const currentObj = rawData.find(obj => obj.projID === currentProjID);

    if (currentObj.projNUM === 11){
        const nextProjNum = 1;
        const nextObj = rawData.find(obj => obj.projNUM === nextProjNum);
        return nextObj.projID;
    }
    else if (currentObj.projNUM >= 1 && currentObj.projNUM <= 10){
        const nextProjNum = currentObj.projNUM+1;
        const nextObj = rawData.find(obj => obj.projNUM === nextProjNum);
        return nextObj.projID;
    }

}
    render() {

        return (
            <div className="projectContainer">
                <div className="projMain">
                    <div className="projNav">
                        <div className="projPrev">
                            <Link to={"/work/"+ this.backProjID(this.props.currentId)+"/1"}><img src={"../../Icon/Icon w Text/Previous_White.png"} alt="back arrow"/></Link>
                        </div>
                        <div className="projNum">{this.currentProject(this.props.currentId).number}</div>
                        <div className="projNext">
                            <Link to={"/work/"+ this.nextProjID(this.props.currentId)+"/1"}><img src={"../../Icon/Icon w Text/Next_White.png"} alt="forward arrow"/></Link>
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
                    <div className="sideRectangle">
                        <div className="sideRectangleTop">

                        </div>
                    </div>
                    <Collapsible trigger="Development and Production">
                        <MyCarousel activeObj={this.props.activeObj} rawData={this.props.rawData} currentObj={this.currentProject(this.props.currentId)} currentId={this.props.currentId} slideId={this.props.slideId} prevSlide={this.props.prevSlide} />
                    </Collapsible>
                </div>
            </div>
        );
    }
}
