import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SideBar.css'

export default function SideBar({ onNavigate })  {
    const [collapsed, setCollapsed] = useState(false);
    const handleClick = (e, path) => {
      e.preventDefault();
      if (typeof onNavigate === 'function') return onNavigate(path);
      window.location.href = path;
    };

    const toggleCollapse = () => {
      const next = !collapsed;
      setCollapsed(next);
      document.body.classList.toggle('sidebar-collapsed', next);
    };

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`} aria-expanded={!collapsed}>
      <div className="sidebar-title">Grupo 6</div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <a href="/" onClick={(e) => handleClick(e, '/')} className="sidebar-link" title="Portada">
          <span className="icon" aria-hidden>🏠</span>
          <span className="label">Portada</span>
        </a>
        <a href="/bitacora" onClick={(e) => handleClick(e, '/bitacora')} className="sidebar-link" title="Bitácora">
          <span className="icon" aria-hidden>📔</span>
          <span className="label">Bitácora</span>
        </a>
        <a href="/integrantes" onClick={(e) => handleClick(e, '/integrantes')} className="sidebar-link" title="Integrantes">
          <span className="icon" aria-hidden>👥</span>
          <span className="label">Integrantes</span>
        </a>
        <a href="/json-data" onClick={(e) => handleClick(e, '/json-data')} className="sidebar-link" title="JSON Data">
          <span className="icon" aria-hidden>📄</span>
          <span className="label">JSON Data</span>
        </a>
        <a href="/api-data" onClick={(e) => handleClick(e, '/api-data')} className="sidebar-link" title="API Data">
          <span className="icon" aria-hidden>⚙️</span>
          <span className="label">API Data</span>
        </a>
      </nav>

      <button onClick={toggleCollapse} aria-pressed={collapsed} aria-label="Toggle sidebar" className="sidebar-toggle">☰</button>
    </div>
  );
}
