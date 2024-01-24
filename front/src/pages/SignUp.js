import React, { useState } from 'react';
import BoutonRetour from './Components/BoutonRetour';
import ZoneSaisieTexte from './Components/ZoneTexte';
import ZoneMotDePasse from './Components/ZoneMDP';
import { BoutonSignUp } from './Components/Bouton';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //On récupère l'username
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //On récupère l'username
  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  //On récupère l'username
  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

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

  //Verification que c'est bien une adresse junia
  const isEmailValid = () => {
    const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+@[a-zA-Z]+\.junia\.com$/;
    return emailRegex.test(mail);
  };

  //On vérifie s'il y a une erreur
  const handleSignUpClick = () => {
    var messErr="";

    if (password !== passwordConfirm) {
          messErr="Please enter the same password twice"
    }
    if(!isEmailValid()){
      messErr="Please enter a valid junia.com email address"
    }
    if (!isPasswordValid()) {
        messErr="The password must contain at least 8 characters, including at least one upper case letter, one lower case letter and one number."
    }
    if (username === "" || password === "" || passwordConfirm === "" || name===""||surname===""||mail==="") {
      messErr="Please fill in all the boxes"
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
      <BoutonRetour />
      <ZoneSaisieTexte label="Name " onChange={handleNameChange} />
      <ZoneSaisieTexte label="Surname " onChange={handleSurnameChange} />
      <ZoneSaisieTexte label="Mail " onChange={handleMailChange} />
      <ZoneSaisieTexte label="Username " onChange={handleUsernameChange} />
      <ZoneMotDePasse label="Password " text="New password" onChange={handlePasswordChange} />
      <ZoneMotDePasse label="Confirm Password " text="Confirm your password" onChange={handlePasswordConfirmChange} />
      {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
      <BoutonSignUp onClick={handleSignUpClick} />

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
