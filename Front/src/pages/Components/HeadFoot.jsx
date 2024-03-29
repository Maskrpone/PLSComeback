import React from 'react';
import { Link } from 'react-router-dom';
import './HeadFoot.css'
import Cookies from "js-cookie";


export function Header() {
  const handleDisconnect = () => {
    Cookies.remove('user_data');
  }
  return (
    <div className="header-container">
      
        <Link to="/" className='disconnect-link' onClick={handleDisconnect}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <span id="spanLeft"class="material-symbols-outlined">
            logout
          </span>
          </Link>

      <Link to="/pages/home" className="Lien">
      <div className="titre">
        <img src="https://media.discordapp.net/attachments/1198928178903777300/1200057810088644618/logo.png?ex=65c4cbed&is=65b256ed&hm=d943e3a76cf03e0eac03e702e553e4da1e057fffa21f16d2fcb1d2058db0f4d8&=&format=webp&quality=lossless&width=1155&height=385" alt="" />
      </div>
      </Link>

      <div className="boutonClient">
        <Link to="/pages/ficheClient" className="Lien">
          <span id="spanRight"class="material-symbols-outlined">
            badge
          </span>
        </Link>
      </div>
    </div>
  );
}

export function Footer() {

  
  return (
    <div className='footer-container'>
      <div className='left-section'>
        <p>Website created by :</p>
        <p className='names'>
        <a href='https://www.linkedin.com/in/gaspard-cr%C3%A9pin-a249b3250/'>CREPIN Gaspard, </a>
        <a href='https://www.linkedin.com/in/hippolyte-deparis-7ba39a204/'> DEPARIS Hippolyte, </a>
        <a href='https://www.linkedin.com/in/charles-espriet-b162001aa/'> ESPRIET Charles, </a>
        <a href='https://www.linkedin.com/in/r%C3%A9mi-hage-525055250/'> HAGE Rémi, </a>
        <a href='https://www.linkedin.com/in/matthieu-hoste-8a45732a3/'>  HOSTE Matthieu, </a>
        <a href='https://www.linkedin.com/in/camille-langer-4275a4230/'>  LANGER Camille, </a>
        <a href='https://www.linkedin.com/in/hugo-many/'>  MANY Hugo, </a>
        <a href='https://www.linkedin.com/in/isaure-vico-424b85232/'> VICO Isaure</a></p>
      </div>
      <div className='right-section'>
        <p>Credit :</p>
        <p className='credit'> FABLAB's photos</p>
      </div>
    </div>
  )
}