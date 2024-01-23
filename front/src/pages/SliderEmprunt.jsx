import React from 'react';
import Slider from 'react-slick';
import Arrow from './machines'

function SliderEmprunt({ pictures }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Arrow className="slick-prev" direction="prev" />,
    nextArrow: <Arrow className="slick-next" direction="next" />,
  };

  return (
    <div className="Picture">
      <Slider {...settings}>
        {pictures.map((picture, index) => (
          <div key={index} >
            <h3>{picture.title}</h3>
            <img src={picture.url} alt={picture.title} />
            
          </div>
        ))}
      </Slider>

    </div>
  );
}

export default SliderEmprunt;