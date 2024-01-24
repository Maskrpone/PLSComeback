//import React from 'react';
import {Link} from "react-router-dom";

function tableClientEmprunt (){
    return(
        <div class="TableClient"id="tableClientEmprunt">
            Emprunt
            <table>
                <thead>
                <tr>
                    <th>DATE</th>
                    <th>DATE DE RENDU</th>
                    <th>NOM</th>
                    <th>RETARD</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CES-9000</td>
                    <td>50mt</td>
                    <td>9mm</td>
                    <td>1/2"</td>
                    <td>non</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default tableClientEmprunt;