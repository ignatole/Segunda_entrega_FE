import { useEffect, useState } from "react";
import './Integrantes.css';


export default function Integrantes() {
  // creamos un estado para guardar los personajes que vamos a mostrar
  const [personajes, setPersonajes] = useState([]);
  const roles = ['Dev', 'QA', 'PM', 'UX/UI', 'Dev'];
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

  return (
    <div className="integrantes-container">
      <h1>Nuestro equipo</h1>
      <div className="cards-container">
        {personajes.map((p, index) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <h2>{p.name}</h2>
            <p>{roles[index]} - {p.status + '?'} </p>
          </div>
        ))}
      </div>
    </div>
  );
}