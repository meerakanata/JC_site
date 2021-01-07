import React from "react";
import {Link} from "react-router-dom";
import Fade from "./Fade.js";
import Collapsible from "./Collapsible.js";
//import { push } from "./AboutData.js";
// import MyCarousel2 from "./MyCarousel2.js";



export default class Project extends React.Component {


// componentDidMount () {
    
// }
componentDidUpdate () {
    //console.log(this.props.featImagePosition);
    
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

displayThumbs = (currentProjID) => {
    //need to grab the current obj
    const rawData = this.props.rawData;
    const currentObj = rawData.find(obj => obj.projID === currentProjID);

    //need to grab the featureImage obj and store in a variable I can use
    const projImgArr = currentObj.featureImage;
    //need to create a function that will run through each of the thumbnails.
    //the function should check if the thumbnail has a value or if it is empty. And if it is empty we don't display it.
    const thumbsToShowArr  = [];
    console.log(projImgArr);
    projImgArr.forEach(element => {
        if(element.image !== " "){
            thumbsToShowArr.push(element);
        }
        return thumbsToShowArr;
    });
    //need to adjust the next line of code, need to include an onClick event handler
    //so when someone clicks on the thumbnail, it changes the main image to display the chosen image
    return thumbsToShowArr.map((obj) => <img src={obj.image} onClick={this.swapThumb} key={obj.id} id={obj.id} className="thumbContainer__thumb" alt={"need to put a message in"}/>);
}
swapThumb = (e) => {
    e.preventDefault();
    //console.log(e.target.id);

    const thumbClickedID = e.target.id - 1;
    this.props.thumbHandler(thumbClickedID);
    //need to determine which thumbnail was clicked

    

    //then need to update state with the correct featureImage value. 
    //To change state I'll need to call a function and pass it the new value of featureImage.
    //Since the function needs to change state, it will need to live in App.js, 
    //but it will be passed down to this component by props.
    // Example:
    // const thumbClicked = true;
    // this.props.thumbHandler(thumbClicked);
}
    render() {
    
        return (
            <div className="projectContainer">
                <div className="projMain">
                    <div className="projMain__Left">
                        <div className="projMain__Left-Nav">
                            <div className="Prev">
                                <Link to={"/work/"+ this.backProjID(this.props.currentId)+"/1"}><img src={"../../Icon/Icon w Text/Previous_Dark.png"} alt="back arrow"/></Link>
                            </div>
                            <div className="Num">
                                {this.currentProject(this.props.currentId).number}
                            </div>
                            <div className="Next">
                                <Link to={"/work/"+ this.nextProjID(this.props.currentId)+"/1"}><img src={"../../Icon/Icon w Text/Next_Dark.png"} alt="forward arrow"/></Link>
                            </div>
                        </div>
                        <div className="projMain__Left-Info">
                            <div className="Name">{this.currentProject(this.props.currentId).name}</div>
                            <div className="Heading">{this.currentProject(this.props.currentId).heading}</div>
                            <div className="Description">{this.currentProject(this.props.currentId).description}</div>
                        </div>
                    </div>
                    <div className="projMain__Image">
                        <img src={this.currentProject(this.props.currentId).featureImage[this.props.featImagePosition].image} alt="baseball players"/>
                        <div className="thumbContainer">
                            {this.displayThumbs(this.props.currentId)}
                        </div>
                    </div>
                </div>
                <div className="projDetailTab">
                    <div className="projDetailTab__sideRect">
                        <div className="projDetailTab__sideRect-Top">
                        </div>
                    </div>
                    <Collapsible trigger="Development &amp; Production">
                        <Fade activeObj={this.props.activeObj} rawData={this.props.rawData} currentObj={this.currentProject(this.props.currentId)} currentId={this.props.currentId} slideId={this.props.slideId}/>
                        {/* <MyCarousel2 activeObj={this.props.activeObj} rawData={this.props.rawData} currentObj={this.currentProject(this.props.currentId)} currentId={this.props.currentId} slideId={this.props.slideId} /> */}
                    </Collapsible>
                </div>
            </div>
        );
    }
}
