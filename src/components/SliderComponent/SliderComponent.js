import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css'; // Make sure to create this file
import slide1 from './../../components/images/sliderimg5.jpg';
import slide2 from './../../components/images/sliderimg2.jpeg';
import slide3 from './../../components/images/sliderimg3.jpeg';
import slide4 from './../../components/images/sliderimg4.jpeg';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={slide1} className="myimg" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={slide2} className="myimg" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={slide3} className="myimg" alt="Slide 3" />
        </div>
        <div className="slide">
          <img src={slide4} className="myimg" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
