import React from 'react';
import "./Header.css"


function Header(){
  

  return (
    <div className="backgroundHeader">
        <header>
            <div id="logo">
                <img src={"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQw7W5msnkiCnX25IlGx4gaEJw3rB_lFSxQkKodlPg2CqIgibXBZBlwxiKFq6h1ymNu"} alt={"MAXI GORILLE"}  width="15%"/>
            </div>
            <div id="nomProjet">
                PLS COME BACK
            </div>
            <div id="boutonMenu">
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
        </header>
    </div>
  );
}

export default Header