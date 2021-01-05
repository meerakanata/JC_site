import React from "react";
import {Link} from "react-router-dom";
import MoreContent from "./MoreContent";
import sr from './scrollReveal.js';
//import Card from "./Card";
// var rawData = require('./RawData.js');


export default class Work2 extends React.Component {
    
    loadMore = (e) => {
        e.preventDefault();
        const buttonClicked = true;
        this.props.loadMoreHandler(buttonClicked);
    }
    // checkBounding = () => {
    //     var boundingArr = [];

    //     for(var i=1; i<17; i++){
    //         boundingArr.push(document.getElementById(i).getBoundingClientRect());
    //         boundingArr.forEach(element => element.isVisible = false);
    //     }
    //     console.log(boundingArr);
    //     console.log(window.innerHeight);
    //     console.log(window.innerWidth);
    //     boundingArr.forEach(element => {
    //         // if (element.top === element.bottom){
    //         //     return element.isVisible = false;
    //         // } 
    //         // else 
    //         if (element.top >= 0 && element.left >= 0 && element.bottom <= (window.innerHeight || document.documentElement.clientHeight) && element.right <= (window.innerWidth || document.documentElement.clientWidth)){
    //             return element.isVisible = true;
    //         }});
    // }
    // componentDidMount () {
    //     setTimeout(this.checkBounding(), 3000);
    // }

    

    moreProjects = () => {
        
        const loadMore = this.props.loadMore;
        if(loadMore === true){
            return <MoreContent rawData={this.props.rawData}/>
        }
        else{
            return <div className="loadMoreButton"><div className="loadMoreButton__text">Load more products</div><div className="loadMoreButton__button" onClick={this.loadMore}>+</div></div>
        }
    }

    displayImagesDesk = () => { 
        const rawDataArr = this.props.rawData;
        //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
        //return rawDataArr.map((obj) => <Card src={obj.image} alt={obj.alt} key={obj.projNUM} id={obj.projNUM} />);  
        return rawDataArr.map((obj) => <span><Link to={"/work/"+obj.projID+"/1"}><img src={obj.image} alt={obj.alt} key={obj.projNUM} id={obj.projNUM}/></Link></span>);      
    }
    displayImagesMob = () => { 
    //Tablet image desired array sequence: 1, 2, 3, 4, 5, 7, 6, 8, 9, 10, 12, 11, 13, 15, 14, 16
        const rawDataArr = this.props.rawData; 
        const newTabArr = [...rawDataArr];
        newTabArr.splice(5, 1);
        newTabArr.splice(9,1)
        newTabArr.splice(11,1)
        newTabArr.splice(6, 0, rawDataArr[5]);
        newTabArr.splice(11, 0, rawDataArr[10]);
        newTabArr.splice(14, 0, rawDataArr[13]);
        return newTabArr.map((obj) => <img src={obj.image} alt={obj.alt} key={obj.projNUM} id={obj.projNUM}/>);  
    }
    componentDidMount = () => {
        const config = {
            duration: 2500,
            delay: 400,
        }
        sr.reveal('img', config)
      }
    componentDidUpdate = () => {
        const config = {
            duration: 2500,
            delay: 400,
        }
        sr.reveal('img', config)
    }

    render() {
        return (
            <div className="homeGallery">
                <div className="homeGallery__Main">
                    <div className="cardContainerDesk">
                        {this.displayImagesDesk()}
                    </div>
                    <div className="cardContainerMob">
                            {this.displayImagesMob()}
                    </div>
                </div>
                {/* <div className="homeGallery__More">
                    {this.moreProjects()}
                </div> */}
            </div>
        );
    }
}


