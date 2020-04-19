import React from "react";

export default class Project extends React.Component {

// componentDidMount () {
//     console.log(this.props.projectData);
// }
componentDidUpdate () {
    console.log(this.props.projectData);
}

    render() {

        return (
            <div>
                <div className="projMain">
                    <div className="projNav">
                        <div className="projNext"></div>
                        <div className="projNum"></div>
                        <div className="projPrev"></div>
                    </div>
                    <div className="projInfo">
                        <div className="projName">{this.props.projectData.projID}</div>
                        <div className="projHeading">{this.props.projectData.heading}</div>
                        <div className="projDescription">{this.props.projectData.description}</div>
                    </div>
                    <div className="projImage">
                        {/* insert the image tag here */}
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
