import React from 'react';
import '../styles/APIData.css';

export default function Loader({ size = 48, text = 'Cargando datos...' }) {
  const style = {
    width: size,
    height: size,
  };

  return (
    <div className="loader-wrap">
      <div className="loader" style={style} aria-hidden="true"></div>
      {text && <div className="loader-text">{text}</div>}
    </div>
  );
}
