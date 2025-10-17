import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Card from '../components/Card';
import { translateStatus, translateGender, translateSpecies } from '../utils/translate';

const APIData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');

  const getUrl = () => {
    if (query) {
      return `https://rickandmortyapi.com/api/character/?name=${query}`;
    }
    return `https://rickandmortyapi.com/api/character?page=1`;
  };

  const url = getUrl();
  const { data, loading, error } = useFetch(url);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  const renderCard = (item) => (
    <Card key={item.id}>
      <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
      <h3>{item.name}</h3>
  <p>Estado: {translateStatus(item.status)}</p>
  <p>Especie: {translateSpecies(item.species)}</p>
  <p>Género: {translateGender(item.gender)}</p>
    </Card>
  );

  return (
    <div>
      <h1>Datos desde API Rick and Morty</h1>
      <form onSubmit={handleSearch} style={{ margin: '1rem 0' }}>
        <input
          type="text"
          placeholder="Buscar personaje por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <div>Cargando datos...</div>}
      {error && <div>Error: {error}</div>}
      {data && data.results && (
        <div className="api-cards">
          {data.results.map(renderCard)}
        </div>
      )}
      {data && !data.results && data.name && renderCard(data)}
    </div>
  );
};

export default APIData;