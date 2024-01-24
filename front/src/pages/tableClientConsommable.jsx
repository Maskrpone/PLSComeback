//import React from 'react';
import {Link} from "react-router-dom";

function TableClientConsommable (){
    return(
        <div class="TableClient"id="TableClientConsommable">
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

export default TableClientConsommable;