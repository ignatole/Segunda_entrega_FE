import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'

export default function SideBar()  {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Grupo 6</h2>
            <nav className="sidebar-nav">
            <Link to='/' >Portada</Link>
            <Link to='/bitacora'>Bitacora</Link>
            <Link to='/integrantes'>Integrantes</Link>
            <Link to='/jsondata'>JSON Data</Link>
            <Link to='/apidata'>API Data</Link>
            </nav>
        </div>
    );
}
