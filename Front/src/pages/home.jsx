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
          <SliderAcceuil pictures={[]} />
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
