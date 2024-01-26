import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { Footer, Header } from "./Components/HeadFoot"
import { API_IP } from "../Constants";
import Cookies from 'js-cookie';

function ValidateBooking() {
  const [booking, setBooking] = useState(null);

  const isAdmin = JSON.parse(Cookies.get('user_data')).isAdmin; // Assurez-vous que la valeur du cookie est une chaîne de caractères

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const username = urlParams.get('username');
  // console.log(id); 
  const name = urlParams.get('name');
  // console.log(name); 
  const quantity = urlParams.get('quantity');
  // console.log(quantity); 
  const plannedReturnDate = urlParams.get('plannedReturnDate');
  // console.log(plannedReturnDate); 
  const validateBooking = async () => {
    try {
      const response = await axios.post(`http://${API_IP}:3000/return`, {
        username: username,
        name: name
        //quantity: quantity,
        //plannedReturnDate: plannedReturnDate,
    });
      //setBooking(response.data);
      alert("Booking validated !")
    } catch (error) {
      console.error('Erreur lors de la validation de la réservation', error);
    }
  };

  return (
    <div>
      <Header />
    {isAdmin===true ? (
      <div className="Center">
        <h2>Validate the Booking of {username} for a {name}</h2>
        <button onClick={validateBooking}><span class="material-symbols-outlined">
check_circle
</span></button>
      </div>
    ) : (
      <div className="Center">
        <h2>You don't have admin rights to validate bookings.</h2>
      </div>
    )}
    {booking && <div>Réservation validée: {JSON.stringify(booking)}</div>}
    <Footer />
    </div>
  );
}

export default ValidateBooking;

