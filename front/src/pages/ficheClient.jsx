import {Link} from "react-router-dom";
import TableClientConsommable from "./tableClientConsommable";
import TableClientEmprunt from "./tableClientEmprunt";
import TableClientMachines from "./tableClientMachines";
import "./ficheClient.css"

function FicheClient(){
    return(
        <div id="ficheClient">
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
    )
}

export default FicheClient;