import React from 'react';
import {Link } from 'react-router-dom';
import './HeadFoot.css'

export function Header(){
  return (
    <div className="header-container">
      <div className="logo">
        <img src="#"/>
      </div>
      <div className="titre">
        <h1>PLSComeBack</h1>
      </div>
      <div className="boutonClient">
        <Link to="/pages/ficheClient" className="Lien">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span class="material-symbols-outlined">
          badge
        </span>
        </Link>
      </div>
    </div>
  );
}

export function Footer(){
    return(
      <div className='footer-container'>
        <div className='left-section'>
          <p>Website created by :</p>
          <p className='names'>CREPIN Gaspard, DEPARIS Hippolyte, ESPRIET Charles, HAGE Rémi, HOSTE Matthieu, LANGER Camille, MANY Hugo, VICO Isaure</p>
        </div>
        <div className='center-section'>
          <Link to="/pages/login" className='disconnect-link'>Disconnect</Link>
        </div>
        <div className='right-section'>
          <p>Credit :</p>
          <p className='credit'>Photos FABLAB</p>
        </div>
      </div>
    )
}