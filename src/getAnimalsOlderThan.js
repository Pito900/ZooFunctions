const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  if (species.some((item) => (item.name === animal && item.residents.every((a) => a.age >= age)))) {
    return true;
  }
  return false;
}
module.exports = getAnimalsOlderThan;
