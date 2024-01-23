import {Link} from "react-router-dom";

const Page1=()=>{
    return(
        <>
        <header>
            <h1> This is page1</h1>
            <Link to="/"> home</Link>
        </header>


            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>DATE</th>
                    <th>NOM</th>
                    <th>QUANTITE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
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

export default Page1