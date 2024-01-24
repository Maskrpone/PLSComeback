//import React from 'react';
import {Link} from "react-router-dom";

function tableClientEmprunt (){
    return(
        <div class="TableClient"id="tableClientEmprunt">
           <h3> LOAN</h3>
            <table>
                <thead>
                <tr>
                    <th>DATE</th>
                    <th>DELIVERY DATE</th>
                    <th>NAME</th>
                    <th>DELAY</th>
                    <th> GENERATE QR CODE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CES-9000</td>
                    <td>50mt</td>
                    <td>9mm</td>
                    <td>1/2"</td>
                    <td>non</td>
                    {/* <td>LIEN A METTRE </td> */}
                </tr>
                <tr> 
                    <td>CES-9000</td>
                    <td>50mt</td>
                    <td>9mm</td>
                    <td>1/2"</td>
                </tr>
                <tr> 
                    <td>CES-9000</td>
                    <td>50mt</td>
                    <td>9mm</td>
                    <td>1/2"</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default tableClientEmprunt;