import React from 'react';
import data from '../data/data.json';
import Card from '../components/Card';
import '../styles/JSONData.css';

const JSONData = () => {
  return (
    <div className="json-data-container">
      <h1>Datos desde Archivo JSON</h1>
      <div className="api-cards">
        {data.map((item, index) => (
          <Card key={index}>
            <h3>{item.titulo}</h3>
            <p>Integrante: {item.integrante}</p>
            <p>Tipo: {item.tipo}</p>
            <p>Año: {item.año}</p>
            {item.director && <p>Director: {item.director}</p>}
            {item.artista && <p>Artista: {item.artista}</p>}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JSONData;