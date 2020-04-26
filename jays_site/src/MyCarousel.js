import React from "react";
import {Link} from "react-router-dom";

export default class MyCarousel extends React.Component {
    
    componentDidMount () {
        
    }
    componentDidUpdate () {
        console.log(this.props.slideId);
    }
    
    setCurrentSlide = (slide) => {
        //render based on the default slide to load
        const currentObj = this.props.currentObj;
        let id = Number(this.props.slideId);
        if(id === 3 || id === 2){
            const prevSlideIndex = id-1;
            const prevSlide = currentObj.carousel[prevSlideIndex].slide;
            return prevSlide;
        }
        else if(id === 1){
            return slide;
        }
    }

managePrevSlidePath = () =>{
    let id = Number(this.props.slideId);
    if(id === 1){
        return "/3";
    }
    else if (id === 2){
        return "/1";
    }
    else if (id === 3){
        return "/2";
    }
}
    render() {
        let id = this.props.currentObj.projID
        let previous = this.managePrevSlidePath();
        return (
            <div className="carousel">
                <div className="carousel__image">
                    <img src={this.setCurrentSlide(this.props.currentObj.carousel[0].slide)} alt="slide1"/>
                </div>
                <div className="carousel__blurb">
                    <div className="carousel__blurb-top"></div>
                    <div className="carousel__blurb-bottom">
                        <div className="prevSlide">
                            <Link to={"/work/"+id+previous}><img src={"../../Icon/Icon w Text/Previous.png"} alt="back arrow"/></Link>
                        </div>
                        <div className="slideOneDot"></div>
                        <div className="slideTwoDot"></div>
                        <div className="slideThreeDot"></div>
                        <div className="nextSlide"></div>
                    </div>
                </div>
            </div>
        );
    }
}

