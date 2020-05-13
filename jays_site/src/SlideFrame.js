import React from "react";


export default class SlideFrame extends React.Component {
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
    render() {

        return (
            <div className="carousel__image">
                <img src={this.setCurrentSlide(this.props.currentObj.carousel[0].slide)} alt="slide"/>
            </div>
        );
    }
}