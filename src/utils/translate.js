const statusMap = {
  Alive: 'Vivo',
  Dead: 'Muerto',
  unknown: 'Desconocido',
};

const genderMap = {
  Male: 'Masculino',
  Female: 'Femenino',
  Genderless: 'Sin género',
  unknown: 'Desconocido',
};

const speciesMap = {
  Human: 'Humano',
  Alien: 'Alienígena',
  Robot: 'Robot',
  Animal: 'Animal',
  unknown: 'Desconocido',
};

export const translateStatus = (status) => {
  if (status == null) return '';
  return statusMap[status] || status;
};

export const translateGender = (gender) => {
  if (gender == null) return '';
  return genderMap[gender] || gender;
};

export const translateSpecies = (species) => {
  if (species == null) return '';
  return speciesMap[species] || species;
};

export default { translateStatus, translateGender, translateSpecies };
