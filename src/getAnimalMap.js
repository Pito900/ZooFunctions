const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const semNome = (options) => {
  const locais = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach(({ location, name }) => {
    locais[location].push(name);
  });
  return locais;
};

const comNome = (options) => {
  const locais = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach(({ name, location, residents }) => {
    const GetBySex = residents.filter(({ sex }) => sex === options.sex);
    const nameBySex = GetBySex.map((a) => a.name);
    let names = residents.map((item) => item.name);
    if (options.sex) names = nameBySex;
    if (options.sorted) names.sort();
    locais[location].push({ [name]: names });
  });
  return locais;
};

function getAnimalMap(options = {}) {
  if (options.includeNames === undefined) {
    return semNome(options);
  }
  return comNome(options);
}

module.exports = getAnimalMap;
