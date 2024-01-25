import React, { useState, useEffect } from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import { Footer, Header } from "./Components/HeadFoot";
import BoutonRetour from "./Components/BoutonRetour";
import axios from "axios";
import qs from "qs";
import { API_IP } from "../Constants";

const Page_components = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://${API_IP}:3000/supplies`);

				const formattedUsers = response.data.map((user) => ({
					nom: user.name,
					image: user.image,
					taille: user.quantity,
				}));

				setUsers(formattedUsers);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	const admin = true;

	const [searchTerm, setSearchTerm] = useState("");

	const incrementTaille = (user) => {
		return { ...user, taille: user.taille + 1 };
	};

	const decrementTaille = (user) => {
		return { ...user, taille: user.taille - 1 };
	};

	// const [users, setUsers] = useState([
	// 	new User(
	// 		"John Doe",
	// 		"https://s1.qwant.com/thumbr/474x316/b/c/bc07ef2694c1bc2f76637048afa4df34edd3acb18a8deb3ef4ea52ee266798/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.XtoYWt-dH39rCPkTkdoe8AHaE8%26pid%3DApi&q=0&b=1&p=0&a=0",
	// 		175,
	// 	),
	// 	new User(
	// 		"Jane Smith",
	// 		"https://s1.qwant.com/thumbr/474x316/b/c/bc07ef2694c1bc2f76637048afa4df34edd3acb18a8deb3ef4ea52ee266798/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.XtoYWt-dH39rCPkTkdoe8AHaE8%26pid%3DApi&q=0&b=1&p=0&a=0",
	// 		160,
	// 	),
	// 	new User(
	// 		"Bob Johnson",
	// 		"https://s1.qwant.com/thumbr/474x316/b/c/bc07ef2694c1bc2f76637048afa4df34edd3acb18a8deb3ef4ea52ee266798/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.XtoYWt-dH39rCPkTkdoe8AHaE8%26pid%3DApi&q=0&b=1&p=0&a=0",
	// 		185,
	// 	),
	// ]);

	const handleClick = (str) => {
		console.log(str);
		for (let i = 0; i < str.length; i++) {
			const name_object = str[i].nom;
			const taille_object = str[i].taille;

			const fetchData = async () => {
				try {
					await axios
						.put(`http://${API_IP}:3000/supplies/${name_object}/modify`, {
							quantity: taille_object,
						})
						.then((response) => {
							console.log("Mise à jour réussie :", response.data);
							alert("Mise à jour réussie");
						})
						.catch((error) => {
							console.error("Erreur lors de la mise à jour :", error);
							alert("Mise à jour échouée");
						});
				} catch (error) {
					console.log(error);
				}
			};

			fetchData();
		}
		console.log(str);
	};

	const filteredUsers = users.filter((user) =>
		user.nom.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className="App">
			<Header />
			<header className="App-header">
				<BoutonRetour url="/pages/home" />
				<Link to="/"> home</Link>
				<br />
				<br />
				<div className="w-96 mb-3 xl:w-96">
					<div className="relative mb-4 flex w-full flex-wrap items-stretch">
						<input
							type="search"
							className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-200 outline-none transition duration-300 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-400 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
							placeholder="Search"
							aria-label="Search"
							aria-describedby="button-addon2"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>

						{/* <!--Search icon--> */}
						<span
							className=" input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-300 dark:text-neutral-300"
							id="basic-addon2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-5 w-5"
							>
								<path
									fillRule="evenodd"
									d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</div>
				</div>
				<div className="lg:w-3/4">
					<table className="min-w-96 lg:w-full mx-auto w-16 md:w-32 border-amber-100 border-solid border-2 rounded-xl overflow-auto">
						<thead className="min-w-80 outline outline-amber-100">
							<tr className="flex lg:w-11/12 center mb-4 ml-12 mr-10 lg:flex-none">
								<th className="flex float-left lg:w-1/3 lg:float-none lg:flex">
									Image
								</th>

								<div className="flex  w-full float-right pl-36 lg:w-9/12 lg:pl-0 lg:flex-none lg:justify-start">
									<th className="flex float-right lg:w-1/3 lg:justify-center lg:float-none lg:flex-auto">
										Name{" "}
									</th>
									<th className="lg:hidden">/</th>
									<th className="flex float-right lg:w-1/3 lg:float-none lg:justify-end lg:flex-auto">
										Stock
									</th>
								</div>
							</tr>
						</thead>
						<tbody>
							{filteredUsers.length === 0 ? (
								<tr>
									<td colSpan="3">No result</td>
								</tr>
							) : (
								filteredUsers.map((user, index) => (
									<tr key={index} className="block mb-4 lg:flex lg:w-full">
										<td className="block float-left lg:flex-auto lg:w-1/3">
											<img
												className="max-w-36 m-3"
												src={user.image}
												alt={"img of " + user.nom}
											/>
										</td>
										<td className="block text-right lg:flex-auto lg:text-center lg:w-1/3">
											<p className="min-w-96 mr-5 lg:min-w-0 lg:mr-0 ">
												<br />
												{user.nom}
											</p>
										</td>
										<td className="lg:justify-center block text-right lg:flex-auto lg:w-1/3">
											<p className="min-w-96 lg:min-w-0">
												{admin === true ? (
													<button
														onClick={() =>
															setUsers((prevUsers) => {
																const updatedUsers = [...prevUsers];
																updatedUsers[index] = incrementTaille(user);
																return updatedUsers;
															})
														}
														className="bg-amber-500 rounded-full min-w-8 text-center m-3"
													>
														{" "}
														+
													</button>
												) : (
													""
												)}

												{user.taille}

												{admin === true ? (
													<button
														onClick={() =>
															setUsers((prevUsers) => {
																const updatedUsers = [...prevUsers];
																updatedUsers[index] = decrementTaille(user);
																return updatedUsers;
															})
														}
														className="bg-amber-500 rounded-full min-w-8 text-center m-3"
													>
														{" "}
														-
													</button>
												) : (
													""
												)}
											</p>
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
					{admin === true ? (
						<button
							onClick={() => handleClick(users)}
							className="w-full lg:relative lg:float-right lg:w-60 bg-amber-500 border-4 border-amber-500 rounded-xl mt-4"
						>
							Update stock
						</button>
					) : (
						""
					)}
				</div>
				<br />
				<br />
			</header>
			<Footer />
		</div>
	);
};

function User(nom, image, taille) {
	this.nom = nom;
	this.image = image;
	this.taille = taille;
}

export default Page_components;
