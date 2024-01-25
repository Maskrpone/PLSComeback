import React, { useState } from "react";
import { Link } from "react-router-dom";
import ZoneSaisieTexte from "./Components/ZoneTexte";
import ZoneMotDePasse from "./Components/ZoneMDP";
import { BoutonSignIn } from "./Components/Bouton";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import BoutonRetour from "./Components/BoutonRetour";
import axios from "axios";
import qs from "qs";
import { API_IP } from "../Constants";
import sha256 from "js-sha256";
import Cookies from "js-cookie";


function Login() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	//Fonction pour récuperer l'username
	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	//Fonction pour récuperer le mdp
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	//Fonction de verif pour voir si le compte existe
	const isAccount = () => {
		//Va vérifier si les info données correspondent bien à un compte
		return true;
	};

	//On vérifie s'il y a une erreur ou non et on l'enregistre
	const handleSignInClick = () => {
		let messErr = "";
		if (password === "" || username === "") {
			messErr = "Please fill in all the boxes";
		} else {
			if (!isAccount()) {
				messErr = "The information entered does not correspond to an account";
			}
		}

		//S'il y a un message d'erreur on l'affiche sinpn on se connecte
		if (messErr === "") {
			const data = qs.stringify({
				username: username,
				password: sha256(password),
			});

			console.log(data);

			const config = {
				method: "post",
				maxBodyLength: Infinity,
				url: `http://${API_IP}:3000/login`,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				data: data,
			};

			axios
				.request(config)
				.then((response) => {
					console.log(JSON.stringify(response.data));
					if (response.status === 200){
						Cookies.set('user_data', JSON.stringify(response.data));
						navigate("/pages/next");
					} 
				})
				.catch((error) => {
					console.log(error);
					setErrorMessage(
						"Incorrect username or password or user doesn't exist",
					);
				});
		} else {
			setErrorMessage(messErr); // Met à jour le message d'erreur dans l'état local
		}
	};

	return (
		<div className="Loginform">
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
			/>
			<div>
				<h1>PleaseComeBack</h1>
			</div>
			<div>
				<ZoneSaisieTexte label="Username " onChange={handleUsernameChange} />
				<ZoneMotDePasse
					label="Password "
					text="Enter your password"
					onChange={handlePasswordChange}
				/>
				{errorMessage && (
					<div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>
				)}
				<BoutonSignIn onClick={handleSignInClick} />
				<p>
					If you don't have an account<br></br>
					{/* On va vers la page signup en utilisant les routes qu'on a fait dans App.js*/}
					<Link to="/pages/signup">click here to create one</Link>
				</p>
			</div>
		</div>
	);
}

export default Login;
