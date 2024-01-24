import React, { useState } from 'react';

function ZoneSaisieTexte({ label, onChange }) {
  const [valeur, setValeur] = useState('');

  const handleChange = (e) => {
    setValeur(e.target.value);
    if (onChange) {
      onChange(e); // Appelle la fonction onChange fournie via la prop
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', margin: "40px 0px;", position: 'relative' }}>
      <label style={{ fontWeight: 'bold', position: 'absolute', top: '-10px', left: '10px', backgroundColor: 'rgb(245 241 252)', padding: '0 5px' }}>
        {label}:
      </label>
      <input
        type="text"
        value={valeur}
        onChange={handleChange}
        placeholder={`Your ${label.toLowerCase()}`}
        style={{ width: '100%', padding: '5px', marginTop: '5px', border: 'none', borderBottom: '1px solid #ccc' }}
      />
    </div>
  );
}

export default ZoneSaisieTexte;