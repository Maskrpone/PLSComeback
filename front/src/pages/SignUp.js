import React, { useState } from 'react';
import BoutonRetour from './Components/BoutonRetour';
import ZoneSaisieTexte from './Components/ZoneTexte';
import ZoneMotDePasse from './Components/ZoneMDP';
import { BoutonSignUp } from './Components/Bouton';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  //On récupère l'username
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  //On récupère le password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //On récupère le password2
  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  }

  //Verification de la sécurité du mdp
  const isPasswordValid = () => {
    // Ajoutez vos critères de validation du mot de passe ici
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  //On vérifie s'il y a une erreur
  const handleSignUpClick = () => {
    var messErr = "";
    if (username === "" || password === "" || passwordConfirm === "") {
      messErr = "Please fill in all the boxes"
    }
    else {
      if (!isPasswordValid()) {
        messErr = "The password must contain at least 8 characters, including at least one upper case letter, one lower case letter and one number."
      }
      else {
        if (password !== passwordConfirm) {
          messErr = "Please enter the same password twice"
        }
      }

    }

    //S'il y a une erreur on l'affiche sinon on se connecte
    if (messErr === "") {
      navigate('/pages/next')
    }
    else {
      setErrorMessage(messErr); // Met à jour le message d'erreur dans l'état local
    }
  };


  return (
    <div className='Loginform'>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <h1>PleaseComeBack</h1>
      <div>

        <BoutonRetour url="/pages/login"/>
        <ZoneSaisieTexte label="Username " onChange={handleUsernameChange} />
        <ZoneMotDePasse label="Password " text="New password" onChange={handlePasswordChange} />
        <ZoneMotDePasse label="Confirm Password " text="Confirm your password" onChange={handlePasswordConfirmChange} />
        {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
        <BoutonSignUp onClick={handleSignUpClick} />
      </div>
    </div>
  );
}


export default Signup;
