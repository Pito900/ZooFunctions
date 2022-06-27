const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const gA = data.employees.filter((a) => a.id === id)[0].responsibleFor[0];
  const fD = data.species.filter((b) => b.id === gA)[0].residents.sort((i, j) => j.age - i.age);
  return Object.values(fD[0]);
}

module.exports = getOldestFromFirstSpecies;
