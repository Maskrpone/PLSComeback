import SliderEmprunt from "./SliderEmprunt";
import CalendarWidget from "./CalendarWidget";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'
import './Calendar.css'
import './ButtonResa.css'
//import {Footer} from "./Components/HeadFoot"


function Machines() {
  return (
  <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

    <div class="Center">
      
      <SliderEmprunt pictures={[
              { title: 'Perceuse', url: 'https://cdn.toolstation.fr/images/141021-FR/250/16045.jpg' },
              { title: 'Perceuse 2', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19793.jpg' },
              { title: 'Perceuse 3', url: 'https://cdn.toolstation.fr/images/141021-FR/250/87199.jpg' },
              { title: 'Perceuse 4', url: 'https://cdn.toolstation.fr/images/141021-FR/250/24035.jpg' },
              { title: 'Perceuse 5', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },

            ]} /> 

       <CalendarWidget></CalendarWidget>

    </div>
    {/* <Footer/> */}
  </>
  );
}

export default Machines;