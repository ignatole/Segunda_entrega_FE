import React from 'react';
import '../styles/Pagination.css';

export default function Pagination({
  page = 1,
  total = null,
  onPrev,
  onNext,
  onFirst,
  onLast,
  loading = false,
}) {
  const atFirst = page <= 1;
  const atLast = total ? page >= total : false;

  return (
    <nav className="pagination" role="navigation" aria-label="Paginación de resultados">
      <button
        type="button"
        className="pagination-button"
        onClick={onFirst}
        disabled={loading || atFirst}
        aria-label="Ir a la primera página"
      >
        « Primera
      </button>

      <button
        type="button"
        className="pagination-button"
        onClick={onPrev}
        disabled={loading || atFirst}
        aria-label="Página anterior"
      >
        Anterior
      </button>

      <div className="pagination-info" aria-live="polite">Página {page}{total ? ` de ${total}` : ''}</div>

      <button
        type="button"
        className="pagination-button"
        onClick={onNext}
        disabled={loading || atLast}
        aria-label="Página siguiente"
      >
        Siguiente
      </button>

      <button
        type="button"
        className="pagination-button"
        onClick={onLast}
        disabled={loading || atLast}
        aria-label="Ir a la última página"
      >
        Última »
      </button>
    </nav>
  );
}
