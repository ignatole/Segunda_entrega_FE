import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'

export default function SideBar()  {
    return (
        <div className="sidebar">
         {/* Título o logo del grupo */}
      <div className="sidebar-title">Grupo 6</div>

      {/* Menú de navegación */}
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">Portada</Link>
        <Link to="/bitacora" className="sidebar-link">Bitácora</Link>
        <Link to="/integrantes" className="sidebar-link">Integrantes</Link>
        <Link to="/json-data" className="sidebar-link">JSON Data</Link>
        <Link to="/api-data" className="sidebar-link">API Data</Link>
      </nav>
    </div>
  );
}
