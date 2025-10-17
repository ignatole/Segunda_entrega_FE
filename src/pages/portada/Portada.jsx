import { useEffect, useState, useRef } from "react";
import './Portada.css';


export default function Portada(){
  const fondos = [
    '/assets/pic_1.jpg',
    '/assets/pic_2.png',
    '/assets/pic_3.jpg',
    '/assets/pic_4.jpg'
  ];

  const [index, setIndex] = useState(0);
  const titleRef = useRef(null);
  
  // fondos 
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % fondos.length);

    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  // animacion titulo
  useEffect(() => {
    const node = titleRef.current;
    if(!node) return;

    const text = node.innerText;
    node.innerText = '';
    
    const letters = [...text].map((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.setProperty('--index', i);
    return span;
  });

  node.append(...letters);
  }, []);

  return (
    <div className="portada-wrapper">
    <div className="portada"
    style={{backgroundImage: `url(${fondos[index]})`}}>
      <div className="overlay">
        <h1 ref={titleRef} letter-animation= "breath">Portalverse</h1>
        <p className="subtitulo">Explorando el multiverso del desarrollo web</p>
        <p className="descripcion">Bienvenidos a un viaje interdimensional por los mundos del diseño, la programación
          y la creatividad infinita. </p>
    </div>
    </div></div>
  );
}

