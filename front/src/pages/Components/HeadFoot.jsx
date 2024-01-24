import React from 'react';
import {Link } from 'react-router-dom';
import './HeadFoot.css'

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