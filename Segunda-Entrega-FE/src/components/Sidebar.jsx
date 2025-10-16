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
        <a href="/" className="sidebar-link">Portada</a>
        <a href="/bitacora" className="sidebar-link">Bitácora</a>
        <a href="/integrantes" className="sidebar-link">Integrantes</a>
      </nav>
    </div>
  );
}
