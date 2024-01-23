import {Link} from "react-router-dom";

const Home=()=>{
    return(
        <>
        <h1> This is Home page</h1>
        <Link to="/pages/pages1"> pages1</Link>
        <Link to="/pages/pages_components"> pages_components</Link>
            <Link to="/pages/pages_emprunt"> pages_emprunt</Link>
        </>
    )
}

export default Home