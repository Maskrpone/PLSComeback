import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { Footer, Header } from "./Components/HeadFoot"
import { API_IP } from "../Constants";

function ValidateBooking() {
  const [booking, setBooking] = useState(null);

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
      const response = await axios.post(`http://${API_IP}:3000/reserve`, {
        username: username,
        name: name,
        quantity: quantity,
        plannedReturnDate: plannedReturnDate,
    });
      setBooking(response.data);
    } catch (error) {
      console.error('Erreur lors de la validation de la réservation', error);
    }
  };

  return (
    <div>
        <Header />
        <div className="Center">
          <button onClick={validateBooking}>Valider la réservation</button>

        </div>
      {booking && <div>Réservation validée: {JSON.stringify(booking)}</div>}
      <Footer />
    </div>
  );
}

export default ValidateBooking;

