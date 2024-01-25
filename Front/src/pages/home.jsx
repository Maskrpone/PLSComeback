import React, { useState } from "react";
import { Link } from "react-router-dom";
import SliderEmprunt from "./SliderEmprunt";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'
import './ButtonResa.css'
import CalendarWidget from "./CalendarWidget";
import SliderAcceuil from "./SliderAcceuil";
import { Footer, Header } from "./Components/HeadFoot"
import HelpModal from "./HelpModal";


function Home() {
    const [isHelpModalOpen, setHelpModalOpen] = useState(false);
  
    const openHelp = () => {
      setHelpModalOpen(true);
    };
  
    const closeHelp = () => {
      setHelpModalOpen(false);
    };
  
    return (
      <>
        <Header />
        <div className="Center">
          <SliderAcceuil pictures={[
            { title: 'Consumables', url: "https://th.bing.com/th/id/R.3ef0b8d3c0ab7ddd0f9931f269f37520?rik=InXeTrYkea5ppQ&riu=http%3a%2f%2felia.e-monsite.com%2fmedias%2fimages%2fresistance10k.jpg&ehk=kkxrP4kM4YIvv1I6NNSFwqeNQ57EBgidlleUBm%2bfey8%3d&risl=&pid=ImgRaw&r=0" },

                    { title: 'Loan', url: 'https://invize.se/wp-content/uploads/2020/05/arduino-uno-r3-1-1-1024x1024.jpg' },


                    { title: 'Machines', url: 'https://www.lecomptoir3d.com/4244-tm_large_default/destockage-imprimante-3d-raise3d-pro2.jpg' }
          ]} />
        </div>
        <div className="Help" onClick={openHelp}>
          <span className="material-symbols-outlined">help</span>
        </div>
        <Footer />
  
        <HelpModal isOpen={isHelpModalOpen} onClose={closeHelp} />
      </>
    );
  }
  
  export default Home;
