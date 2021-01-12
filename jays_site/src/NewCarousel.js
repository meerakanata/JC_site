import React from 'react';
import SwiperCore, { Navigation, Pagination, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation, Pagination,]);



  export default class NewCarousel extends React.Component {
    //need to create a function that will call another function that
    //will update state with the index value of the current slide that is visible 

    render() {
      console.log(this.props.currentObj.carousel);
        return (
          <Swiper key={this.props.currentObj.projNUM}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          //need to call a function onSlideChange that will pass the swiper.activeIndex
          //value as an argument
          onSlideChange={(swiper) => console.log(swiper.activeIndex)}
        >
        <SwiperSlide key={this.props.currentObj.carousel[0].key}><img alt={"need to add text here"} src={this.props.currentObj.carousel[0].slide}/></SwiperSlide>
        <SwiperSlide key={this.props.currentObj.carousel[1].key}><img alt={"need to add text here"} src={this.props.currentObj.carousel[1].slide}/></SwiperSlide>
        <SwiperSlide key={this.props.currentObj.carousel[2].key}><img alt={"need to add text here"} src={this.props.currentObj.carousel[2].slide}/></SwiperSlide>
        
        </Swiper>
        );
    }
}
