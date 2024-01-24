import {Link} from "react-router-dom";
import "./Emprunt.css"

function Home(){
    return(
        <>
        <h1> This is Home page</h1>
            <Link to="/pages/ficheClient"> fiche client</Link>
            <Link to="/pages/Emprunt"> Emprunt</Link>
        <Link to="/pages/pages_components"> pages_components</Link>
            <Link to="/pages/pages_emprunt"> pages_emprunt</Link>
            <Link to="/pages/machines"> machine</Link>

        </>
    )
}

export default Home;