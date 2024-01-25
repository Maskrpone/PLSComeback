import React, {useState} from 'react';
import Slider from 'react-slick';
import Arrow from './Arrow'
import Cookies from "js-cookie";



function SliderAcceuil({ pictures }) {

    const myCookieValue = Cookies.get('user_data');
    let admin = (myCookieValue !== undefined) ? JSON.parse(myCookieValue).isAdmin : false;

    const [isVisible, setIsVisible] = useState(false);

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

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const click = (type) => {
        switch (type) {
            case 'Consumables':
                window.location.href = "/pages/pages_components";
                break;
            case 'Loan':
                if (admin==true){
                    window.location.href = "/pages/pages_emprunt";
                    break;
                }
                window.location.href = "/pages/Emprunt";
                break;
            case 'Machines':
                window.location.href = "/pages/machines";
                break;
            default:
                // Traitement par défaut si le type n'est pas reconnu
                break;
        }
    };

    const wrapper = (type) => {
        toggleVisibility();
        click(type);
    };



    return (
        <div className="Picture">
            <Slider {...settings}>
                {pictures.map((picture, index) => (
                    <div key={index} >
                        <h3>{picture.title}</h3>
                        <img src={picture.url} alt={picture.title} />
                        <button id={picture.title} className="learn-more" onClick={() => wrapper(picture.title)}>
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">GO</span>
                        </button>

                    </div>
                ))}
            </Slider>

        </div>
    );
}

export default SliderAcceuil;