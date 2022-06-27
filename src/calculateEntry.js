const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const coEntrants = {
    child: entrants.reduce((acc, curr) => acc + (curr.age < 18), 0),
    adult: entrants.reduce((acc, curr) => acc + (curr.age < 50 && curr.age >= 18), 0),
    senior: entrants.reduce((acc, curr) => acc + (curr.age >= 50), 0),
  };
  return coEntrants;
}

function calculateEntry(entrants) {
  if (countEntrants(entrants) === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
