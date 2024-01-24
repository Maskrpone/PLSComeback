import {Link} from "react-router-dom";
import TableClientConsommable from "./tableClientConsommable";
import TableClientEmprunt from "./tableClientEmprunt";
import TableClientMachines from "./tableClientMachines";
import "./ficheClient.css"
import {Footer,Header} from "./Components/HeadFoot"


function FicheClient(){
    return(
        <>
                    <Header/>

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
        <Footer/>

        </>
    )
}

export default FicheClient;