import React, { useState, useEffect } from "react";
import SliderEmprunt from "./SliderEmprunt";
import CalendarWidget from "./CalendarWidget";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import "./Calendar.css";
import "./ButtonResa.css";
import { Footer, Header } from "./Components/HeadFoot";
import axios from "axios";
import qs from "qs";
import { API_IP } from "../Constants";
import BoutonRetour from "./Components/BoutonRetour";


function Machines() {
  const [machineData, setMachineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://${API_IP}:3000/machines`);

        const formattedData = response.data.map((machine) => ({
          title: machine.name,
          url: machine.image,
            calendar : machine.calendar
        }));

        console.log(formattedData);

        setMachineData(formattedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <>
      <Header />
      <BoutonRetour url="/pages/home"/>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <div className="Center">

        <SliderEmprunt pictures={machineData} />

          {/*<CalendarWidget />*/}
      </div>
      <Footer />
    </>
  );
}

export default Machines;