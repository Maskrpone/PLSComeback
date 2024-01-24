import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function ZoneMotDePasse({ label, text, onChange }) {
  const [motDePasse, setMotDePasse] = useState('');
  const [afficherMotDePasse, setAfficherMotDePasse] = useState(false);

  const toggleAffichageMotDePasse = () => {
    setAfficherMotDePasse(!afficherMotDePasse);
  };

  const handleChange = (e) => {
    setMotDePasse(e.target.value);
    if (onChange) {
      onChange(e); // Appelle la fonction onChange fournie via la prop
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', margin: "40px 0px;", position: 'relative', display: 'flex', alignItems: 'center' }}>
      <label style={{ fontWeight: 'bold', position: 'absolute', top: '-10px', left: '10px', backgroundColor: 'rgb(245 241 252)', padding: '0 5px' }}>
        {label}:
      </label>
      <input
        type={afficherMotDePasse ? 'text' : 'password'}
        value={motDePasse}
        onChange={handleChange}
        placeholder={text}
        style={{ flex: 1, padding: '5px', border: 'none', borderBottom: '1px solid #ccc' }}
      />
      <div style={{ cursor: 'pointer' }} onClick={toggleAffichageMotDePasse}>
        {afficherMotDePasse ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
  );
}

export default ZoneMotDePasse;