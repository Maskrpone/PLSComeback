import { Link } from "react-router-dom";
import "./Emprunt.css";
import { Footer, Header } from "./Components/HeadFoot";

import axios from "axios";
import qs from "qs";
import { API_IP } from "../Constants";

import BoutonRetour from "./Components/BoutonRetour";
import React, { useState, useEffect } from "react";

function Emprunt() {
	const [pictures, setPictures] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://${API_IP}:3000/tools`);

				const formattedData = response.data.map((tool) => ({
					title: tool.name,
					url: tool.image,
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

	return (
		<>
			<Header />
			<header>
				<h1> Tool rental </h1>
			</header>

			<BoutonRetour url="/" />

			<div id="wrapper">
				{pictures.map((picture, index) => (
					<div key={index} className="card">
						<img src={picture.url} alt={picture.title} />
						{/* <quote>Stock:</quote> */}
						<>{picture.title}</>

						{/* <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                        </span>
                            <span class="button-text">Emprunter</span>
                        </button> */}
					</div>
				))}
			</div>
			<Footer />
		</>
	);
}

export default Emprunt;
