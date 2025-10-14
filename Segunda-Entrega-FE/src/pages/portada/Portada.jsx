import { useEffect, useState } from "react";
import './Portada.css';


export default function Portada(){
  const fondos = [
    '/assets/pic_1.jpg',
    '/assets/pic_2.png',
    '/assets/pic_3.jpg',
    '/assets/pic_4.jpg'
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % fondos.length);

    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="portada"
    style={{backgroundImage: `url(${fondos[index]})`}}>
      <div className="overlay">
        <h1 className="titulo">Portalverse</h1>
        <p className="subtitulo">Explorando el multiverso del desarrollo web</p>
        <p className="descripcion">Somos un grupo de estudiantes de Tecnicatura en Desarrollo Web </p>
    </div>
    </div>
  );
}

