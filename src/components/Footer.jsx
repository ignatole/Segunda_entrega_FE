import React from "react";
import "./Footer.css";

const Footer = ({ centered = false }) => {
    const footerClass = centered ? "footer centered-content" : "footer";
    
    return (
        <footer className={footerClass}>
        <p>© 2025 Grupo 6 - Todos los derechos reservados</p>
        <div className="social-links">
            <a href="https://github.com/RominaGG/Segunda_entrega_FE/tree/main/Segunda-Entrega-FE">Github</a>
        </div>
        </footer>
    );
}

export default Footer;