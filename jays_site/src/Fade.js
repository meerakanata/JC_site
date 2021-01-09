import React from 'react';
import Slider from "react-slick";


export default class Fade extends React.Component {

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <div className="carouselHolder">
        <Slider {...settings}>
            <div>
                <div className="eachSlide">
                    <img alt={"need to add text here"} src={this.props.currentObj.carousel[0].slide}/>
                    <div className="eachSlide__blurb">{this.props.currentObj.carousel[0].blurb}</div>
                </div>
            </div>
            <div>
                <div className="eachSlide">
                    <img alt={"need to add text here"} src={this.props.currentObj.carousel[1].slide}/>
                    <div className="eachSlide__blurb">{this.props.currentObj.carousel[1].blurb}</div>
                </div>
            </div>
            <div>
                <div className="eachSlide">
                    <img alt={"need to add text here"} src={this.props.currentObj.carousel[2].slide}/>
                    <div className="eachSlide__blurb">{this.props.currentObj.carousel[2].blurb}</div>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}