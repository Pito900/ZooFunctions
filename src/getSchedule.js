const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysWeek = Object.entries(hours);
const dayVector = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const allAnimals = species.map((item) => item.name);

const animalDay = (dayOfWeek) => {
  if (dayOfWeek === 'Monday') {
    return 'The zoo will be closed!';
  }
  return species.filter((item) => item.availability.includes(dayOfWeek)).map((a) => a.name);
};

const hoursDay = (dayOfWeek) => {
  if (hours[`${dayOfWeek}`].open === 0) {
    return 'CLOSED';
  }
  return `Open from ${hours[`${dayOfWeek}`].open}am until ${hours[`${dayOfWeek}`].close}pm`;
};

const semParametro = () => {
  const scheduleDay = {};
  daysWeek.forEach((item) => {
    scheduleDay[item[0]] = {
      officeHour: hoursDay(item[0]),
      exhibition: animalDay(item[0]),
    };
  });
  return scheduleDay;
};

const parametroDay = (options) => {
  const scheduleDay = {};
  scheduleDay[options] = {
    officeHour: hoursDay(options),
    exhibition: animalDay(options),
  };
  return scheduleDay;
};

const parametAnimal = (options) => species.filter((item) => item.name === options)[0].availability;

function getSchedule(scheduleTarget) {
  if (dayVector.includes(scheduleTarget)) {
    return parametroDay(scheduleTarget);
  }
  if (allAnimals.includes(scheduleTarget)) {
    return parametAnimal(scheduleTarget);
  }
  return semParametro();
}
console.log(getSchedule());
module.exports = getSchedule;
