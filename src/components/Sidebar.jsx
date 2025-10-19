import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'

export default function SideBar({ onNavigate })  {
    const handleClick = (e, path) => {
      e.preventDefault();
      if (typeof onNavigate === 'function') return onNavigate(path);
      // fallback to regular navigation when no handler is provided
      window.location.href = path;
    };

    return (
        <div className="sidebar">
         {/* Título o logo del grupo */}
      <div className="sidebar-title">Grupo 6</div>

      {/* Menú de navegación */}
      <nav className="sidebar-nav">
        <a href="/" onClick={(e) => handleClick(e, '/')} className="sidebar-link">Portada</a>
        <a href="/bitacora" onClick={(e) => handleClick(e, '/bitacora')} className="sidebar-link">Bitácora</a>
        <a href="/integrantes" onClick={(e) => handleClick(e, '/integrantes')} className="sidebar-link">Integrantes</a>
        <a href="/json-data" onClick={(e) => handleClick(e, '/json-data')} className="sidebar-link">JSON Data</a>
        <a href="/api-data" onClick={(e) => handleClick(e, '/api-data')} className="sidebar-link">API Data</a>
      </nav>
    </div>
  );
}
