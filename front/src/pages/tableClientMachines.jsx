//import React from 'react';
import {Link} from "react-router-dom";

function tableClientMachines (){
    return(
        <div class="TableClient"id="tableClientMachines">
            MACHINES
            <table>
                <thead>
                <tr>
                    <th>DATE</th>
                    <th>NOM</th>
                    <th>DUREE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CES-9000</td>
                    <td>50mt</td>
                    <td>9mm</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default tableClientMachines;