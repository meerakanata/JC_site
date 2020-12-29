import React from "react";
//import {Link} from "react-router-dom";
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

    displayImages = () => { 
        const rawDataArr = this.props.rawData;
        //return rawDataArr.map((obj) => <Card src={obj.image} alt={obj.alt} key={obj.projNUM} id={obj.projNUM} />);  
        return rawDataArr.map((obj) => <img src={obj.image} alt={obj.alt} id={obj.projNUM}/>);      
    }

        componentDidMount = () => {
        const config = {
            duration: 2500,
        }
        sr.reveal('img', config)
      }
      componentDidUpdate = () => {
        const config = {
            duration: 2500,
        }
    
        sr.reveal('img', config)
      }
    render() {
        //window.addEventListener('resize', this.checkBounding);
        return (
            <div className="homeGallery">
                <div className="homeGallery__Main">
                    <div className="cardContainer">
                        {this.displayImages()}
                    </div>
                    
                </div>
                {/* <div className="homeGallery__More">
                    {this.moreProjects()}
                </div> */}
            </div>
        );
    }
}


