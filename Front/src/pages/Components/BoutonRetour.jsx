import React from 'react';
import { useNavigate } from 'react-router-dom';

function BoutonRetour({url}) {
  const navigate = useNavigate();
  //On retourne à la page login
  const handleRetourClick = () => {
    navigate(url); 
  };

  return (
    <button
      onClick={handleRetourClick}
      className='buttonReturn'
      
    >
      <span class="material-symbols-outlined">
            keyboard_double_arrow_left
        </span>
    </button>
  );
}

export default BoutonRetour;