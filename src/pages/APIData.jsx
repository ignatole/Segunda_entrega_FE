import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Card from '../components/Card';
import { translateStatus, translateGender, translateSpecies } from '../utils/translate';
import '../styles/APIData.css';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

const APIData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const getUrl = () => {
    const base = `https://rickandmortyapi.com/api/character/`;
    const params = [];
    if (query) params.push(`name=${encodeURIComponent(query)}`);
    if (page) params.push(`page=${page}`);
    return `${base}?${params.join('&')}`;
  };

  const url = getUrl();
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (data && data.info && data.info.pages) {
      const total = data.info.pages;
      if (page > total) setPage(total);
    }
  }, [data, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
    setPage(1);
  };


  const goPrev = () => setPage(p => Math.max(1, p - 1));
  const goNext = () => {
    const total = data && data.info ? data.info.pages : null;
    setPage(p => (total ? Math.min(total, p + 1) : p + 1));
  };

  const goFirst = () => setPage(1);
  const goLast = () => {
    const total = data && data.info ? data.info.pages : null;
    if (total) setPage(total);
  };

  const renderCard = (item) => (
    <Card key={item.id}>
      <img className="card-image" src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
  <p>Estado: {translateStatus(item.status)}</p>
  <p>Especie: {translateSpecies(item.species)}</p>
  <p>Género: {translateGender(item.gender)}</p>
    </Card>
  );

  return (
    <div className="api-data-container">
      <h1>Datos desde API Rick and Morty</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar personaje por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
  {loading && <Loader />}
      {error && <div>Error: {error}</div>}
      {data && data.results && (
        <div className="api-cards">
          {data.results.map(renderCard)}
        </div>
      )}
      {data && !data.results && data.name && renderCard(data)}
      
      {data && data.info && (
        <Pagination
          page={page}
          total={data.info.pages}
          onPrev={goPrev}
          onNext={goNext}
          onFirst={goFirst}
          onLast={goLast}
          loading={loading}
        />
      )}
    </div>
  );
};

export default APIData;