const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return species.filter((especie) => ids.includes(especie.id));
}
module.exports = getSpeciesByIds;
