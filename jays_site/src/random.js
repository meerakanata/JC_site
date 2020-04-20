import React from "react";
import {Link} from "react-router-dom";
var projData = require('./ProjData.js');
// const previousObjectID = this.backProjID(this.props.projectData.number);
// const currentProjectNum = this.props.projectData.number;

export default class Project extends React.Component {

    state = {
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

// componentDidMount () {
//     console.log(this.props.projectData);
// }
componentDidUpdate () {
    // console.log(this.props.projectData);
    // console.log(this.backProjID(this.props.projectData.number));

}

// backProjNum = (currentProjNum) => {
//     if (currentProjNum === 1){
//         const prevProjNum = 11;
//         return prevProjNum;
//     }
//     else if (currentProjNum >1 && currentProjNum < 12){
//         const prevProjNum = currentProjNum-1;
//         return prevProjNum;
//     }
//     else {
//         console.log("Error with pageBack function declaration");
//     }

// }
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



// so if the current project number is 4
//then i need to check to see if it falls between 1 to 12 (it does)
// so i will have a new variable prevProjNum that i will set the value to be one less than the current project's
//number. So in this instance it would be set to 3.
//Next, I need to find the project object from props that has the same project number (3)
//so I will need to use a function find() and isolate that object
//once i have that object, then I will want to get the projID value from it and return it to where this function was 
//first called in the render () below.

//onClick={this.goPrevProj}

// goPrevProj = () => {
//     console.log("this function has called");
//     console.log(this.props.projectData.number);
//     const currentProjNum = this.props.projectData.number;
//     if (currentProjNum === 1){
//         const prevObj = projData.find(obj => obj.number === 11);
//         this.setState(prevObj);
//         console.log(prevObj);
//     }
//     else if (currentProjNum >1 && currentProjNum < 12){
//         const prevProjNum = currentProjNum-1;
//         const prevObj = projData.find(obj => obj.number === prevProjNum);
//         this.setState(projData[prevObj.number]);
//         console.log(prevObj);

//     }
// }

    render() {

        return (
            <div>
                <div className="projMain">
                    <div className="projNav">
                        <div className="projPrev">
                        {console.log(this.backProjID(this.props.projectData.number))};
                            <Link to={"/work/"+ this.backProjID(this.props.projectData.number)}><img src={"../Icon/Icon w Text/Previous.png"} alt="back arrow"/></Link>
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
