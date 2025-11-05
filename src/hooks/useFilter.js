import { useMemo } from 'react';

export default function useFilter(data = [], { searchText = '', tipo = '', integrante = '' } = {}) {
  const tipos = useMemo(() => {
    return Array.from(new Set(data.map(d => d.tipo).filter(Boolean)));
  }, [data]);

  const integrantes = useMemo(() => {
    return Array.from(new Set(data.map(d => d.integrante).filter(Boolean)));
  }, [data]);

  const filtered = useMemo(() => {
    const q = searchText ? String(searchText).toLowerCase() : '';

    return data.filter(item => {
      const matchesSearch = !q || (
        (item.titulo && item.titulo.toLowerCase().includes(q)) ||
        (item.integrante && item.integrante.toLowerCase().includes(q)) ||
        (item.tipo && item.tipo.toLowerCase().includes(q)) ||
        (item.director && item.director.toLowerCase().includes(q)) ||
        (item.artista && item.artista.toLowerCase().includes(q)) ||
        (item.año && String(item.año).includes(q))
      );

      const matchesTipo = !tipo || item.tipo === tipo;
      const matchesIntegrante = !integrante || item.integrante === integrante;

      return matchesSearch && matchesTipo && matchesIntegrante;
    });
  }, [data, searchText, tipo, integrante]);

  return { filtered, tipos, integrantes };
}
