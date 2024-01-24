import React from 'react';

export function BoutonSignIn({onClick}) {
  const handleClick = () => {
    if (onClick) {
      onClick();  // Exécute la fonction de rappel fournie via la prop onClick
    }
  };
  return (
    <button
      style={{
        padding: '10px 20px',
        width:'100%',
        border: '2px solid #333',
        borderRadius: '10px',
        backgroundColor: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
      onClick={handleClick}  // Définit le gestionnaire d'événements onClick sur la fonction handleClick

    >
      Sign in
    </button>
  );
}

export function BoutonSignUp({onClick}) {
  const handleClick = () => {
    if (onClick) {
      onClick();  // Exécute la fonction de rappel fournie via la prop onClick
    }
  };

  return (
    <button
      style={{
        padding: '10px 20px',
        border: '2px solid #333',
        borderRadius: '10px',
        backgroundColor: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
      onClick={handleClick}  // Définit le gestionnaire d'événements onClick sur la fonction handleClick

    >
      Sign up
    </button>
  );
}
