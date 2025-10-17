const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);
  if (!response.ok) throw new Error('Error fetching characters');
  return response.json();
};

export const fetchLocations = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/location?page=${page}`);
  if (!response.ok) throw new Error('Error fetching locations');
  return response.json();
};

export const fetchEpisodes = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/episode?page=${page}`);
  if (!response.ok) throw new Error('Error fetching episodes');
  return response.json();
};