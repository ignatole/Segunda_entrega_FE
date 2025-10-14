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
        <a href="/">Portada</a>
        <a href="/bitacora">Bitácora</a>
        <a href="/integrantes">Integrantes</a>
      </nav>
    </div>
  );
}
