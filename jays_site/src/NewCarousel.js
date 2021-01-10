import React from 'react';
import SwiperCore, { Navigation, Pagination, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation, Pagination,]);

  export default class NewCarousel extends React.Component {
    
    render() {
        return (
          <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          //need to call a function onSlideChange that will pass the swiper.activeIndex value
          //to a Handler function that will update State 

          //then in Project.js, for the back and next buttons, trigger a function that will
          //check to see if the value of the activeIndex in state is 0, and if it isn't it will 
          //reset the value to 0... 

          //then need to somehow connect that value from state to dynamically render the slides...
          onSlideChange={(swiper) => console.log(swiper.activeIndex)}
        >
          <SwiperSlide><img alt={"need to add text here"} src={this.props.currentObj.carousel[0].slide}/></SwiperSlide>
          <SwiperSlide><img alt={"need to add text here"} src={this.props.currentObj.carousel[1].slide}/></SwiperSlide>
          <SwiperSlide><img alt={"need to add text here"} src={this.props.currentObj.carousel[2].slide}/></SwiperSlide>
        
        </Swiper>
        );
    }
}
