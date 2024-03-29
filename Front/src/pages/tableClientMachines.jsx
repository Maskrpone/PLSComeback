//import React from 'react';
import {Link} from "react-router-dom";

function tableClientMachines (){
    return(
        <div class="TableClient"id="tableClientMachines">
            <h3>MACHINES</h3>
            <table>
                <thead>
                <tr>
                    <th>DATE</th>
                    <th>NAME</th>
                    <th>DURATION</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CES-9000</td>
                    <td>50mt</td>
                    <td>9mm</td>
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

export default tableClientMachines;