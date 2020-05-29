import React from 'react';
import Slider from "react-slick";
//import { baseUrl } from "./config";
//var rawData = require('./RawData.js');


export default class Fade extends React.Component {
    // setCurrentSlide = (slide) => {
    //     //render based on the default slide to load
    //     const currentObj = this.props.currentObj;
    //     let id = Number(this.props.slideId);
    //     if(id === 3 || id === 2){
    //         const prevSlideIndex = id-1;
    //         const prevSlide = currentObj.carousel[prevSlideIndex].slide;
    //         return prevSlide;
    //     }
    //     else if(id === 1){
    //         return slide;
    //     }
    // }

    // setCurrentBlurb = (blurb) => {
    //     //render based on the default slide to load
    //     const currentObj = this.props.currentObj;
    //     let id = Number(this.props.slideId);
    //     if(id === 3 || id === 2){
    //         const prevSlideIndex = id-1;
    //         const prevBlurb = currentObj.carousel[prevSlideIndex].blurb;
    //         return prevBlurb;
    //     }
    //     else if(id === 1){
    //         return blurb;
    //     }
    // }

    // managePrevSlidePath = () =>{
    //     let id = Number(this.props.slideId);
    //     if(id === 1){
    //         return "/3";
    //     }
    //     else if (id === 2){
    //         return "/1";
    //     }
    //     else if (id === 3){
    //         return "/2";
    //     }
    // }

    // manageNextSlidePath = () =>{
    //     let id = Number(this.props.slideId);
    //     if(id === 1){
    //         return "/2";
    //     }
    //     else if (id === 2){
    //         return "/3";
    //     }
    //     else if (id === 3){
    //         return "/1";
    //     }
    // }

    // showActiveSlideUI = (position) => {
        
    //     let id = Number(this.props.slideId);
    //     if(id === position){
    //         return <div className="filledDot"></div>;
    //     }
    //     else if(id !== position){
    //         return <div className="emptyDot"></div>;
    //     }
    // }



  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    // let id = this.props.currentObj.projID
    // let previous = this.managePrevSlidePath();
    // let next = this.manageNextSlidePath();
    return (
      <div className="carouselHolder">
        <Slider {...settings}>
            <div>
                <div className="eachSlide">
                    <img src={this.props.currentObj.carousel[0].slide}/>
                    <div className="eachSlide__blurb">{this.props.currentObj.carousel[0].blurb}</div>
                </div>
            </div>
            <div>
                <div className="eachSlide">
                    <img src={this.props.currentObj.carousel[1].slide}/>
                    <div className="eachSlide__blurb">{this.props.currentObj.carousel[1].blurb}</div>
                </div>
            </div>
            <div>
                <div className="eachSlide">
                    <img src={this.props.currentObj.carousel[2].slide}/>
                    <div className="eachSlide__blurb">{this.props.currentObj.carousel[2].blurb}</div>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}