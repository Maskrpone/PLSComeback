import { useState } from "react";
import { Link } from "react-router-dom";
import "./Emprunt.css";
import { Footer, Header } from "./Components/HeadFoot";
import BoutonRetour from "./Components/BoutonRetour";
import React from "react";
import PageTestCalendar from "./Iframe_calendar";
import "./Popup.css";

export let jsonData = [
	{
		"id": 1,
		"object_name" : "perceuse",
		"title": "personne",
		"description": "",
		"start": "2024-01-08T13:00",
		"end": "2024-01-08T13:45",
		"allDay": true,
		"color": "#009788",
		"editable": false
	}
];

function Emprunt() {
	const pictures = [
		{ title: 'Perceuse', url: 'https://cdn.toolstation.fr/images/141021-FR/250/16045.jpg' },
		{ title: 'Perceuse 2', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19793.jpg' },
		{ title: 'Perceuse 3', url: 'https://cdn.toolstation.fr/images/141021-FR/250/87199.jpg' },
		{ title: 'Perceuse 4', url: 'https://cdn.toolstation.fr/images/141021-FR/250/24035.jpg' },
		{ title: 'Perceuse 5', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
		{ title: 'Perceuse 6', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
		{ title: 'Perceuse 7', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
		{ title: 'Perceuse 8', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
		{ title: 'Perceuse 9', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
		{ title: 'Perceuse 10', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
		{ title: 'Perceuse 11', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
		{ title: 'Perceuse 12', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
		{ title: 'Perceuse 13', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },

	]

	const [selectedImage, setSelectedImage] = useState(null);

	const openPopup = (index) => {
		const updatedJsonData = [...jsonData];

		// Modifiez l'objet spécifique avec le nouveau titre
		updatedJsonData[0].object_name = pictures[index].title;

		// Mettez à jour le tableau jsonData
		jsonData = updatedJsonData;

		setSelectedImage(index);
	};

	const closePopup = () => {
		setSelectedImage(null);
	};

	return (
		<>
			<Header/>
			<header>
				<h1> Tool rental </h1>
			</header>

			<BoutonRetour url="/"/>
			<div id="wrapper">
				{pictures.map((picture, index) => (
					<div key={index} className="card" onClick={() => openPopup(index)}>
						<img src={picture.url} alt={picture.title} />
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
			<Footer />
		</>
	);
}

export default Emprunt;