import React, {useState} from 'react';
import Slider from 'react-slick';
import Arrow from './Arrow';
import PageTestCalendar from "./Iframe_calendar_machines";
import "./Popup.css";
import "./Emprunt.css";
import Modal from 'react-modal';


export let jsonData2 = [
    {
        /*"id": 1,
        "object_name" : "perceuse",
        "title": "personne",
        "description": "",
        "start": "2024-01-08T13:00",
        "end": "2024-01-08T13:45",
        "allDay": true,
        "color": "#009788",
        "editable": false*/
    }
];

function SliderEmprunt({ pictures }) {
    Modal.setAppElement('#root');


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

    const [selectedImage, setSelectedImage] = useState(null);

    const openPopup = (index) => {
        const updatedJsonData = [...jsonData2];

        try {
            updatedJsonData[index] = JSON.parse(pictures[index].calendar);
            jsonData2 = updatedJsonData;
        } catch (error) {
            console.log(pictures[index].title);
            jsonData2 = [{
                object_name: pictures[index].title
            }];
            console.error('Erreur d\'analyse JSON :', error.message);
        }

        console.log(jsonData2);

        setSelectedImage(index);
    };


    const closePopup = () => {
        setSelectedImage(null);
    };

    return (
        <div className="Picture">
            <Slider {...settings}>
                {pictures.map((picture, index) => (
                    <div key={index} className="card" onClick={() => openPopup(index)}>
                        <h3>{picture.title}</h3>
                        <img src={picture.url} alt={picture.title}/>
                    </div>
                ))}

                {selectedImage !== null && (
                    <Modal
                        isOpen={selectedImage !== null}
                        onRequestClose={closePopup}
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)'
                            },
                            content: {
                                maxWidth: '80%', // Ajustez la largeur comme vous le souhaitez
                                margin: 'auto'
                            }
                        }}
                    >
          <span className="text-black" onClick={closePopup}>
            &times;
          </span>
                        <div className="block m-auto text-white text-center text-3xl">
                            <span className="text-black">{jsonData2[jsonData2.length-1].object_name}</span>
                        </div>
                        <div className="bg-black">
                            <PageTestCalendar jsonData2={jsonData2} />
                        </div>
                    </Modal>
                )}
            </Slider>

        </div>
    );
}

export default SliderEmprunt;