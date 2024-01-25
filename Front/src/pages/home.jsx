import {Link} from "react-router-dom";
import SliderEmprunt from "./SliderEmprunt";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'
import './ButtonResa.css'
import CalendarWidget from "./CalendarWidget";
import SliderAcceuil from "./SliderAcceuil";
import {Footer,Header} from "./Components/HeadFoot"


function Home(){
    return(
        <>
            <Header/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

            <div className="Center">

                <SliderAcceuil pictures={[
                    { title: 'Consumables', url: "data:image/jpeg;base64,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" },
                    { title: 'Loan', url: 'https://th.bing.com/th/id/OIP.mkFwYE3nLz6KxuR0AYWAUQHaHa?rs=1&pid=ImgDetMain' },
                    { title: 'Machines', url: 'https://www.lecomptoir3d.com/4244-tm_large_default/destockage-imprimante-3d-raise3d-pro2.jpg'}

                ]} />

            </div>

            <Footer/>
        </>
    )
}

export default Home;