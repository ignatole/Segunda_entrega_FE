import React, { useMemo, useState } from 'react';
import '../styles/Bitacora.css';
import data from '../data/bitacora.json';

const Bitacora = () => {
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');

  const tags = useMemo(() => {
    const s = new Set();
    data.forEach((d) => d.tags.forEach((t) => s.add(t)));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    return data.filter((d) => {
      const q = search.trim().toLowerCase();
      const matchesSearch = !q || d.title.toLowerCase().includes(q) || d.body.toLowerCase().includes(q) || d.author.toLowerCase().includes(q);
      const matchesTag = !tag || d.tags.includes(tag);
      return matchesSearch && matchesTag;
    });
  }, [search, tag]);

  return (
    <div className="bitacora-container">
      <div className="bitacora">
        <h1>Bitácora del Proyecto</h1>

        <div className="controls">
          <input type="text" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <div className="tags">
            <button className={`tag-btn ${tag === '' ? 'active' : ''}`} onClick={() => setTag('')}>Todas</button>
            {tags.map((t) => (
              <button key={t} className={`tag-btn ${tag === t ? 'active' : ''}`} onClick={() => setTag(t)}>{t}</button>
            ))}
          </div>
        </div>

        <section className="entries">
          {filtered.map((entry) => (
            <article key={entry.id} className="entry">
              <div className="entry-date">{entry.date} • {entry.author}</div>
              <h2 className="entry-title">{entry.title}</h2>
              <div className="entry-body">
                <p>{entry.body}</p>
                {entry.tags && (
                  <div className="entry-tags">
                    {entry.tags.map((t) => <span key={t} className="entry-tag">{t}</span>)}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Bitacora;