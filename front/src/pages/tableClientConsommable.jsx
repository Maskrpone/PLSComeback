//import React from 'react';
import {Link} from "react-router-dom";

function TableClientConsommable (){
    return(
        <>
            CONSOMMABLES
            <table>
                <thead>
                <tr>
                <th>DATE</th>
                <th>NOM</th>
                <th>QUANTITE</th>
                </tr>
                </thead>
                <tbody>
                <tr> //pour chaque element de la bd
                    <td>CES-9000</td>
                    <td>50mt</td>
                    <td>9mm</td>
                    <td>1/2"</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default TableClientConsommable;