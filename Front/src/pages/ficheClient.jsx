import {Link} from "react-router-dom";
import TableClientConsommable from "./tableClientConsommable";
import TableClientEmprunt from "./tableClientEmprunt";
import TableClientMachines from "./tableClientMachines";
import "./ficheClient.css"
import {Footer,Header} from "./Components/HeadFoot"
import BoutonRetour from "./Components/BoutonRetour";
import axios from "axios";
import { API_IP } from "../Constants";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import "./Calendar.css";
import "./ButtonResa.css";

function FicheClient(){      
      
    const [machineData, setMachineData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://${API_IP}:3000/users/`);
    
            const formattedData = response.data.map((machine) => ({
              title: machine.name,
              url: machine.image,
            }));
    
            console.log(formattedData);
    
            setMachineData(formattedData);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []); // Empty dependency array ensures the effect runs once when the component mounts


    return(
        <>
                    <Header/>

        <div id="ficheClient">
            <BoutonRetour url="/pages/home"/>
            <header>
                <h1> Currently associated with your account </h1>
            </header>
            <TableClientConsommable></TableClientConsommable>
            <TableClientEmprunt></TableClientEmprunt>
            <TableClientMachines></TableClientMachines>
            <p>
                <Link to="/">Continue booking</Link>
            </p>
        </div>
        <Footer/>

        </>
    )
}

export default FicheClient;