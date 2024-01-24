import {Link} from "react-router-dom";
import TableClientConsommable from "./tableClientConsommable";
import TableClientEmprunt from "./tableClientEmprunt";
import TableClientMachines from "./tableClientMachines";
import "./ficheClient.css"
import {Footer,Header} from "./Components/HeadFoot"
import BoutonRetour from "./Components/BoutonRetour";


function FicheClient(){
    return(
        <div id="ficheClient">
            <Header/>
            <BoutonRetour url="/"/>
            <header>
                <h1> Currently associated with your account </h1>
            </header>
            <TableClientConsommable></TableClientConsommable>
            <TableClientEmprunt></TableClientEmprunt>
            <TableClientMachines></TableClientMachines>
            <p>
                <Link to="/">Continue booking</Link>
            </p>
            <Footer/>
        </div>
    )
}

export default FicheClient;