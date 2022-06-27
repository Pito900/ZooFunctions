const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  if (data.employees.find((e) => e.managers.includes(id))) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (employees.find((k) => k.managers.includes(managerId))) {
    const objetoWorkers = employees.filter((e) => e.managers.includes(managerId));
    return objetoWorkers.map((a) => (`${a.firstName} ${a.lastName}`));
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
