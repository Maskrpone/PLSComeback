import {Link} from "react-router-dom";
import "./ficheClient.css"
import {Footer,Header} from "./Components/HeadFoot"
import BoutonRetour from "./Components/BoutonRetour";
import axios from "axios";
import { API_IP } from '../Constants'
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import "./Calendar.css";
import "./ButtonResa.css";
import Cookies from "js-cookie";

const DATA_EXAMPLES = {
    "history": {
        "items": {
            "Raspberry": {
                "quantity": 1,
                "date": "Wed Jan 24 2024 13:26:56 GMT+0100 (heure normale d’Europe centrale)",
                "plannedReturnDate": "Wed Jan 01 2025 01:00:00 GMT+0100 (heure normale d’Europe centrale)",
                "realReturnDate": "Wed Jan 24 2024 14:03:19 GMT+0100 (heure normale d’Europe centrale)",
                "type":0,
                "isLate": false,
                "_id": "65b102102da1471662f98ef3"
            },
            "Résistance": {
                "quantity": 4,
                "date": "Wed Jan 24 2024 13:28:14 GMT+0100 (heure normale d’Europe centrale)",
                "plannedReturnDate": "Wed Jan 01 2025 01:00:00 GMT+0100 (heure normale d’Europe centrale)",
                "realReturnDate": null,
                "type":1,
                "isLate": false,
                "_id": "65b1025e2da1471662f98f00"
            },
            "Bagnole": {
                "quantity": 1,
                "date": "Wed Jan 24 2024 15:19:48 GMT+0100 (heure normale d’Europe centrale)",
                "plannedReturnDate": "Wed Jan 01 2025 01:00:00 GMT+0100 (heure normale d’Europe centrale)",
                "realReturnDate": null,
                "type":2,
                "isLate": false,
                "_id": "65b11c8491d5d4ea604ff16e"
            }
        }
    },
    "_id": "65afbef45b12e7a1eacd54a1",
    "username": "Rémi"
}

function FicheClient(){      
    // Récupérer tous les cookies
    const allCookies = Cookies.get();

    // Afficher tous les cookies
    console.log(allCookies);

    // Ou récupérer un cookie spécifique par son nom
    const specificCookie = Cookies.get('user_data');

    // Afficher le cookie spécifique
    console.log(specificCookie);

    const jsonCookie= JSON.parse(specificCookie);

    console.log(jsonCookie);

    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("Request -> "+`http://${API_IP}:3000/users/${jsonCookie.username}`);
            const response = await axios.get(`http://${API_IP}:3000/users/${jsonCookie.username}`);
    
            // const formattedData = response.data.map((machine) => ({
            //   title: machine.name,
            //   url: machine.image,
            // }));
    
            console.log(response);
    
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

  useEffect(() => {
    // Extract the items from history
    const items = DATA_EXAMPLES.history.items;

    // Filter data based on type and update state accordingly
    const type0FilteredData = Object.values(items).filter(item => item.type === 0);
    const type1FilteredData = Object.values(items).filter(item => item.type === 1);
    const type2FilteredData = Object.values(items).filter(item => item.type === 2);

    setType0Data(type0FilteredData);
    setType1Data(type1FilteredData);
    setType2Data(type2FilteredData);
  }, []);

  const renderTable = (data) => (
    <table>
      <thead>
        <tr>
          <th>DATE</th>
          <th>NAME</th>
          <th>QUANTITY</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>ertfg</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

    return(
        <>
                    <Header/>
                    <div id="ficheClient">
    <div className="TableClient" id="TableClientConsommable">
      <h3>CONSUMABLES</h3>
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>NAME</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {type0Data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div class="TableClient"id="tableClientEmprunt">
           <h3> LOAN</h3>
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>NAME</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {type1Data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div class="TableClient"id="tableClientMachines">
            <h3>MACHINES</h3>
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>NAME</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {type2Data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
        <Footer/>

        </>
    )
}

export default FicheClient;