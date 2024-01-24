import React from 'react';
import { useNavigate } from 'react-router-dom';

function BoutonRetour() {
  const navigate = useNavigate();
  //On retourne à la page login
  const handleRetourClick = () => {
    navigate('/pages/login'); 
  };

  return (
    <button
      onClick={handleRetourClick}
      style={{
        background: 'none',
        border: 'none',
        padding: '0',
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      Retour à la page de connexion
    </button>
  );
}

export default BoutonRetour;