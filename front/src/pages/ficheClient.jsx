import {Link} from "react-router-dom";
import TableClientConsommable from "./tableClientConsommable";
import TableClientEmprunt from "./tableClientEmprunt";
import TableClientMachines from "./tableClientMachines";
import "./ficheClient.css"
import {Footer,Header} from "./Components/HeadFoot"


function FicheClient(){
    return(
        <div id="ficheClient">
            <Header/>
            <header>
                <h1> Actuellement associé à votre compte </h1>
            </header>
            <TableClientConsommable></TableClientConsommable>
            <TableClientEmprunt></TableClientEmprunt>
            <TableClientMachines></TableClientMachines>
            <p>
                <Link to="/">Continuer de réserver</Link>
            </p>
            <Footer/>
        </div>
    )
}

export default FicheClient;