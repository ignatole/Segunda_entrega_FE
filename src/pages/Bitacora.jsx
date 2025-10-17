import React from 'react';

const Bitacora = () => {
  return (
    <div>
      <h1>Bitácora del Proyecto</h1>
      <h2>Decisiones de Diseño</h2>
      <p>Se decidió usar React con Vite para un desarrollo rápido y moderno. El diseño es responsivo con un sidebar fijo para navegación.</p>
      <h2>Dificultades Encontradas</h2>
      <p>Integrar la API de Rick and Morty y manejar estados asíncronos. Solución: uso de hooks personalizados.</p>
      <h2>Cambios Importantes</h2>
      <p>Reorganización de archivos, implementación de componentes reutilizables, y adición de secciones para datos JSON y API.</p>
    </div>
  );
};

export default Bitacora;