import React from 'react';
import Slider from 'react-slick';
import Arrow from './Arrow'

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
 // Obtenir la largeur de l'écran
 const largeurEcran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
 // Définir slidesToShow en fonction de la largeur de l'écran
 if (largeurEcran < 700) {
     settings.slidesToShow = 1;
 } else {
     settings.slidesToShow = 3;
 }
 
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