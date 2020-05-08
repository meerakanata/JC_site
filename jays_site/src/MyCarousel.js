import React from "react";
import {Link} from "react-router-dom";

export default class MyCarousel extends React.Component {
    
    componentDidMount () {
        
    }
    componentDidUpdate () {
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

    setCurrentBlurb = (blurb) => {
        //render based on the default slide to load
        const currentObj = this.props.currentObj;
        let id = Number(this.props.slideId);
        if(id === 3 || id === 2){
            const prevSlideIndex = id-1;
            const prevBlurb = currentObj.carousel[prevSlideIndex].blurb;
            return prevBlurb;
        }
        else if(id === 1){
            return blurb;
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

    manageNextSlidePath = () =>{
        let id = Number(this.props.slideId);
        if(id === 1){
            return "/2";
        }
        else if (id === 2){
            return "/3";
        }
        else if (id === 3){
            return "/1";
        }
    }

    showActiveSlideUI = (position) => {
        
        let id = Number(this.props.slideId);
        if(id === position){
            return <div className="filledDot"></div>;
        }
        else if(id !== position){
            return <div className="emptyDot"></div>;
        }
    }

    render() {
        let id = this.props.currentObj.projID
        let previous = this.managePrevSlidePath();
        let next = this.manageNextSlidePath();
        return (
            <div className="carousel">
                <div className="carousel__image">
                    <img src={this.setCurrentSlide(this.props.currentObj.carousel[0].slide)} alt="slide"/>
                </div>
                <div className="carousel__blurb">
                    <div className="carousel__blurb-top">
                        <div className="actualBlurb">
                            {this.setCurrentBlurb(this.props.currentObj.carousel[0].blurb)}
                        </div>
                    </div>
                    <div className="carousel__blurb-bottom">
                        <div className="prevSlide">
                            <Link to={"/work/"+id+previous}><img src={"../../Icon/Icon w Text/Previous_Dark.png"} alt="back arrow"/></Link>
                        </div>
                        <div className="slideOneDot">
                            {this.showActiveSlideUI(1)}
                        </div>
                        <div className="slideTwoDot">
                            {this.showActiveSlideUI(2)}
                        </div>
                        <div className="slideThreeDot">
                            {this.showActiveSlideUI(3)}
                        </div>
                        <div className="nextSlide">
                            <Link to={"/work/"+id+next}><img src={"../../Icon/Icon w Text/Next_Dark.png"} alt="forward arrow"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

