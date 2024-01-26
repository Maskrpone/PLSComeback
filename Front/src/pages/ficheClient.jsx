import { Link } from "react-router-dom";
import "./ficheClient.css";
import { Footer, Header } from "./Components/HeadFoot";
import BoutonRetour from "./Components/BoutonRetour";
import axios from "axios";
import { API_IP } from "../Constants";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import "./Calendar.css";
import "./ButtonResa.css";
import { QRCode } from "react-qrcode-logo";
import Cookies from "js-cookie";

let DATA_EXAMPLES;

function FicheClient() {
	// Récupérer tous les cookies
	const allCookies = Cookies.get();

	// Afficher tous les cookies
	console.log(allCookies);

	const [isFullscreen, setIsFullscreen] = useState(false);

	// Ou récupérer un cookie spécifique par son nom
	const specificCookie = Cookies.get("user_data");

	// Afficher le cookie spécifique
	console.log(specificCookie);

	const jsonCookie = JSON.parse(specificCookie);

	console.log(jsonCookie);

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(
					"Request -> " +
						`http://${API_IP}:3000/history/${jsonCookie.username}`,
				);
				const response = await axios.get(
					`http://${API_IP}:3000/history/${jsonCookie.username}`,
				);

				// const formattedData = response.data.map((machine) => ({
				//   title: machine.name,
				//   url: machine.image,
				// }));

				console.log(response.data);
				DATA_EXAMPLES = response.data;
				dataPut();
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []); // Empty dependency array ensures the effect runs once when the component mounts

	//0 = Equipement
	//1 = Consommable
	//2 = Machine

	const [type0Data, setType0Data] = useState([]);
	const [type1Data, setType1Data] = useState([]);
	const [type2Data, setType2Data] = useState([]);

	function dataPut() {
		// Extract the items from history
		const items = DATA_EXAMPLES.history.items;

		console.log(items);

		// Filter data based on type and update state accordingly, also add the name of the item
		const type0FilteredData = Object.values(items).filter(
			(item) => item.type === 0,
		);
		const type1FilteredData = Object.values(items).filter(
			(item) => item.type === 1,
		);
		const type2FilteredData = Object.values(items).filter(
			(item) => item.type === 2,
		);

		// Loop through the filtered data and add the name of the item found in items
		for (const item of type0FilteredData) {
			// find item._id in items and add the name to the object
			const item_name = Object.keys(items).find(
				(key) => items[key]._id === item._id,
			);
			item.name = item_name;
		}

		for (const item of type1FilteredData) {
			// find item._id in items and add the name to the object
			const item_name = Object.keys(items).find(
				(key) => items[key]._id === item._id,
			);
			item.name = item_name;
		}

		for (const item of type2FilteredData) {
			// find item._id in items and add the name to the object
			const item_name = Object.keys(items).find(
				(key) => items[key]._id === item._id,
			);
			item.name = item_name;
		}

		setType0Data(type0FilteredData);
		setType1Data(type1FilteredData);
		setType2Data(type2FilteredData);
	}

	return (
		<>
			<Header />
			<div id="ficheClient">
				<div className="TableClient" id="TableClientConsommable">
					<h3>CONSUMABLES</h3>
					<table>
						<thead>
							<tr>
								<th>DATE</th>
								<th>NAME</th>
								<th>QUANTITY</th>
								{/* <th>QR CODE</th> */}
							</tr>
						</thead>
						<tbody>
							{type1Data.map((item, index) => (
								<tr key={index}>
									<td>{item.date.split("T")[0]}</td>
									<td>{item.name}</td>
									<td>{item.quantity}</td>
									{/* <td>
										<QRCode
											value={{
												username: jsonCookie.username,
												name: item.name,
												quantity: item.quantity,
												plannedReturnDate: item.date,
											}}
											size={100}
											fgColor={"#3f2a55"}
											eyeColor={"#ff5c39"}
											enableCORS={true}
											qrStyle="dots"
											eyeRadius={10}
											id={"QR"}
										/>
									</td> */}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div class="TableClient" id="tableClientEmprunt">
					<h3> LOAN</h3>
					<table>
						<thead>
							<tr>
								<th>DATE</th>
								<th>NAME</th>
								<th>QUANTITY</th>
								<th>QR CODE</th>
							</tr>
						</thead>
						<tbody>
						{type0Data.map((item, index) => (
  <tr key={index}>
									<td>{item.date.split("T")[0]}</td>
									<td>{item.name}</td>
									<td>{item.quantity}</td>

									<td onClick={() => setIsFullscreen(true)}>
      <QRCode
        value={`http:/10.224.1.166:3000/pages/ValidateBooking/?username=${jsonCookie.username}&name=${item.name}&quantity=${item.quantity}&plannedReturnDate=${item.date}`}
        size={isFullscreen ? window.innerWidth : 100}
        fgColor={"#3f2a55"}
        eyeColor={"#ff5c39"}
        enableCORS={true}
        qrStyle="dots"
        eyeRadius={10}
        id={"QR"}
      />
    </td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div class="TableClient" id="tableClientMachines">
					<h3>MACHINES</h3>
					<table>
						<thead>
							<tr>
								<th>DATE</th>
								<th>NAME</th>
								<th>QUANTITY</th>
								{/* <th>QR CODE</th> */}
							</tr>
						</thead>
						<tbody>
							{type2Data.map(
								(item, index) => (
									console.log({
										username: jsonCookie.username,
										name: item.name,
										quantity: item.quantity,
										plannedReturnDate: item.date,
									}),
									(
										<tr key={index}>
											<td>{item.date.split("T")[0]}</td>
											<td>{item.name}</td>
											<td>{item.quantity}</td>
											{/* <td>
												<QRCode
													value={{
														username: jsonCookie.username,
														name: item.name,
														quantity: item.quantity,
														plannedReturnDate: item.date,
													}}
													size={100}
													fgColor={"#3f2a55"}
													eyeColor={"#ff5c39"}
													enableCORS={true}
													qrStyle="dots"
													eyeRadius={10}
													id={"QR"}
												/>
											</td> */}
											
											{isFullscreen && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      zIndex: 1000,
    }}
    onClick={() => setIsFullscreen(false)}
  >
    <QRCode
      value={`http:/10.224.1.166:3000/pages/ValidateBooking/?username=${jsonCookie.username}&name=${item.name}&quantity=${item.quantity}&plannedReturnDate=${item.date}`}
      size={window.innerWidth}
      fgColor={"#3f2a55"}
      eyeColor={"#ff5c39"}
      enableCORS={true}
      qrStyle="dots"
      eyeRadius={10}
      id={"QR"}
    />
  </div>
)}
										</tr>
									)
								),
							)}
						</tbody>
					</table>
					
				</div>
			</div>
			<Footer />
		</>
		
	);
}

export default FicheClient;
