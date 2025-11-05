import React from 'react';
import '../styles/JSONData.css';

export default function FilterBar({
  searchText,
  onSearchChange,
  tipos = [],
  integrantes = [],
  selectedTipo,
  onTipoChange,
  selectedIntegrante,
  onIntegranteChange
  , onClear
}) {
  return (
    <div className="filters-container">
      <div className="filter-group">
        <label htmlFor="search">Buscar:</label>
        <input
          id="search"
          type="text"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por título, integrante, tipo, director, artista o año..."
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="tipo">Tipo:</label>
        <select id="tipo" value={selectedTipo} onChange={(e) => onTipoChange(e.target.value)} className="filter-select">
          <option value="">Todos</option>
          {tipos.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="integrante">Integrante:</label>
        <select id="integrante" value={selectedIntegrante} onChange={(e) => onIntegranteChange(e.target.value)} className="filter-select">
          <option value="">Todos</option>
          {integrantes.map(i => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>

      <div className="filter-group" style={{alignSelf: 'center'}}>
        <button type="button" className="filter-clear" onClick={() => onClear && onClear()}>Limpiar</button>
      </div>
    </div>
  );
}
