import { useEffect, useState } from "react";
import '../../styles/Integrantes.css';
import data from '../../data/data.json';


export default function Integrantes() {
  // creamos un estado para guardar los personajes que vamos a mostrar
  const [personajes, setPersonajes] = useState([]);
  const [flippedIndex, setFlippedIndex] = useState(null);
  // roles para los integrantes del equipo
  const roles = ['Dev', 'QA', 'PM', 'UX/UI', 'Dev'];
  const integrantes = ["Ivan", "Ignacio", "Laura", "Romina", "Gonzalo"];
  // el useEffect se ejecuta  cuando el componente se monta
  // aca hacemos el fetch a la api de Rick and Morty

  useEffect(() => {
    // devuelve la promesa con los datos de la api
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json()) // convertimos la respuesta a json
      .then((data) => {
        // data results es un array con los personajes
        // vamos a elegir los 5 primeros por ahora
        setPersonajes(data.results.slice(0,5));
      })
      .catch((error) => console.error('Error al cargar personajes: ', error));
  }, []); // el array vacio hace que se ejecute solo una vez cuando el componente se monta

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };
  return (
    <div className="integrantes-container">
      <h1>Nuestro equipo</h1>
      <div className="cards-container">
        
        {personajes.map((p, index) => {
          const nombre = integrantes[index];
          const favoritos = data.filter(f => f.integrante === nombre);
        
        return (
          <div key={p.id} 
          className={`card ${flippedIndex === index ? 'flipped': ''}`}
          onClick={() => handleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={p.image} alt={p.name} />
                <h2>{p.name}</h2>
                <p>{roles[index]}</p>
            </div>
            <div className="card-back">
              <h3>Favoritos</h3>
              <ul>
                {favoritos.map((item, i) =>(
                  <li key={i} >
                    <strong>{item.titulo} </strong> <br />
                    <em>{item.artista}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        );
        })}
      </div>
    </div>
  );
}