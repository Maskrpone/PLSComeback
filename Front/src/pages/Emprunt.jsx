import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Emprunt.css";
import { Footer, Header } from "./Components/HeadFoot";
import BoutonRetour from "./Components/BoutonRetour";
import React from "react";
import PageTestCalendar from "./Iframe_calendar";
import "./Popup.css";
import axios from "axios";
import qs from "qs";
import { API_IP } from "../Constants";

export let jsonData = [
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

function Emprunt() {
	const [pictures, setPictures] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://${API_IP}:3000/tools`);

				const formattedData = response.data.map((tool) => ({
					title: tool.name,
					url: tool.image,
					calendar: tool.calendar
				}));

				console.log(formattedData);

				setPictures(formattedData);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []); // Empty dependency array ensures the effect runs once when the component mounts

	/*
    const pictures = [
        {
            title: "Perceuse",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/16045.jpg",
        },
        {
            title: "Perceuse 2",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/19793.jpg",
        },
        {
            title: "Perceuse 3",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/87199.jpg",
        },
        {
            title: "Perceuse 4",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/24035.jpg",
        },
        {
            title: "Perceuse 5",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg",
        },
        {
            title: "Perceuse 6",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg",
        },
        {
            title: "Perceuse 7",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg",
        },
        {
            title: "Perceuse 8",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg",
        },
        {
            title: "Perceuse 9",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg",
        },
        {
            title: "Perceuse 10",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg",
        },
        {
            title: "Perceuse 11",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg",
        },
        {
            title: "Perceuse 12",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg",
        },
        {
            title: "Perceuse 13",
            url: "https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg",
        },
    ];*/

	const [selectedImage, setSelectedImage] = useState(null);

	const openPopup = (index) => {
		const updatedJsonData = [...jsonData];

		try {
			// Modifiez l'objet spécifique avec le nouveau titre
			updatedJsonData[index] = JSON.parse(pictures[index].calendar);

			// Mettez à jour le tableau jsonData
			jsonData = updatedJsonData[index];
		}
		catch (error){
			jsonData = [{
				object_name: pictures[index].title
			}];
			console.error('Erreur d\'analyse JSON :', error.message);
		}
		console.log(jsonData);
		setSelectedImage(index);
	};

	const closePopup = () => {
		setSelectedImage(null);
	};

	return (
		<>
			<Header/>
			<div class="mainEmprunt">

			<header>
				<h1> Tool rental </h1>
				<hr></hr>

			</header>

			{/* <BoutonRetour url="/"/> */}
			<div id="wrapper">
				{pictures.map((picture, index) => (
					<div key={index} className="card" onClick={() => openPopup(index)}>
						<div className="image">
							<img src={picture.url} alt={picture.title} />
						</div>
						<>{picture.title}</>
					</div>
				))}

				{selectedImage !== null && (
					<div className="popup">
						<div className="popup-content">
              <span className="text-white" onClick={closePopup}>
                &times;
              </span>
							<div className="block m-auto text-white text-center text-3xl ">
								<span className="text-white">{jsonData[0].object_name}</span>
							</div>
							<div className="bg-black">
								<PageTestCalendar jsonData={jsonData}/>
							</div>
						</div>
					</div>
				)}
			</div>
			</div>
			<Footer />
		</>
	);
}

export default Emprunt;