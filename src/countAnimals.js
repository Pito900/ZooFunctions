const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const atual = {};
    species.forEach((a) => {
      atual[`${a.name}`] = a.residents.length;
    });
    return atual;
  }
  if (Object.keys(animal).length === 1) {
    return species.find((b) => b.name === animal.specie).residents.length;
  }
  const specificAnimal = species.find((c) => c.name === animal.specie);
  return specificAnimal.residents.filter((k) => k.sex === animal.sex).length;
}

module.exports = countAnimals;
